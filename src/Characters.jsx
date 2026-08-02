import React, { useState } from 'react';
import { ArrowRight, Sparkles, User, Sword, BookOpen, Quote, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const characters = [
  {
    id: 'tony-stark',
    name: 'Tony Stark',
    title: 'The Genius Billionaire',
    image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-500 to-yellow-500',
    bio: 'Anthony Edward Stark is a wealthy American business magnate, playboy, philanthropist, and ingenious scientist who suffered a severe chest injury during a kidnapping. To save his life and escape his captors, he built a mechanized suit of armor.',
    stats: { intelligence: 98, combat: 85, charisma: 95 },
    vocabulary: [
      { word: 'Magnate', meaning: 'Người có quyền thế, trùm tư bản', type: 'Noun' },
      { word: 'Philanthropist', meaning: 'Nhà từ thiện', type: 'Noun' },
      { word: 'Ingenious', meaning: 'Khéo léo, tài tình, mưu trí', type: 'Adjective' },
      { word: 'Mechanized', meaning: 'Được cơ khí hóa', type: 'Adjective' }
    ],
    quotes: [
      { en: "I am Iron Man.", vi: "Tôi là Người Sắt." },
      { en: "Sometimes you gotta run before you can walk.", vi: "Đôi khi bạn phải chạy trước khi bạn có thể đi." }
    ]
  },
  {
    id: 'sherlock-holmes',
    name: 'Sherlock Holmes',
    title: 'The Consulting Detective',
    image: 'https://images.unsplash.com/photo-1585145199187-5c1fa18600d3?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-800',
    bio: 'A fictional private detective created by British author Sir Arthur Conan Doyle. Referring to himself as a "consulting detective", Holmes is known for his proficiency with observation, deduction, forensic science, and logical reasoning.',
    stats: { intelligence: 100, combat: 70, charisma: 60 },
    vocabulary: [
      { word: 'Deduction', meaning: 'Sự suy luận, diễn dịch', type: 'Noun' },
      { word: 'Proficiency', meaning: 'Sự thành thạo', type: 'Noun' },
      { word: 'Forensic', meaning: 'Pháp y, thuộc về pháp luật', type: 'Adjective' },
      { word: 'Improbable', meaning: 'Khó có thể xảy ra', type: 'Adjective' }
    ],
    quotes: [
      { en: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.", vi: "Khi bạn đã loại trừ những điều không thể, những gì còn lại, dù khó tin đến đâu, cũng phải là sự thật." },
      { en: "The game is afoot.", vi: "Trò chơi đã bắt đầu." }
    ]
  },
  {
    id: 'daenerys',
    name: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    image: 'https://images.unsplash.com/photo-1549416550-98363a0bb236?q=80&w=1000&auto=format&fit=crop',
    color: 'from-orange-500 to-red-800',
    bio: 'The last confirmed member of the ancient Targaryen dynasty. Raised in exile in Essos, she is fiercely determined to reclaim the Iron Throne of Westeros, which she believes is her birthright.',
    stats: { intelligence: 75, combat: 40, charisma: 98 },
    vocabulary: [
      { word: 'Exile', meaning: 'Sự lưu đày', type: 'Noun' },
      { word: 'Dynasty', meaning: 'Triều đại', type: 'Noun' },
      { word: 'Reclaim', meaning: 'Giành lại, đòi lại', type: 'Verb' },
      { word: 'Fiercely', meaning: 'Một cách mãnh liệt, dữ dội', type: 'Adverb' }
    ],
    quotes: [
      { en: "I will take what is mine with fire and blood.", vi: "Ta sẽ lấy lại những gì thuộc về mình bằng lửa và máu." },
      { en: "A dragon is not a slave.", vi: "Rồng không phải là nô lệ." }
    ]
  },
  {
    id: 'geralt',
    name: 'Geralt of Rivia',
    title: 'The White Wolf',
    image: 'https://images.unsplash.com/photo-1654637656910-1c3a645224e7?q=80&w=1000&auto=format&fit=crop',
    color: 'from-gray-500 to-gray-800',
    bio: 'A magically enhanced monster-hunter known as a Witcher. Cynical but with a strong hidden moral code, he wanders the Continent seeking coin in exchange for slaying beasts.',
    stats: { intelligence: 80, combat: 95, charisma: 50 },
    vocabulary: [
      { word: 'Enhanced', meaning: 'Được tăng cường', type: 'Adjective' },
      { word: 'Cynical', meaning: 'Hoài nghi, yếm thế', type: 'Adjective' },
      { word: 'Wander', meaning: 'Lang thang', type: 'Verb' },
      { word: 'Slay', meaning: 'Tiêu diệt, giết', type: 'Verb' }
    ],
    quotes: [
      { en: "Evil is Evil. Lesser, greater, middling... Makes no difference.", vi: "Cái ác là cái ác. Nhỏ hơn, lớn hơn, trung bình... Chẳng có gì khác biệt." },
      { en: "This world doesn't need a hero. It needs a professional.", vi: "Thế giới này không cần anh hùng. Nó cần một chuyên gia." }
    ]
  }
];

function Characters() {
  const navigate = useNavigate();
  const [selectedChar, setSelectedChar] = useState(null);

  if (selectedChar) {
    const char = characters.find(c => c.id === selectedChar);
    
    return (
      <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
          <button 
            onClick={() => setSelectedChar(null)} 
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowRight size={20} className="transform rotate-180" /> Quay lại danh sách
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative pt-[80px] h-[50vh] min-h-[400px] flex items-end pb-12 px-6">
          <div className="absolute inset-0 z-0">
            <img src={char.image} alt={char.name} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto w-full">
            <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${char.color} text-white font-bold text-sm mb-4 uppercase tracking-wider`}>
              {char.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">{char.name}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Bio & Quotes */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="text-purple-400" /> Tiểu sử (Biography)
              </h2>
              <div className="glass-panel p-6 border border-white/10 text-lg text-gray-300 leading-relaxed">
                {char.bio}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Quote className="text-fuchsia-400" /> Những câu nói nổi tiếng (Quotes)
              </h2>
              <div className="space-y-4">
                {char.quotes.map((quote, idx) => (
                  <div key={idx} className="glass-panel p-6 border-l-4 border-l-fuchsia-500 bg-white/5">
                    <p className="text-xl font-medium text-white italic mb-2">"{quote.en}"</p>
                    <p className="text-gray-400">"{quote.vi}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Stats & Vocab */}
          <div className="space-y-8">
            <section className="glass-panel p-6 border border-white/10">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-yellow-400" /> Chỉ số (Stats)
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Intelligence</span>
                    <span>{char.stats.intelligence}/100</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${char.stats.intelligence}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Combat</span>
                    <span>{char.stats.combat}/100</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${char.stats.combat}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Charisma</span>
                    <span>{char.stats.charisma}/100</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${char.stats.charisma}%` }}></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-purple-400" /> Từ vựng quan trọng
              </h2>
              <div className="space-y-3">
                {char.vocabulary.map((vocab, idx) => (
                  <div key={idx} className="glass-panel p-4 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-end justify-between mb-1">
                      <h3 className="font-bold text-lg text-white">{vocab.word}</h3>
                      <span className="text-xs text-gray-500 px-2 py-1 bg-white/10 rounded uppercase">{vocab.type}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{vocab.meaning}</p>
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
          <ArrowRight size={20} className="transform rotate-180" /> Về trang chủ
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
            Học tiếng Anh chưa bao giờ thú vị đến thế. Khám phá tiểu sử, từ vựng và những câu nói kinh điển của các nhân vật yêu thích.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r ${char.color}`}>
                  {char.title}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{char.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <BookOpen size={16} className="text-purple-400" />
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
