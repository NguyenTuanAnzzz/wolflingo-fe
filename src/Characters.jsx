import React, { useState } from 'react';
import { ArrowRight, Sparkles, Sword, BookOpen, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const characters = [
  {
    id: 'batman',
    name: 'Bruce Wayne (Batman)',
    title: 'The Dark Knight',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1000&auto=format&fit=crop',
    color: 'from-gray-700 to-black',
    bio: 'A wealthy American philanthropist who swore vengeance against criminals, an oath tempered by a sense of justice. He operates in Gotham City, striking fear into the hearts of villains.',
    vocabulary: [
      { word: 'Vigilante', meaning: 'Người hành hiệp trượng nghĩa', type: 'Noun' },
      { word: 'Vengeance', meaning: 'Sự báo thù, trả thù', type: 'Noun' },
      { word: 'Intimidation', meaning: 'Sự đe dọa, dọa dẫm', type: 'Noun' },
      { word: 'Gadget', meaning: 'Công cụ, đồ gá (công nghệ cao)', type: 'Noun' }
    ],
    quotes: [
      { en: "It's not who I am underneath, but what I do that defines me.", vi: "Không phải bản chất bên trong, mà chính những gì tôi làm mới định nghĩa tôi là ai." },
      { en: "I am vengeance. I am the night. I am Batman.", vi: "Ta là sự báo thù. Ta là màn đêm. Ta là Người Dơi." }
    ]
  },
  {
    id: 'joker',
    name: 'The Joker',
    title: 'The Clown Prince of Crime',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=1000&auto=format&fit=crop',
    color: 'from-purple-500 to-green-500',
    bio: 'A criminal mastermind with a warped, sadistic sense of humor, often acting as the chaotic antithesis to Batman\'s strict order.',
    vocabulary: [
      { word: 'Chaos', meaning: 'Sự hỗn loạn', type: 'Noun' },
      { word: 'Mastermind', meaning: 'Kẻ chủ mưu, bộ óc vĩ đại', type: 'Noun' },
      { word: 'Psychopathic', meaning: 'Bệnh hoạn, rối loạn nhân cách', type: 'Adjective' },
      { word: 'Anarchy', meaning: 'Tình trạng vô chính phủ', type: 'Noun' }
    ],
    quotes: [
      { en: "Why so serious?", vi: "Sao phải căng?" },
      { en: "All it takes is one bad day to reduce the sanest man alive to lunacy.", vi: "Tất cả những gì cần thiết chỉ là một ngày tồi tệ để biến kẻ tỉnh táo nhất thành kẻ điên rồ." }
    ]
  },
  {
    id: 'caocao',
    name: 'Cao Cao (Tào Tháo)',
    title: 'Lord of Wei',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-600 to-red-900',
    bio: 'A brilliant but ruthless warlord, statesman, and poet who rose to power towards the end of the Eastern Han dynasty, laying the foundations for the state of Cao Wei.',
    vocabulary: [
      { word: 'Warlord', meaning: 'Lãnh chúa, quân phiệt', type: 'Noun' },
      { word: 'Ruthless', meaning: 'Tàn nhẫn, vô tình', type: 'Adjective' },
      { word: 'Strategist', meaning: 'Chiến lược gia, mưu sĩ', type: 'Noun' },
      { word: 'Hegemony', absolute: false, meaning: 'Bá quyền, quyền bá chủ', type: 'Noun' }
    ],
    quotes: [
      { en: "I would rather betray the world than let the world betray me.", vi: "Ta thà phụ người trong thiên hạ, chứ không để người trong thiên hạ phụ ta." },
      { en: "Victors are not judged by the means they used.", vi: "Kẻ chiến thắng không bị phán xét bởi cách thức họ giành được nó." }
    ]
  },
  {
    id: 'liubei',
    name: 'Liu Bei (Lưu Bị)',
    title: 'Emperor of Shu Han',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop',
    color: 'from-green-500 to-emerald-700',
    bio: 'A benevolent and humane leader who sought to restore the Han dynasty, relying on the loyalty and brotherhood of his followers in an era of chaos.',
    vocabulary: [
      { word: 'Benevolent', meaning: 'Nhân từ, nhân hậu', type: 'Adjective' },
      { word: 'Brotherhood', meaning: 'Tình huynh đệ', type: 'Noun' },
      { word: 'Restoration', meaning: 'Sự phục hưng', type: 'Noun' },
      { word: 'Virtuous', meaning: 'Đức hạnh', type: 'Adjective' }
    ],
    quotes: [
      { en: "Do not fail to do good no matter how small the deed.", vi: "Chớ thấy việc thiện nhỏ mà không làm, chớ thấy việc ác nhỏ mà cứ làm." }
    ]
  },
  {
    id: 'shurikenger',
    name: 'Shurikenger',
    title: 'The Ten-Faced Phantom',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop',
    color: 'from-green-400 to-green-600',
    bio: 'A mysterious ninja warrior from Ninpuu Sentai Hurricaneger. He disguises himself as various people and frequently uses broken English mixed with Japanese.',
    vocabulary: [
      { word: 'Phantom', meaning: 'Bóng ma, ảo ảnh', type: 'Noun' },
      { word: 'Disguise', meaning: 'Cải trang, ngụy trang', type: 'Verb / Noun' },
      { word: 'Mystery', meaning: 'Bí ẩn', type: 'Noun' },
      { word: 'Extraterrestrial', meaning: 'Ngoài hành tinh', type: 'Adjective' }
    ],
    quotes: [
      { en: "I am Ninja of Ninja! The green light bullet! Tenkū Ninja Shurikenger!", vi: "Ta là Ninja của các Ninja! Viên đạn ánh sáng xanh! Thiên Không Ninja Shurikenger!" }
    ]
  },
  {
    id: 'sherlock-holmes',
    name: 'Sherlock Holmes',
    title: 'The Consulting Detective',
    image: 'https://images.unsplash.com/photo-1585145199187-5c1fa18600d3?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-800',
    bio: 'A fictional private detective created by British author Sir Arthur Conan Doyle. Holmes is known for his proficiency with observation, deduction, and forensic science.',
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
    id: 'moriarty',
    name: 'Professor Moriarty',
    title: 'The Napoleon of Crime',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000&auto=format&fit=crop',
    color: 'from-gray-800 to-black',
    bio: 'A mathematical genius and criminal mastermind, serving as the arch-nemesis of the great detective Sherlock Holmes.',
    vocabulary: [
      { word: 'Nemesis', meaning: 'Kẻ thù truyền kiếp', type: 'Noun' },
      { word: 'Underworld', meaning: 'Thế giới ngầm, xã hội đen', type: 'Noun' },
      { word: 'Web', meaning: 'Mạng lưới', type: 'Noun' },
      { word: 'Genius', meaning: 'Thiên tài', type: 'Noun' }
    ],
    quotes: [
      { en: "If you are clever enough to bring destruction upon me, rest assured that I shall do as much to you.", vi: "Nếu anh đủ thông minh để mang lại sự hủy diệt cho tôi, hãy tin rằng tôi cũng sẽ làm điều tương tự với anh." }
    ]
  },
  {
    id: 'spiderman',
    name: 'Spider-Man',
    title: 'Your Friendly Neighborhood',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-500 to-blue-500',
    bio: 'A teenage superhero who gained spider-like abilities after being bitten by a radioactive spider, fighting crime while balancing a normal life.',
    vocabulary: [
      { word: 'Radioactive', meaning: 'Phóng xạ', type: 'Adjective' },
      { word: 'Responsibility', meaning: 'Trách nhiệm', type: 'Noun' },
      { word: 'Agility', meaning: 'Sự nhanh nhẹn, linh hoạt', type: 'Noun' },
      { word: 'Neighborhood', meaning: 'Khu vực lân cận, khu phố', type: 'Noun' }
    ],
    quotes: [
      { en: "With great power comes great responsibility.", vi: "Sức mạnh càng lớn, trách nhiệm càng cao." }
    ]
  },
  {
    id: 'hannibal',
    name: 'Dr. Hannibal Lecter',
    title: 'Hannibal the Cannibal',
    image: 'https://images.unsplash.com/photo-1522093006610-8646b9a896d8?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-900 to-black',
    bio: 'A brilliant psychiatrist and cannibalistic serial killer, known for his chilling intellect, refined tastes, and terrifying manipulation.',
    vocabulary: [
      { word: 'Psychiatrist', meaning: 'Bác sĩ tâm thần', type: 'Noun' },
      { word: 'Cannibal', meaning: 'Kẻ ăn thịt người', type: 'Noun' },
      { word: 'Cultured', meaning: 'Có văn hóa, thanh lịch', type: 'Adjective' },
      { word: 'Manipulation', meaning: 'Sự thao túng', type: 'Noun' }
    ],
    quotes: [
      { en: "I ate his liver with some fava beans and a nice Chianti.", vi: "Tôi đã ăn gan của hắn với một ít đậu fava và một ly rượu vang Chianti ngon tuyệt." },
      { en: "Quid pro quo, Clarice.", vi: "Có qua có lại mới toại lòng nhau, Clarice." }
    ]
  },
  {
    id: 'tyrion',
    name: 'Tyrion Lannister',
    title: 'The Halfman',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop',
    color: 'from-yellow-500 to-red-700',
    bio: 'A dwarf member of House Lannister, relying on his sharp intellect and wit to survive in the perilous political landscape of Westeros.',
    vocabulary: [
      { word: 'Dwarf', meaning: 'Người lùn', type: 'Noun' },
      { word: 'Intellect', meaning: 'Trí tuệ', type: 'Noun' },
      { word: 'Wit', meaning: 'Sự hóm hỉnh, trí khôn', type: 'Noun' },
      { word: 'Perilous', meaning: 'Đầy hiểm nguy', type: 'Adjective' }
    ],
    quotes: [
      { en: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", vi: "Tâm trí cần sách như thanh kiếm cần đá mài, để có thể giữ được sự sắc bén." },
      { en: "Never forget what you are, for surely the world will not.", vi: "Đừng bao giờ quên bạn là ai, vì chắc chắn thế giới sẽ không quên điều đó." }
    ]
  },
  {
    id: 'tony-stark',
    name: 'Tony Stark',
    title: 'The Genius Billionaire',
    image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-500 to-yellow-500',
    bio: 'Anthony Edward Stark is a wealthy American business magnate, playboy, philanthropist, and ingenious scientist who built a mechanized suit of armor to become Iron Man.',
    vocabulary: [
      { word: 'Magnate', meaning: 'Người có quyền thế, trùm tư bản', type: 'Noun' },
      { word: 'Philanthropist', meaning: 'Nhà từ thiện', type: 'Noun' },
      { word: 'Ingenious', meaning: 'Khéo léo, tài tình', type: 'Adjective' },
      { word: 'Mechanized', meaning: 'Được cơ khí hóa', type: 'Adjective' }
    ],
    quotes: [
      { en: "I am Iron Man.", vi: "Tôi là Người Sắt." }
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
        <nav className="fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
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
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Bio & Quotes */}
          <div className="space-y-12">
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
                <Quote className="text-fuchsia-400" /> Những câu nói nổi tiếng
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

          {/* Right Column: Vocab */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-purple-400" /> Từ vựng cốt lõi
              </h2>
              <div className="space-y-3">
                {char.vocabulary.map((vocab, idx) => (
                  <div key={idx} className="glass-panel p-5 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-end justify-between mb-2">
                      <h3 className="font-bold text-xl text-white">{vocab.word}</h3>
                      <span className="text-xs text-gray-400 px-3 py-1 bg-white/10 rounded-full uppercase tracking-wider">{vocab.type}</span>
                    </div>
                    <p className="text-gray-300 text-base">{vocab.meaning}</p>
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
            Heroes & Anti-heroes. Học tiếng Anh qua phong cách, từ vựng và những câu nói kinh điển của các biểu tượng văn hóa đại chúng.
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
