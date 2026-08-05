import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Sparkles, BookOpen, CheckCircle, RefreshCw, Volume2, 
  Bookmark, BookmarkCheck, Trash2, Award, Play, Check, X, Filter, Shuffle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  getSavedWords, isWordSaved, toggleWordSaved, removeWord, 
  updateWordStatus, speakText 
} from '../utils/vocabManager';

function VocabularyPractice() {
  const [activeTab, setActiveTab] = useState('cefr'); // 'cefr' | 'review' | 'quiz'
  const [hasStarted, setHasStarted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const [summary, setSummary] = useState({ total: 0, counts: {} });
  const [currentLearningList, setCurrentLearningList] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);

  // Review List State
  const [savedWords, setSavedWords] = useState([]);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'learning' | 'mastered'

  // Quiz Mode State
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongWords, setWrongWords] = useState([]);

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  const refreshSavedWords = () => {
    setSavedWords(getSavedWords());
  };

  useEffect(() => {
    refreshSavedWords();
    const handleChanged = () => refreshSavedWords();
    window.addEventListener('vocab-review-changed', handleChanged);
    return () => window.removeEventListener('vocab-review-changed', handleChanged);
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/vocabulary/summary`)
      .then(res => res.json())
      .then(data => {
        setSummary(data);
        setIsLoadingSummary(false);
      })
      .catch(err => {
        console.error('Error fetching vocabulary summary:', err);
        setIsLoadingSummary(false);
      });
  }, [baseUrl]);

  const handleStartLevel = (level) => {
    setSelectedLevel(level);
    setIsLoadingList(true);
    setHasStarted(true);
    
    fetch(`${baseUrl}/api/vocabulary?level=${level}`)
      .then(res => res.json())
      .then(data => {
        setCurrentLearningList(data);
        setIsLoadingList(false);
      })
      .catch(err => {
        console.error('Error fetching vocabulary list:', err);
        setIsLoadingList(false);
      });
  };

  const handleStartReviewSession = () => {
    const toLearn = reviewFilter === 'all' 
      ? savedWords 
      : savedWords.filter(w => w.status === reviewFilter);
      
    if (toLearn.length === 0) return;
    setSelectedLevel('REVIEW');
    setCurrentLearningList(toLearn);
    setHasStarted(true);
    setIsFinished(false);
    setCurrentWordIndex(0);
    setShowMeaning(false);
  };

  // Generate a vocabulary quiz
  const handleStartQuiz = () => {
    const pool = savedWords.length >= 4 
      ? [...savedWords] 
      : currentLearningList.length >= 4 
        ? [...currentLearningList] 
        : [];
        
    if (pool.length < 4) {
      alert('Cần ít nhất 4 từ vựng trong danh sách hoặc kho ôn tập để bắt đầu làm trắc nghiệm!');
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.min(10, pool.length));
    const questions = shuffled.map(targetWord => {
      const wrongOptions = pool
        .filter(w => w.word !== targetWord.word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
        
      const options = [targetWord, ...wrongOptions].sort(() => 0.5 - Math.random());
      return {
        targetWord,
        options,
        questionType: Math.random() > 0.5 ? 'word_to_meaning' : 'meaning_to_word'
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIdx(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setQuizScore(0);
    setQuizFinished(false);
    setWrongWords([]);
  };

  const handleAnswerClick = (option) => {
    if (isAnswerChecked) return;
    setSelectedAnswer(option);
    setIsAnswerChecked(true);

    const currentQ = quizQuestions[currentQuizIdx];
    const isCorrect = option.word === currentQ.targetWord.word;

    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    } else {
      setWrongWords(prev => [...prev, currentQ.targetWord]);
    }
  };

  const currentWord = currentLearningList[currentWordIndex];

  // Render Sub-Navbar / Tabs
  const renderSubHeader = () => (
    <div className="max-w-5xl w-full mt-24 mb-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-3 border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <BookOpen size={14} />
          <span>Vocabulary & Review Mastery</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Chinh Phục & <span className="text-gradient">Học Lại Từ Vựng</span>
        </h1>
        <p className="text-lg text-gray-400">
          Luyện tập theo cấp độ CEFR, nghe phát âm AI chuẩn Mỹ/Anh, và tự động lưu các từ cần ôn tập để học lại sau.
        </p>
      </div>

      {/* Mode Switches */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={() => { setActiveTab('cefr'); setHasStarted(false); setIsFinished(false); }}
          className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
            activeTab === 'cefr' 
              ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_25px_rgba(192,132,252,0.4)]' 
              : 'glass-panel text-gray-400 hover:text-white'
          }`}
        >
          <BookOpen size={18} />
          <span>CEFR Level A1 - C1</span>
        </button>

        <button
          onClick={() => { setActiveTab('review'); setHasStarted(false); setIsFinished(false); }}
          className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all relative ${
            activeTab === 'review' 
              ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)]' 
              : 'glass-panel text-gray-400 hover:text-white'
          }`}
        >
          <Bookmark size={18} />
          <span>Kho Từ Cần Ôn Tập</span>
          {savedWords.length > 0 && (
            <span className="px-2 py-0.5 bg-white text-fuchsia-700 text-xs font-black rounded-full">
              {savedWords.length}
            </span>
          )}
        </button>

        <button
          onClick={() => { setActiveTab('quiz'); handleStartQuiz(); }}
          className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
            activeTab === 'quiz' 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)]' 
              : 'glass-panel text-gray-400 hover:text-white'
          }`}
        >
          <Award size={18} />
          <span>Trắc Nghiệm Từ Vựng</span>
        </button>
      </div>
    </div>
  );

  // Tab 1: CEFR Level Selection
  if (activeTab === 'cefr' && !hasStarted && !isFinished) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-20 px-6 font-inter">
        <Navbar />
        {renderSubHeader()}

        <div className="max-w-5xl w-full">
          {!isLoadingSummary ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {['A1', 'A2', 'B1', 'B2', 'C1'].map(level => {
                const count = summary.counts[level] || 0;
                return (
                  <div 
                    key={level} 
                    onClick={() => handleStartLevel(level)}
                    className="glass-panel w-full max-w-sm p-8 rounded-3xl cursor-pointer border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all flex flex-col items-center justify-center group relative overflow-hidden bg-white/5 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                      <BookOpen size={32} className="text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Level {level}</h3>
                    <p className="text-gray-400 text-base mb-8 font-medium">{count} từ vựng</p>
                    <button className="bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#818cf8] group-hover:to-[#c084fc] text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                      <Sparkles size={18} /> Bắt Đầu Học
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 animate-pulse text-xl">Đang tải dữ liệu từ vựng...</div>
          )}
        </div>
      </div>
    );
  }

  // Tab 2: Review Bank ("Kho Từ Cần Ôn Tập - Học lại các từ đó")
  if (activeTab === 'review' && !hasStarted && !isFinished) {
    const filteredWords = reviewFilter === 'all' 
      ? savedWords 
      : savedWords.filter(w => w.status === reviewFilter);

    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-20 px-6 font-inter">
        <Navbar />
        {renderSubHeader()}

        <div className="max-w-5xl w-full">
          {/* Header Action Bar */}
          <div className="glass-panel p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm font-medium">Lọc theo trạng thái:</span>
              <button 
                onClick={() => setReviewFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${reviewFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                Tất cả ({savedWords.length})
              </button>
              <button 
                onClick={() => setReviewFilter('learning')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${reviewFilter === 'learning' ? 'bg-amber-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                Chưa thuộc - Cần ôn ({savedWords.filter(w => w.status === 'learning').length})
              </button>
              <button 
                onClick={() => setReviewFilter('mastered')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${reviewFilter === 'mastered' ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                Đã thuộc ({savedWords.filter(w => w.status === 'mastered').length})
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button 
                disabled={filteredWords.length === 0}
                onClick={handleStartReviewSession}
                className={`px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${
                  filteredWords.length === 0 
                    ? 'bg-white/5 text-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                }`}
              >
                <RefreshCw size={16} />
                <span>Học Lại {filteredWords.length} Từ Này Ngay</span>
              </button>
            </div>
          </div>

          {/* Vocabulary List Grid */}
          {filteredWords.length === 0 ? (
            <div className="glass-panel p-16 text-center">
              <Bookmark size={48} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Chưa có từ vựng nào trong danh sách này</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Bạn có thể bấm biểu tượng lưu (⭐) ở bất kỳ từ vựng nào trong lúc học để thêm vào kho ôn tập này.
              </p>
              <button 
                onClick={() => setActiveTab('cefr')}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold text-sm transition-all"
              >
                Đến danh sách từ vựng CEFR
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredWords.map((item) => (
                <div 
                  key={item.id || item.word} 
                  className="glass-panel p-6 border border-white/10 hover:border-fuchsia-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-2xl font-bold text-white tracking-tight">{item.word}</h4>
                      <button 
                        onClick={() => speakText(item.word)}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/20 text-purple-400 transition-colors"
                        title="Nghe phát âm"
                      >
                        <Volume2 size={16} />
                      </button>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium border border-purple-500/30">
                        {item.level || 'CEFR'}
                      </span>
                    </div>
                    <p className="text-base text-fuchsia-300 font-medium mb-1">{item.meaning}</p>
                    {item.example && (
                      <p className="text-xs text-gray-400 italic truncate">"{item.example}"</p>
                    )}
                  </div>

                  {/* Actions: Mark Mastered vs Need Review */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateWordStatus(item.word, item.status === 'mastered' ? 'learning' : 'mastered')}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                        item.status === 'mastered'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      }`}
                    >
                      <CheckCircle size={14} />
                      <span>{item.status === 'mastered' ? 'Đã thuộc' : 'Cần ôn'}</span>
                    </button>

                    <button 
                      onClick={() => removeWord(item.word)}
                      className="p-2 rounded-full text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      title="Xóa khỏi kho ôn tập"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Tab 3: Quiz Mode ("Trắc nghiệm từ vựng")
  if (activeTab === 'quiz') {
    if (quizQuestions.length === 0) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center pb-20 px-6 font-inter">
          <Navbar />
          {renderSubHeader()}
          <div className="glass-panel max-w-md w-full p-10 text-center">
            <Award size={48} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Chưa có đủ từ vựng</h3>
            <p className="text-gray-400 mb-6">Bạn cần ít nhất 4 từ vựng trong kho hoặc trong bài học để tạo bài kiểm tra nhanh.</p>
            <button 
              onClick={() => setActiveTab('cefr')}
              className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-6 py-3 rounded-full font-bold text-sm"
            >
              Chọn bài học ngay
            </button>
          </div>
        </div>
      );
    }

    if (quizFinished) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
          <Navbar />
          <div className="text-center glass-panel p-16 max-w-xl w-full border border-white/10 flex flex-col items-center mt-20">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 border border-emerald-500/50">
              <Award size={48} className="text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Kết Quả Trắc Nghiệm!</h1>
            <p className="text-xl text-gray-400 mb-8">
              Bạn đúng <span className="text-emerald-400 font-bold">{quizScore}</span> / {quizQuestions.length} câu.
            </p>

            {wrongWords.length > 0 && (
              <div className="w-full mb-8 text-left bg-red-500/10 p-5 rounded-2xl border border-red-500/20">
                <h4 className="font-bold text-red-300 text-sm mb-3">Các từ bạn trả lời sai ({wrongWords.length} từ):</h4>
                <div className="flex flex-wrap gap-2">
                  {wrongWords.map((w, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-500/20 text-red-200 rounded-full text-xs font-medium">
                      {w.word} — {w.meaning}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    wrongWords.forEach(w => toggleWordSaved(w));
                    alert(`Đã lưu ${wrongWords.length} từ sai vào Kho từ cần ôn tập!`);
                  }}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-xs font-bold transition-all"
                >
                  ⭐ Lưu Tất Cả Từ Sai Vào Kho Ôn Tập
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button 
                onClick={handleStartQuiz}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Làm Lại Trắc Nghiệm
              </button>

              <button 
                onClick={() => setActiveTab('review')}
                className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              >
                Về Kho Ôn Tập
              </button>
            </div>
          </div>
        </div>
      );
    }

    const q = quizQuestions[currentQuizIdx];

    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
        <Navbar />
        <div className="max-w-xl w-full mt-20">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 font-medium">Câu hỏi {currentQuizIdx + 1} / {quizQuestions.length}</span>
            <span className="text-emerald-400 font-bold">Điểm: {quizScore}</span>
          </div>

          <div className="glass-panel p-10 text-center mb-8 border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-3 block">
              {q.questionType === 'word_to_meaning' ? 'Chọn nghĩa đúng cho từ tiếng Anh:' : 'Chọn từ tiếng Anh có nghĩa:'}
            </span>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                {q.questionType === 'word_to_meaning' ? q.targetWord.word : q.targetWord.meaning}
              </h2>
              {q.questionType === 'word_to_meaning' && (
                <button
                  onClick={() => speakText(q.targetWord.word)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-purple-400 transition-colors"
                >
                  <Volume2 size={24} />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {q.options.map((opt, i) => {
              const label = ['A', 'B', 'C', 'D'][i];
              const isCorrect = opt.word === q.targetWord.word;
              const isSelected = selectedAnswer && selectedAnswer.word === opt.word;

              let btnStyle = "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-purple-500/40";
              if (isAnswerChecked) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-red-500/20 border-red-500 text-red-300";
                } else {
                  btnStyle = "bg-white/5 border-white/10 text-gray-500 opacity-50";
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswerChecked}
                  onClick={() => handleAnswerClick(opt)}
                  className={`w-full p-5 rounded-2xl border text-left font-medium transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">
                      {label}
                    </span>
                    <span className="text-lg">
                      {q.questionType === 'word_to_meaning' ? opt.meaning : opt.word}
                    </span>
                  </div>
                  {isAnswerChecked && isCorrect && <Check size={20} className="text-emerald-400" />}
                  {isAnswerChecked && isSelected && !isCorrect && <X size={20} className="text-red-400" />}
                </button>
              );
            })}
          </div>

          {isAnswerChecked && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => {
                  if (currentQuizIdx < quizQuestions.length - 1) {
                    setCurrentQuizIdx(prev => prev + 1);
                    setSelectedAnswer(null);
                    setIsAnswerChecked(false);
                  } else {
                    setQuizFinished(true);
                  }
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{currentQuizIdx === quizQuestions.length - 1 ? 'Xem Kết Quả' : 'Câu Tiếp Theo'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Finish Mode for Flashcard learning
  if (isFinished) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
        <Navbar />
        <div className="text-center glass-panel p-16 max-w-xl w-full border border-white/10 flex flex-col items-center mt-16">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/50">
            <CheckCircle size={48} className="text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Tuyệt Vời!</h1>
          <p className="text-xl text-gray-400 mb-10">
            Bạn đã hoàn thành <span className="text-fuchsia-400 font-bold">{currentLearningList.length}</span> từ vựng {selectedLevel ? `ở Level ${selectedLevel}` : ''} hôm nay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              onClick={() => {
                setHasStarted(false);
                setIsFinished(false);
                setCurrentWordIndex(0);
                setShowMeaning(false);
              }}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              Chọn Danh Sách Khác
            </button>
            
            <button 
              onClick={() => { setActiveTab('review'); setHasStarted(false); setIsFinished(false); }}
              className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(192,132,252,0.4)] flex items-center justify-center gap-2"
            >
              <Bookmark size={20} />
              Xem Kho Ôn Tập ({savedWords.length})
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Flashcards Learning View (CEFR or Review List)
  const isCurrentSaved = isWordSaved(currentWord?.word);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
      <Navbar />
      <button 
        onClick={() => { setHasStarted(false); setCurrentWordIndex(0); setShowMeaning(false); }} 
        className="absolute top-24 left-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium z-10"
      >
        <ArrowRight size={20} className="transform rotate-180" /> Quay lại danh sách
      </button>
      
      {isLoadingList ? (
        <div className="text-xl text-gray-400 animate-pulse mt-20">Đang tải dữ liệu từ vựng Level {selectedLevel}...</div>
      ) : currentLearningList.length > 0 && currentWord ? (
        <div className="max-w-2xl w-full mt-20">
          {/* Top Bar with Audio and Save Bookmark */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-gray-400">
              {selectedLevel ? `${selectedLevel} • ` : ''}Từ vựng {currentWordIndex + 1} / {currentLearningList.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => speakText(currentWord.word)}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-purple-400 transition-all flex items-center gap-2 font-bold text-sm"
              >
                <Volume2 size={18} />
                <span>Nghe Phát Âm</span>
              </button>

              <button
                onClick={() => {
                  toggleWordSaved(currentWord);
                  refreshSavedWords();
                }}
                className={`px-4 py-2 rounded-full border text-sm font-bold transition-all flex items-center gap-2 ${
                  isCurrentSaved
                    ? 'bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {isCurrentSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                <span>{isCurrentSaved ? 'Đã Lưu Ôn Tập' : 'Lưu Ôn Tập'}</span>
              </button>
            </div>
          </div>
          
          {/* Flashcard Box */}
          <div 
            className="glass-panel w-full aspect-[3/2] flex flex-col items-center justify-center p-10 cursor-pointer hover:shadow-[0_0_50px_rgba(192,132,252,0.15)] transition-all border border-white/10 relative overflow-hidden group"
            onClick={() => setShowMeaning(!showMeaning)}
          >
            {!showMeaning ? (
              <div className="text-center">
                <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
                  {currentWord.word}
                </h1>
                {currentWord.pronunciation && (
                  <p className="text-xl text-purple-300 font-medium mb-6">{currentWord.pronunciation}</p>
                )}
                <p className="text-gray-500 mt-6 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-purple-400" /> Bấm vào thẻ để lật xem nghĩa tiếng Việt
                </p>
              </div>
            ) : (
              <div className="text-center max-w-full">
                <h1 className="text-4xl sm:text-5xl font-bold text-fuchsia-400 mb-4">{currentWord.word}</h1>
                <p className="text-3xl font-medium text-white mb-6">{currentWord.meaning}</p>
                {currentWord.example && (
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 inline-block max-w-full mb-4">
                    <p className="text-lg text-gray-300 italic truncate sm:whitespace-normal">
                      "{currentWord.example}"
                    </p>
                  </div>
                )}
                <p className="text-gray-500 mt-4 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-purple-400" /> Bấm để che nghĩa lại
                </p>
              </div>
            )}
          </div>
          
          {/* Status buttons: Đã thuộc vs Chưa thuộc */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => {
                updateWordStatus(currentWord.word, 'learning');
                if (!isCurrentSaved) {
                  toggleWordSaved(currentWord);
                  refreshSavedWords();
                }
              }}
              className="px-5 py-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all"
            >
              🔄 Chưa thuộc - Cần ôn
            </button>

            <button
              onClick={() => {
                updateWordStatus(currentWord.word, 'mastered');
              }}
              className="px-5 py-2 rounded-full bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/40 text-xs font-bold transition-all"
            >
              ✔ Đã thuộc
            </button>
          </div>

          {/* Bottom Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              disabled={currentWordIndex === 0}
              onClick={() => {
                setCurrentWordIndex(prev => prev - 1);
                setShowMeaning(false);
              }}
              className={`px-8 py-4 rounded-full font-bold transition-all ${
                currentWordIndex === 0 
                  ? 'bg-white/5 text-gray-600 cursor-not-allowed' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Từ trước
            </button>
            
            <button 
              onClick={() => {
                if (currentWordIndex === currentLearningList.length - 1) {
                  setIsFinished(true);
                } else {
                  setCurrentWordIndex(prev => prev + 1);
                  setShowMeaning(false);
                }
              }}
              className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(192,132,252,0.4)]"
            >
              {currentWordIndex === currentLearningList.length - 1 ? 'Hoàn thành' : 'Từ tiếp theo'}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-xl text-gray-400 mt-20">Không tìm thấy từ vựng nào trong danh sách.</div>
      )}
    </div>
  );
}

export default VocabularyPractice;
