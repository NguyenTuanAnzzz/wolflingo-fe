import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, CheckCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Learn({ vocabulary }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const getLevel = (v) => {
    if (v.level) return v.level.toUpperCase();
    if (v.example) {
      const match = v.example.match(/Level:\s*([A-C][1-2])/i);
      if (match) return match[1].toUpperCase();
    }
    return null;
  };

  const currentLearningList = selectedLevel 
    ? vocabulary.filter(v => getLevel(v) === selectedLevel)
    : vocabulary;

  const currentWord = currentLearningList[currentWordIndex];

  // Preview Mode: Show list of words before starting
  if (!hasStarted && !isFinished) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative font-inter">
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
        >
          <ArrowRight size={20} className="transform rotate-180" /> Quay lại trang chủ
        </button>

        <div className="max-w-5xl w-full mt-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Chọn cấp độ để bắt đầu học</h1>
            <p className="text-xl text-gray-400">
              Chọn một trong các cấp độ dưới đây để bắt đầu ôn luyện.
            </p>
          </div>

          {vocabulary.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {['A1', 'A2', 'B1', 'B2', 'C1'].map(level => {
                const wordsInLevel = vocabulary.filter(v => getLevel(v) === level);
                return (
                  <div 
                    key={level} 
                    onClick={() => {
                      setSelectedLevel(level);
                      setHasStarted(true);
                    }}
                    className="glass-panel w-full max-w-sm p-10 rounded-3xl cursor-pointer border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all flex flex-col items-center justify-center group relative overflow-hidden bg-white/5 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                      <BookOpen size={40} className="text-purple-400" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">Level {level}</h3>
                    <p className="text-gray-400 text-lg mb-8 font-medium">{wordsInLevel.length} từ vựng</p>
                    <button className="bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#818cf8] group-hover:to-[#c084fc] text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                      <Sparkles size={18} /> Bắt Đầu Học
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8 animate-pulse text-xl">Đang tải dữ liệu...</div>
          )}
        </div>
      </div>
    );
  }

  // Finish Mode: Shown when all words are learned
  if (isFinished) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
        <div className="text-center glass-panel p-16 max-w-xl w-full border border-white/10 flex flex-col items-center">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/50">
            <CheckCircle size={48} className="text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Tuyệt Vời!</h1>
          <p className="text-xl text-gray-400 mb-10">Bạn đã hoàn thành <span className="text-fuchsia-400 font-bold">{currentLearningList.length}</span> từ vựng {selectedLevel ? `ở Level ${selectedLevel}` : ''} hôm nay.</p>
          
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
              Học Lại Bộ Này
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(192,132,252,0.4)] flex items-center justify-center gap-2"
            >
              <ArrowRight size={20} />
              Về Trang Chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Learning Mode: Flashcards
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center font-inter p-6 relative">
      <button 
        onClick={() => { setHasStarted(false); setCurrentWordIndex(0); setShowMeaning(false); }} 
        className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
      >
        <ArrowRight size={20} className="transform rotate-180" /> Quay lại danh sách
      </button>
      
      {currentLearningList.length > 0 && currentWord ? (
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-400">{selectedLevel ? `Level ${selectedLevel} - ` : ''}Từ vựng {currentWordIndex + 1} / {currentLearningList.length}</h2>
          </div>
          
          <div 
            className="glass-panel w-full aspect-[3/2] flex flex-col items-center justify-center p-10 cursor-pointer hover:shadow-[0_0_50px_rgba(192,132,252,0.15)] transition-all border border-white/10"
            onClick={() => setShowMeaning(!showMeaning)}
          >
            {!showMeaning ? (
              <div className="text-center animate-pulse">
                <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight">{currentWord.word}</h1>
                <p className="text-gray-500 mt-8 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-purple-400" /> Bấm vào thẻ để lật xem nghĩa
                </p>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-fuchsia-400 mb-6">{currentWord.word}</h1>
                <p className="text-3xl font-medium text-white mb-6">{currentWord.meaning}</p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 inline-block max-w-full">
                  <p className="text-xl text-gray-300 italic truncate sm:whitespace-normal">"{currentWord.example}"</p>
                </div>
                <p className="text-gray-500 mt-8 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-purple-400" /> Bấm để che lại
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center mt-12">
            <button 
              disabled={currentWordIndex === 0}
              onClick={() => {
                setCurrentWordIndex(prev => prev - 1);
                setShowMeaning(false);
              }}
              className={`px-8 py-4 rounded-full font-bold transition-all ${currentWordIndex === 0 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`}
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
        <div className="text-xl text-gray-400 animate-pulse">Đang tải dữ liệu từ vựng...</div>
      )}
    </div>
  );
}

export default Learn;
