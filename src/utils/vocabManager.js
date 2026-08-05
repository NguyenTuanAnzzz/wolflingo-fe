const STORAGE_KEY = 'sequence_review_vocab_list';

export const getSavedWords = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error reading saved vocabulary:', err);
    return [];
  }
};

export const isWordSaved = (wordTextOrId) => {
  if (!wordTextOrId) return false;
  const list = getSavedWords();
  const target = String(wordTextOrId).toLowerCase().trim();
  return list.some(
    item => String(item.word || '').toLowerCase().trim() === target || String(item.id || '') === target
  );
};

export const saveWord = (wordObj) => {
  if (!wordObj || !wordObj.word) return false;
  const list = getSavedWords();
  const target = String(wordObj.word).toLowerCase().trim();
  if (!list.some(item => String(item.word).toLowerCase().trim() === target)) {
    const newEntry = {
      id: wordObj.id || `saved_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      word: wordObj.word,
      meaning: wordObj.meaning || 'Chưa có nghĩa',
      pos: wordObj.pos || wordObj.type || 'vocab',
      pronunciation: wordObj.pronunciation || '',
      example: wordObj.example || '',
      level: wordObj.level || 'Custom',
      status: 'learning', // 'learning' (Chưa thuộc / Cần ôn) or 'mastered' (Đã thuộc)
      savedAt: Date.now()
    };
    list.unshift(newEntry);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('vocab-review-changed', { detail: { count: list.length } }));
      return true;
    } catch (e) {
      console.error('Error saving vocab:', e);
    }
  }
  return false;
};

export const removeWord = (wordTextOrId) => {
  if (!wordTextOrId) return;
  const list = getSavedWords();
  const target = String(wordTextOrId).toLowerCase().trim();
  const updated = list.filter(
    item => String(item.word || '').toLowerCase().trim() !== target && String(item.id || '') !== target
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('vocab-review-changed', { detail: { count: updated.length } }));
  } catch (e) {
    console.error('Error removing vocab:', e);
  }
};

export const toggleWordSaved = (wordObj) => {
  if (!wordObj || !wordObj.word) return false;
  if (isWordSaved(wordObj.word)) {
    removeWord(wordObj.word);
    return false;
  } else {
    saveWord(wordObj);
    return true;
  }
};

export const updateWordStatus = (wordTextOrId, newStatus) => {
  const list = getSavedWords();
  const target = String(wordTextOrId).toLowerCase().trim();
  let found = false;
  const updated = list.map(item => {
    if (String(item.word || '').toLowerCase().trim() === target || String(item.id || '') === target) {
      found = true;
      return { ...item, status: newStatus };
    }
    return item;
  });
  if (found) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('vocab-review-changed', { detail: { count: updated.length } }));
    } catch (e) {
      console.error('Error updating status:', e);
    }
  }
};

// Web Speech API Pronunciation
export const speakText = (text, options = {}) => {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate || 1.0;
  utterance.pitch = options.pitch || 1.0;
  utterance.lang = options.lang || 'en-US';

  // Try to find a good English voice
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const preferredVoice = voices.find(v => 
      (options.accent === 'UK' ? v.lang.includes('en-GB') : v.lang.includes('en-US')) && !v.name.includes('eSpeak')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
  }

  window.speechSynthesis.speak(utterance);
  return true;
};
