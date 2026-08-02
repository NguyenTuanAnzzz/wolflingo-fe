import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Sword, BookOpen, Quote, ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const HighlightedText = ({ text, vocabulary, lang = 'en' }) => {
  if (!text || !vocabulary || vocabulary.length === 0) {
    return <>{text}</>;
  }

  const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const itemsToMatch = [];
  vocabulary.forEach((v) => {
    if (lang === 'en' && v.word) {
      itemsToMatch.push({
        pattern: `\\b${escapeRegExp(v.word)}(?:s|es|ed|ing|d)?\\b`,
        vocab: v,
        displayTooltip: `${v.word} (${v.type || 'Vocab'}): ${v.meaning}`
      });
    } else if (lang === 'vi' && v.meaning) {
      const primaryMeaning = v.meaning.split(/[,;]/)[0].trim();
      if (primaryMeaning.length >= 2) {
        itemsToMatch.push({
          pattern: `${escapeRegExp(primaryMeaning)}`,
          vocab: v,
          displayTooltip: `${v.word} (${v.type || 'Vocab'}) - Tiếng Anh`
        });
      }
    }
  });

  if (itemsToMatch.length === 0) {
    return <>{text}</>;
  }

  itemsToMatch.sort((a, b) => b.pattern.length - a.pattern.length);

  const regex = new RegExp(`(${itemsToMatch.map((item) => item.pattern).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;
        const matchedItem = itemsToMatch.find((item) => {
          const testRegex = new RegExp(`^${item.pattern}$`, 'i');
          return testRegex.test(part);
        });

        if (matchedItem) {
          return (
            <span
              key={index}
              title={matchedItem.displayTooltip}
              className="inline px-1.5 py-0.5 rounded-md bg-fuchsia-500/20 text-fuchsia-300 font-semibold border border-fuchsia-500/40 cursor-help hover:bg-fuchsia-500 hover:text-white transition-all shadow-sm"
            >
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};

function Characters() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [fullChar, setFullChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [charLoading, setCharLoading] = useState(false);
  const [bioLang, setBioLang] = useState('vi');

  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch characters from backend
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/characters`);
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [apiUrl]);

  // Fetch character details when URL param `id` changes
  useEffect(() => {
    if (id) {
      setSelectedChar(id);
      setCharLoading(true);
      fetch(`${apiUrl}/api/characters/${id}`)
        .then(async (response) => {
          if (!response.ok) {
            throw new Error('Character not found');
          }
          return response.json();
        })
        .then((data) => {
          setFullChar(data);
        })
        .catch((error) => {
          console.error('Error fetching character details:', error);
          setFullChar(null);
        })
        .finally(() => {
          setCharLoading(false);
        });
    } else {
      setSelectedChar(null);
      setFullChar(null);
    }
  }, [id, apiUrl]);

  const handleSelectChar = (charId) => {
    navigate(`/character/${charId}`);
  };

  // Scroll to top when a character is selected
  useEffect(() => {
    if (selectedChar || id) {
      window.scrollTo(0, 0);
    }
  }, [selectedChar, id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (selectedChar || id) {
    if (charLoading) {
      return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    if (!fullChar || !fullChar.name) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-2">Không tìm thấy nhân vật</h2>
            <p className="text-gray-400">Nhân vật bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          </div>
          <button 
            onClick={() => navigate('/characters')}
            className="px-6 py-2.5 rounded-xl bg-fuchsia-500 text-white font-medium hover:bg-fuchsia-600 transition-colors flex items-center gap-2 shadow-lg"
          >
            <ChevronLeft size={18} /> Quay lại danh mục
          </button>
        </div>
      );
    }

    const char = fullChar;
    
    return (
      <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/characters')} 
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            <ChevronLeft size={20} /> Quay lại danh mục
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative pt-[80px] h-[50vh] min-h-[400px] flex items-end pb-12 px-6">
          <div className="absolute inset-0 z-0">
            <img src={char.image} alt={char.name} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1000px] mx-auto w-full">
            <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${char.color} text-white font-bold text-sm mb-4 uppercase tracking-wider`}>
              {char.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">{char.name}</h1>
          </div>
        </div>

        {/* Content Section (Wiki Style) */}
        <div className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column: Bio (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <BookOpen className="text-purple-400" /> Tiểu sử (Biography)
                </h2>
                <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                  <button 
                    onClick={() => setBioLang('vi')}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${bioLang === 'vi' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    Tiếng Việt
                  </button>
                  <button 
                    onClick={() => setBioLang('en')}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${bioLang === 'en' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    English
                  </button>
                </div>
              </div>
              
              <div className="space-y-10">
                {char.bio.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-100">{section.heading[bioLang]}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
                      <HighlightedText text={section.text[bioLang]} vocabulary={char.vocabulary} lang={bioLang} />
                    </p>
                    {section.image && (
                      <div className="rounded-xl overflow-hidden border border-white/10 my-6 shadow-2xl">
                        <img 
                          src={section.image} 
                          alt={typeof section.heading === 'object' ? (section.heading[bioLang] || section.heading.en || '') : section.heading} 
                          className="w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {char.gallery && char.gallery.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                    <Sparkles className="text-blue-400" /> Thư viện ảnh (Gallery)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {char.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <img 
                          src={img} 
                          alt={`${char.name} gallery ${idx + 1}`} 
                          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right Column: Vocab & Quotes (1/3 width) */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <Quote className="text-fuchsia-400" /> Câu nói kinh điển
              </h2>
              <div className="space-y-6">
                {char.quotes.map((quote, idx) => (
                  <div key={idx} className="glass-panel p-6 border-l-4 border-l-fuchsia-500 bg-white/5 relative group">
                    <Quote className="absolute top-4 right-4 text-white/5 group-hover:text-fuchsia-500/20 transition-colors" size={40} />
                    <p className="text-lg font-medium text-white italic mb-3 relative z-10">
                      "<HighlightedText text={quote.en} vocabulary={char.vocabulary} lang="en" />"
                    </p>
                    <p className="text-gray-400 text-sm relative z-10">
                      "<HighlightedText text={quote.vi} vocabulary={char.vocabulary} lang="vi" />"
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <Sparkles className="text-purple-400" /> Từ vựng cốt lõi
              </h2>
              <div className="space-y-4">
                {char.vocabulary.map((vocab, idx) => (
                  <div key={idx} className="glass-panel p-5 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-white">{vocab.word}</h3>
                      <span className="text-[10px] font-bold text-purple-200 px-2 py-1 bg-purple-500/20 rounded uppercase tracking-wider">
                        {vocab.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{vocab.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30 pb-20">
      <nav className="w-full z-50 top-0 bg-[#050505] border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')} 
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
        >
          <ChevronLeft size={20} /> Về trang chủ
        </button>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-white/20">
            <Sword size={16} className="text-red-400" />
            <span className="text-[14px] font-medium text-gray-200">Tiêu Điểm Nhân Vật</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Học Qua <span className="text-gradient">Nhân Vật</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Heroes & Anti-heroes. Khám phá tiểu sử chuyên sâu, từ vựng đặc trưng và những câu nói kinh điển của các biểu tượng văn hóa đại chúng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {characters.map(char => (
            <div 
              key={char.id}
              onClick={() => handleSelectChar(char.id)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[3/4] border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
            >
              <img 
                src={char.image} 
                alt={char.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-5 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 bg-clip-text text-transparent bg-gradient-to-r ${char.color}`}>
                  {char.title}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{char.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <BookOpen size={14} className="text-purple-400" />
                  <span>{char.vocabulary.length} từ vựng</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;
