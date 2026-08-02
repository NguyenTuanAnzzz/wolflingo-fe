import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Sword, BookOpen, Quote, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Characters() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch characters from backend
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://wolflingo.onrender.com/api/characters');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  // Scroll to top when a character is selected
  useEffect(() => {
    if (selectedChar) {
      window.scrollTo(0, 0);
    }
  }, [selectedChar]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (selectedChar) {
    const char = characters.find(c => c.id === selectedChar);
    
    return (
      <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => setSelectedChar(null)} 
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
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
                <BookOpen className="text-purple-400" /> Tiểu sử (Biography)
              </h2>
              
              <div className="space-y-10">
                {char.bio.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-100">{section.heading}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
                      {section.text}
                    </p>
                    {section.image && (
                      <div className="rounded-xl overflow-hidden border border-white/10 my-6 shadow-2xl">
                        <img 
                          src={section.image} 
                          alt={section.heading} 
                          className="w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
                    <p className="text-lg font-medium text-white italic mb-3 relative z-10">"{quote.en}"</p>
                    <p className="text-gray-400 text-sm relative z-10">"{quote.vi}"</p>
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
              onClick={() => setSelectedChar(char.id)}
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
