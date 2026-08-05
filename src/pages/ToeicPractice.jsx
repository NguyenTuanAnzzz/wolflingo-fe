import React, { useState, useEffect } from 'react';
import { 
  Headphones, BookOpen, Volume2, CheckCircle, XCircle, 
  ArrowRight, Sparkles, RefreshCw, Eye, EyeOff, Award,
  HelpCircle, VolumeX, Play, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { speakText } from '../utils/vocabManager';

const Part1PhotographCard = ({ item }) => {
  const [imgError, setImgError] = React.useState(false);
  const [showSvg, setShowSvg] = React.useState(false);

  const getSvgIllustration = (id) => {
    switch (id) {
      case 't_p1_1':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="w-64 h-40 bg-slate-800/90 rounded-2xl border border-indigo-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="w-28 h-16 bg-indigo-500/20 rounded-lg border border-indigo-400/40 mb-3 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-400/30 border border-indigo-300/50 flex items-center justify-center text-base">👨‍💼</div>
                <div className="w-10 h-10 rounded-full bg-purple-400/30 border border-purple-300/50 flex items-center justify-center text-base">👩‍💼</div>
                <div className="w-10 h-10 rounded-full bg-blue-400/30 border border-blue-300/50 flex items-center justify-center text-base">👨‍💻</div>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-indigo-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🏢 Conference Room & Laptop Screen Presentation
            </p>
          </div>
        );
      case 't_p1_2':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-blue-900/50 rounded-2xl border border-blue-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">✈️</div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">👩</span>
                <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full border border-blue-400/40 text-blue-200 font-medium">🎫 Check-in Counter</span>
                <span className="text-2xl">👨‍✈️</span>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-blue-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🛫 Airport Check-in Counter & Boarding Pass
            </p>
          </div>
        );
      case 't_p1_3':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-amber-950/70 via-stone-900 to-amber-950/80 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-amber-900/40 rounded-2xl border border-amber-600/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-2">☕</div>
              <div className="flex items-center gap-2 text-amber-200 text-xs font-medium">
                <span className="text-xl">👨‍🍳</span>
                <span>Barista serving at Wooden Counter</span>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-amber-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              ☕ Barista Serving Coffee Across Counter
            </p>
          </div>
        );
      case 't_p1_4':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-yellow-950/60 via-slate-900 to-stone-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-yellow-900/30 rounded-2xl border border-yellow-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="flex gap-4 text-4xl mb-3">
                <span>👷‍♂️</span>
                <span>🏗️</span>
                <span>👷‍♀️</span>
              </div>
              <div className="text-xs bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-300 font-medium">
                📐 Construction Site & Blueprints
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-yellow-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🏗️ Engineers wearing hard hats inspecting blueprints
            </p>
          </div>
        );
      case 't_p1_5':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-emerald-950/70 via-slate-900 to-emerald-950/50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-emerald-900/40 rounded-2xl border border-emerald-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">📚</div>
              <div className="flex items-center gap-2 text-emerald-200 text-xs font-medium">
                <span>📖 Library Reading Room & Bookshelves</span>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-emerald-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              📖 Bookshelves filled with books & reading desks
            </p>
          </div>
        );
      case 't_p1_6':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-cyan-900/30 rounded-2xl border border-cyan-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">🖥️</div>
              <div className="text-xs bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/40 text-cyan-300 font-medium">
                🪑 Modern Office Desks & Ergonomic Chairs
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-cyan-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🏢 Clean Office Interior & Computer Stations
            </p>
          </div>
        );
      case 't_p1_7':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-violet-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-violet-900/30 rounded-2xl border border-violet-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">🔬</div>
              <div className="text-xs bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/40 text-violet-300 font-medium">
                🧪 Laboratory & Microscope Examination
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-violet-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🔬 Scientist in Lab Coat using Microscope
            </p>
          </div>
        );
      case 't_p1_8':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-green-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-green-900/30 rounded-2xl border border-green-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">🛒</div>
              <div className="text-xs bg-green-500/20 px-3 py-1 rounded-full border border-green-500/40 text-green-300 font-medium">
                🥦 Supermarket Produce Section
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-green-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🛒 Shopper Selecting Fresh Vegetables at Supermarket
            </p>
          </div>
        );
      case 't_p1_9':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-sky-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-sky-900/30 rounded-2xl border border-sky-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">🏃‍♂️</div>
              <div className="text-xs bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/40 text-sky-300 font-medium">
                🌳 Park Lakeside Trail
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-sky-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🏃‍♀️ People Jogging along a Sunny Park Path
            </p>
          </div>
        );
      case 't_p1_10':
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-rose-950/70 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-rose-900/30 rounded-2xl border border-rose-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">🍽️</div>
              <div className="text-xs bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/40 text-rose-300 font-medium">
                👨‍🍳 Restaurant Dining Service
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-rose-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              🍽️ Waiter Serving Dishes to Customers at Table
            </p>
          </div>
        );
      default:
        return (
          <div className="w-full h-[320px] sm:h-[400px] bg-gradient-to-br from-purple-950/50 via-slate-900 to-indigo-950/50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-64 h-40 bg-purple-900/30 rounded-2xl border border-purple-500/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
              <div className="text-5xl mb-3">📸</div>
              <div className="text-xs text-purple-200 text-center px-2 font-medium">
                {item.imageDescription || "TOEIC Part 1 Photograph"}
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-purple-300 bg-black/60 px-5 py-2 rounded-full border border-white/10 z-10 shadow-lg">
              📸 {item.title || "TOEIC Photograph Illustration"}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="my-6 relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group max-w-2xl mx-auto">
      {item.imageUrl && !imgError && !showSvg ? (
        <img
          src={item.imageUrl}
          alt={item.title || "TOEIC Part 1 Photograph"}
          onError={() => setImgError(true)}
          className="w-full h-[320px] sm:h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        getSvgIllustration(item.id)
      )}
      <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-purple-300 flex items-center gap-1.5 shadow-md">
        <span>📸</span>
        <span>TOEIC Part 1 Photograph {imgError || showSvg ? '(Minh họa trực quan)' : ''}</span>
      </div>
      {item.imageUrl && (
        <button
          type="button"
          onClick={() => {
            if (imgError) {
              setImgError(false);
              setShowSvg(false);
            } else {
              setShowSvg(!showSvg);
            }
          }}
          className="absolute top-3 right-3 px-3 py-1.5 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full border border-white/20 text-xs font-medium text-white flex items-center gap-1.5 shadow-lg transition-all cursor-pointer z-20"
        >
          {imgError ? (
            <><span>🔄</span><span>Thử tải lại ảnh gốc</span></>
          ) : showSvg ? (
            <><span>🖼️</span><span>Xem ảnh thực tế</span></>
          ) : (
            <><span>🎨</span><span>Xem hình minh họa SVG</span></>
          )}
        </button>
      )}
    </div>
  );
};

function ToeicPractice() {
  const [activeTab, setActiveTab] = useState('part1'); // 'part1' | 'part2' | 'part3' | 'part4' | 'part5'
  const [data, setData] = useState({ listening: {}, reading: {} });
  const [isLoading, setIsLoading] = useState(true);

  // Question state tracking: { [questionId]: selectedOptionLabel }
  const [userAnswers, setUserAnswers] = useState({});
  // Checked questions: { [questionId]: boolean }
  const [checkedQuestions, setCheckedQuestions] = useState({});
  // Script visibility for Part 3 & Part 4: { [id]: boolean }
  const [showScript, setShowScript] = useState({});
  // Translation visibility: { [id]: boolean }
  const [showTranslation, setShowTranslation] = useState({});
  // Audio playing indicator
  const [isPlayingId, setIsPlayingId] = useState(null);
  // Exam selector state
  const [examList, setExamList] = useState([]);
  const [selectedExamId, setSelectedExamId] = useState(1);
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'exam'

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${baseUrl}/api/toeic/list`)
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) setExamList(json);
      })
      .catch(err => console.error('Error fetching TOEIC exam list:', err));
  }, [baseUrl]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/api/toeic?examId=${selectedExamId}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching TOEIC data:', err);
        setIsLoading(false);
      });
  }, [baseUrl, selectedExamId]);

  const handleSelectAnswer = (questionId, label) => {
    if (checkedQuestions[questionId]) return; // Do not change after checked
    setUserAnswers(prev => ({ ...prev, [questionId]: label }));
  };

  const handleCheckAnswer = (questionId) => {
    if (!userAnswers[questionId]) return;
    setCheckedQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const handleResetSection = () => {
    setUserAnswers({});
    setCheckedQuestions({});
    setShowScript({});
    setShowTranslation({});
  };

  const handlePlayAudio = (id, text) => {
    if (!text) return;
    setIsPlayingId(id);
    speakText(text, {
      rate: 0.95,
      pitch: 1.0,
      lang: 'en-US'
    });
    setTimeout(() => {
      setIsPlayingId(null);
    }, Math.min(text.length * 65, 8000));
  };

  const tabs = [
    { id: 'part1', label: 'Part 1: Mô Tả Tranh', icon: Headphones, category: 'listening' },
    { id: 'part2', label: 'Part 2: Hỏi & Đáp', icon: Headphones, category: 'listening' },
    { id: 'part3', label: 'Part 3: Hội Thoại', icon: Headphones, category: 'listening' },
    { id: 'part4', label: 'Part 4: Bài Nói', icon: Headphones, category: 'listening' },
    { id: 'part5', label: 'Part 5: Điền Từ', icon: FileText, category: 'reading' },
    { id: 'part6', label: 'Part 6: Điền Đoạn Văn', icon: BookOpen, category: 'reading' },
    { id: 'part7', label: 'Part 7: Đọc Hiểu', icon: BookOpen, category: 'reading' },
  ];

  // Calculate score for active tab
  const getTabQuestions = () => {
    if (!data) return [];
    if (activeTab.startsWith('part') && ['part1', 'part2', 'part3', 'part4'].includes(activeTab)) {
      return data.listening?.[activeTab] || [];
    }
    if (['part5', 'part6', 'part7'].includes(activeTab)) {
      return data.reading?.[activeTab] || [];
    }
    return [];
  };

  const tabItems = getTabQuestions();

  // Count total questions in current tab
  let totalQs = 0;
  let correctQs = 0;

  tabItems.forEach(item => {
    if (item.questions) {
      item.questions.forEach(q => {
        totalQs++;
        if (checkedQuestions[q.id] && userAnswers[q.id] === q.correctAnswer) {
          correctQs++;
        }
      });
    } else {
      totalQs++;
      if (checkedQuestions[item.id] && userAnswers[item.id] === item.correctAnswer) {
        correctQs++;
      }
    }
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-purple-500/30 overflow-x-hidden pb-24">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="relative z-10 pt-[110px] max-w-[1200px] mx-auto px-6">
        {viewMode === 'list' ? (
          /* ====================================================
             10-EXAM CATALOG / LOBBY VIEW (Danh sách 10 đề TOEIC)
             ==================================================== */
          <div className="py-4">
            {/* Hero Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-4 border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider shadow-lg">
                <Sparkles size={14} />
                <span>Hệ Thống Đề Thi TOEIC Thực Chiến Chuẩn ETS 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Kho Đề Thi <span className="text-gradient">TOEIC Thực Chiến</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                Chọn một trong 10 bộ đề chuẩn định dạng mới nhất từ Viện Khảo thí Giáo dục Hoa Kỳ (ETS). Cấu trúc đầy đủ 7 Part Listening & Reading với giọng đọc AI chuẩn Mỹ và giải thích chi tiết.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-white">10 Bộ Đề</p>
                  <p className="text-[11px] text-gray-400 font-medium">Chuẩn ETS 100%</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-purple-400">2,000+ Câu</p>
                  <p className="text-[11px] text-gray-400 font-medium">Listening & Reading</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-indigo-400">AI Mỹ Chuẩn</p>
                  <p className="text-[11px] text-gray-400 font-medium">Âm thanh siêu thực</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-emerald-400">Chi Tiết</p>
                  <p className="text-[11px] text-gray-400 font-medium">Dịch & Giải thích</p>
                </div>
              </div>
            </div>

            {/* 10 Exam Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examList.map((exam) => {
                const getDifficultyColor = (diff) => {
                  if (diff?.includes('Khó') || diff?.includes('Chuyên')) return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
                  if (diff?.includes('Trung Bình')) return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
                  return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
                };
                return (
                  <div
                    key={exam.id}
                    onClick={() => {
                      setSelectedExamId(exam.id);
                      setViewMode('exam');
                      handleResetSection();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-3 py-1 rounded-full text-xs shadow-md">
                          Đề #{exam.id >= 10 ? exam.id : `0${exam.id}`}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-semibold">
                          {exam.badge || 'ETS Chuẩn'}
                        </span>
                      </div>

                      {/* Topic Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                        {exam.topic}
                      </h3>
                      <p className="text-xs font-semibold text-purple-300 mt-1">
                        {exam.title}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                        {exam.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        <span className={`text-xs px-2.5 py-0.5 rounded-md border font-medium ${getDifficultyColor(exam.difficulty)}`}>
                          Độ khó: {exam.difficulty || 'Trung Bình'}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          7 Parts
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          200 Câu
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      className="mt-6 w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-all"
                    >
                      <span>Bắt Đầu Làm Đề Này</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ====================================================
             EXAM PRACTICE TEST VIEW (Giao diện làm bài)
             ==================================================== */
          <div>
            {/* Top Return to Exam List Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  setViewMode('list');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-semibold transition-all group shadow-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">⬅</span>
                <span>Quay lại danh sách 10 bộ đề TOEIC</span>
              </button>
            </div>

            {/* Header & Score banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-3 border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Headphones size={14} />
              <span>TOEIC Listening & Reading Practice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Luyện Tập <span className="text-gradient">TOEIC Thực Chiến</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Phát thanh AI giọng chuẩn Mỹ • Đáp án giải thích chi tiết & dịch nghĩa đầy đủ
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="glass-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <Award className="text-purple-400" size={24} />
              <div>
                <p className="text-[11px] text-gray-400 font-semibold uppercase">Điểm phần này</p>
                <p className="text-xl font-bold text-white">
                  {correctQs} <span className="text-gray-500 text-sm">/ {totalQs} câu đúng</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleResetSection}
              className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-medium text-gray-300 hover:text-white transition-all flex items-center gap-2"
              title="Làm lại từ đầu"
            >
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Làm lại</span>
            </button>
          </div>
        </div>

        {/* Exam Selector Bar (10 Đề Thực Chiến) */}
        {examList.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="text-purple-400" size={16} />
                <span>Chọn bộ đề luyện tập ({examList.length} bộ đề chuẩn ETS)</span>
              </h2>
              <span className="text-xs text-purple-400 font-medium">
                Đang chọn: {examList.find(e => e.id === selectedExamId)?.title || `Đề số ${selectedExamId}`}
              </span>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
              {examList.map((exam) => {
                const isSelected = exam.id === selectedExamId;
                return (
                  <button
                    key={exam.id}
                    onClick={() => {
                      setSelectedExamId(exam.id);
                      handleResetSection();
                    }}
                    className={`flex-shrink-0 text-left px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-purple-600/40 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-[1.02]'
                        : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/10 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isSelected ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-400'
                      }`}>
                        Đề #{exam.id >= 10 ? exam.id : `0${exam.id}`}
                      </span>
                      <span className="text-[11px] text-purple-300 font-medium">{exam.badge}</span>
                    </div>
                    <div className="text-sm font-bold text-white line-clamp-1 max-w-[200px]">
                      {exam.topic}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {exam.difficulty ? `Độ khó: ${exam.difficulty}` : ''}
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Selected Exam Description Banner */}
            {examList.find(e => e.id === selectedExamId) && (
              <div className="glass-panel px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 text-xs mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎯</span>
                  <div>
                    <span className="font-bold text-purple-300 mr-2">
                      {examList.find(e => e.id === selectedExamId)?.title}
                    </span>
                    <span className="text-gray-400">
                      — {examList.find(e => e.id === selectedExamId)?.description}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 no-scrollbar">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_20px_rgba(192,132,252,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon size={16} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="glass-panel p-16 rounded-3xl text-center border border-white/10 my-10">
            <div className="inline-block w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-medium">Đang tải bộ đề thi TOEIC...</p>
          </div>
        ) : tabItems.length === 0 ? (
          <div className="glass-panel p-16 rounded-3xl text-center border border-white/10 my-10">
            <p className="text-gray-400 font-medium">Chưa có dữ liệu cho phần này.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* PART 1: PHOTOGRAPHS */}
            {activeTab === 'part1' && tabItems.map((item, index) => {
              const qId = item.id;
              const isChecked = checkedQuestions[qId];
              const selected = userAnswers[qId];
              const isCorrect = selected === item.correctAnswer;
              const isScriptVisible = isChecked || showScript[qId];

              return (
                <div key={qId} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full mr-2">
                        Câu {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">{item.title}</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handlePlayAudio(qId, item.audioScript)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                          isPlayingId === qId
                            ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.5)] animate-pulse'
                            : 'bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-purple-300 hover:text-white border border-purple-500/40'
                        }`}
                      >
                        <Volume2 size={16} />
                        <span>{isPlayingId === qId ? 'Đang đọc Audio...' : 'Nghe Audio (AI Speech)'}</span>
                      </button>

                      <button
                        onClick={() => setShowScript(prev => ({ ...prev, [qId]: !prev[qId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {isScriptVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isScriptVisible ? 'Ẩn lời thoại' : 'Xem lời thoại (Script)'}</span>
                      </button>

                      <button
                        onClick={() => setShowTranslation(prev => ({ ...prev, [qId]: !prev[qId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {showTranslation[qId] ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{showTranslation[qId] ? 'Ẩn bản dịch' : 'Dịch Việt'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Actual Photograph Card */}
                  <Part1PhotographCard item={item} />


                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {item.options?.map((opt) => {
                      const isOptSelected = selected === opt.label;
                      const isOptCorrect = opt.label === item.correctAnswer;

                      let btnStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20';
                      if (isChecked) {
                        if (isOptCorrect) {
                          btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-semibold';
                        } else if (isOptSelected && !isOptCorrect) {
                          btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                        }
                      } else if (isOptSelected) {
                        btnStyle = 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]';
                      }

                      return (
                        <div
                          key={opt.label}
                          className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${btnStyle}`}
                        >
                          <button
                            type="button"
                            disabled={isChecked}
                            onClick={() => handleSelectAnswer(qId, opt.label)}
                            className="flex items-center gap-3 flex-1 text-left cursor-pointer"
                          >
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                              {opt.label}
                            </span>
                            <span className="text-sm font-medium pt-0.5">
                              {isScriptVisible ? opt.text : `Lựa chọn ${opt.label} — (Ẩn lời thoại - Hãy nghe Audio)`}
                            </span>
                          </button>
                          {!isScriptVisible && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayAudio(`${qId}_opt_${opt.label}`, opt.text);
                              }}
                              className={`ml-2 p-2 rounded-full border transition-all flex-shrink-0 ${
                                isPlayingId === `${qId}_opt_${opt.label}`
                                  ? 'bg-fuchsia-600 text-white border-fuchsia-400 animate-pulse'
                                  : 'bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border-white/10'
                              }`}
                              title={`Nghe audio câu ${opt.label}`}
                            >
                              <Volume2 size={15} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Check button & Explanation */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    {!isChecked ? (
                      <button
                        onClick={() => handleCheckAnswer(qId)}
                        disabled={!selected}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                          selected
                            ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:scale-105'
                            : 'bg-white/5 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Kiểm tra đáp án
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="flex items-center gap-1.5 text-green-400 font-bold text-sm bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
                            <CheckCircle size={18} /> Chính xác!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-red-400 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
                            <XCircle size={18} /> Chưa đúng - Đáp án đúng là ({item.correctAnswer})
                          </span>
                        )}
                      </div>
                    )}

                    {isChecked && (
                      <div className="w-full bg-white/[0.04] p-5 rounded-2xl border border-white/10 mt-2">
                        <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles size={14} /> Giải thích chi tiết
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed mb-3">{item.explanation}</p>
                        {item.imageDescription && (
                          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-3">
                            <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">Mô tả chi tiết hình ảnh:</p>
                            <p className="text-sm text-gray-300 italic">{item.imageDescription}</p>
                          </div>
                        )}
                        {showTranslation[qId] && (
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Bản dịch script:</p>
                            <p className="text-sm text-gray-300 italic whitespace-pre-line">{item.translation}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* PART 2: QUESTION-RESPONSE */}
            {activeTab === 'part2' && tabItems.map((item, index) => {
              const qId = item.id;
              const isChecked = checkedQuestions[qId];
              const selected = userAnswers[qId];
              const isCorrect = selected === item.correctAnswer;
              const isScriptVisible = isChecked || showScript[qId];

              return (
                <div key={qId} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full mr-2">
                        Câu {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">Part 2: Hỏi & Đáp ngắn</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handlePlayAudio(qId, item.questionAudio)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                          isPlayingId === qId
                            ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.5)] animate-pulse'
                            : 'bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-purple-300 hover:text-white border border-purple-500/40'
                        }`}
                      >
                        <Volume2 size={16} />
                        <span>{isPlayingId === qId ? 'Đang đọc Câu Hỏi...' : 'Nghe Audio Câu Hỏi'}</span>
                      </button>

                      <button
                        onClick={() => setShowScript(prev => ({ ...prev, [qId]: !prev[qId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {isScriptVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isScriptVisible ? 'Ẩn lời thoại' : 'Xem lời thoại (Script)'}</span>
                      </button>

                      <button
                        onClick={() => setShowTranslation(prev => ({ ...prev, [qId]: !prev[qId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {showTranslation[qId] ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{showTranslation[qId] ? 'Ẩn bản dịch' : 'Dịch Việt'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-base text-white font-bold mb-1">
                      {isScriptVisible ? `Câu hỏi: "${item.questionAudio}"` : "🎧 Câu hỏi Audio (Ẩn lời thoại - Hãy nhấn Nghe Audio Câu Hỏi)"}
                    </p>
                    {isScriptVisible && showTranslation[qId] && (
                      <p className="text-sm text-purple-300 italic">Dịch: "{item.translation}"</p>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    {item.options?.map((opt, optIndex) => {
                      const isOptSelected = selected === opt.label;
                      const isOptCorrect = opt.label === item.correctAnswer;

                      let btnStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20';
                      if (isChecked) {
                        if (isOptCorrect) {
                          btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-semibold';
                        } else if (isOptSelected && !isOptCorrect) {
                          btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                        }
                      } else if (isOptSelected) {
                        btnStyle = 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]';
                      }

                      return (
                        <div
                          key={opt.label}
                          className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${btnStyle}`}
                        >
                          <button
                            type="button"
                            disabled={isChecked}
                            onClick={() => handleSelectAnswer(qId, opt.label)}
                            className="flex items-center gap-3 flex-1 text-left cursor-pointer"
                          >
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                              {opt.label}
                            </span>
                            <div>
                              <p className="text-sm font-medium">
                                {isScriptVisible ? opt.text : `Lựa chọn ${opt.label} — (Ẩn lời thoại - Hãy nghe Audio)`}
                              </p>
                              {isScriptVisible && showTranslation[qId] && item.optionsTranslation?.[optIndex] && (
                                <p className="text-xs text-gray-400 italic mt-0.5">
                                  {item.optionsTranslation[optIndex].text}
                                </p>
                              )}
                            </div>
                          </button>
                          {!isScriptVisible && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayAudio(`${qId}_opt_${opt.label}`, opt.text);
                              }}
                              className={`ml-2 p-2 rounded-full border transition-all flex-shrink-0 ${
                                isPlayingId === `${qId}_opt_${opt.label}`
                                  ? 'bg-fuchsia-600 text-white border-fuchsia-400 animate-pulse'
                                  : 'bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border-white/10'
                              }`}
                              title={`Nghe audio câu ${opt.label}`}
                            >
                              <Volume2 size={15} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Check & Explanation */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    {!isChecked ? (
                      <button
                        onClick={() => handleCheckAnswer(qId)}
                        disabled={!selected}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                          selected
                            ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:scale-105'
                            : 'bg-white/5 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Kiểm tra đáp án
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="flex items-center gap-1.5 text-green-400 font-bold text-sm bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
                            <CheckCircle size={18} /> Chính xác!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-red-400 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
                            <XCircle size={18} /> Chưa đúng - Đáp án đúng là ({item.correctAnswer})
                          </span>
                        )}
                      </div>
                    )}

                    {isChecked && (
                      <div className="w-full bg-white/[0.04] p-5 rounded-2xl border border-white/10 mt-2">
                        <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles size={14} /> Giải thích chi tiết
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* PART 3 & PART 4: SHORT CONVERSATION & SHORT TALKS */}
            {(activeTab === 'part3' || activeTab === 'part4') && tabItems.map((group, groupIdx) => {
              const groupId = group.id;
              const isScriptShown = showScript[groupId];
              const isTransShown = showTranslation[groupId];

              return (
                <div key={groupId} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  {/* Group Header & Audio Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full mr-2">
                        Đoạn thoại #{groupIdx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">{group.title}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => handlePlayAudio(groupId, group.audioScript)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                          isPlayingId === groupId
                            ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.5)] animate-pulse'
                            : 'bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-purple-300 hover:text-white border border-purple-500/40'
                        }`}
                      >
                        <Volume2 size={16} />
                        <span>{isPlayingId === groupId ? 'Đang đọc Hội Thoại...' : 'Nghe Audio (AI Speech)'}</span>
                      </button>

                      <button
                        onClick={() => setShowScript(prev => ({ ...prev, [groupId]: !prev[groupId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {isScriptShown ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isScriptShown ? 'Ẩn Lời Thoại' : 'Xem Lời Thoại'}</span>
                      </button>

                      <button
                        onClick={() => setShowTranslation(prev => ({ ...prev, [groupId]: !prev[groupId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {isTransShown ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isTransShown ? 'Ẩn Bản Dịch' : 'Dịch Việt'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Optional Audio Script Box */}
                  {isScriptShown && (
                    <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Lời thoại gốc (Audio Script):</p>
                      <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed">{group.audioScript}</p>
                    </div>
                  )}

                  {/* Optional Translation Box */}
                  {isTransShown && (
                    <div className="my-6 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-2">Bản dịch Tiếng Việt:</p>
                      <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed">{group.translation}</p>
                    </div>
                  )}

                  {/* Questions for this conversation/talk */}
                  <div className="space-y-6 mt-6">
                    {group.questions?.map((q, qIndex) => {
                      const qId = q.id;
                      const isChecked = checkedQuestions[qId];
                      const selected = userAnswers[qId];
                      const isCorrect = selected === q.correctAnswer;

                      return (
                        <div key={qId} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h4 className="text-base font-bold text-white">
                              <span className="text-purple-400 mr-2">{qIndex + 1}.</span>
                              {q.questionText}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options?.map((opt) => {
                              const isOptSelected = selected === opt.label;
                              const isOptCorrect = opt.label === q.correctAnswer;

                              let btnStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20';
                              if (isChecked) {
                                if (isOptCorrect) {
                                  btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-semibold';
                                } else if (isOptSelected && !isOptCorrect) {
                                  btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                                }
                              } else if (isOptSelected) {
                                btnStyle = 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]';
                              }

                              return (
                                <button
                                  key={opt.label}
                                  disabled={isChecked}
                                  onClick={() => handleSelectAnswer(qId, opt.label)}
                                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${btnStyle}`}
                                >
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                    {opt.label}
                                  </span>
                                  <span className="text-sm font-medium pt-0.5">{opt.text}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Check answer & explanation for this specific sub-question */}
                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                            {!isChecked ? (
                              <button
                                onClick={() => handleCheckAnswer(qId)}
                                disabled={!selected}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                                  selected
                                    ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_15px_rgba(192,132,252,0.3)] hover:scale-105'
                                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                }`}
                              >
                                Kiểm tra đáp án câu này
                              </button>
                            ) : (
                              <div className="flex items-center gap-2">
                                {isCorrect ? (
                                  <span className="flex items-center gap-1 text-green-400 font-bold text-xs">
                                    <CheckCircle size={15} /> Đúng!
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-red-400 font-bold text-xs">
                                    <XCircle size={15} /> Sai - Đáp án ({q.correctAnswer})
                                  </span>
                                )}
                              </div>
                            )}

                            {isChecked && (
                              <div className="w-full bg-white/[0.04] p-4 rounded-xl border border-white/5 mt-2">
                                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                                  Giải thích:
                                </p>
                                <p className="text-xs text-gray-300 leading-relaxed">{q.explanation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* PART 5: READING - INCOMPLETE SENTENCES */}
            {activeTab === 'part5' && tabItems.map((item, index) => {
              const qId = item.id;
              const isChecked = checkedQuestions[qId];
              const selected = userAnswers[qId];
              const isCorrect = selected === item.correctAnswer;

              return (
                <div key={qId} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full mr-2">
                        Câu {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">Part 5: Hoàn Thành Câu</h3>
                    </div>

                    <button
                      onClick={() => setShowTranslation(prev => ({ ...prev, [qId]: !prev[qId] }))}
                      className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                    >
                      {showTranslation[qId] ? <EyeOff size={14} /> : <Eye size={14} />}
                      <span>{showTranslation[qId] ? 'Ẩn dịch nghĩa' : 'Dịch câu hỏi'}</span>
                    </button>
                  </div>

                  {/* Sentence */}
                  <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-lg text-white font-semibold leading-relaxed">{item.questionText}</p>
                    {showTranslation[qId] && (
                      <p className="text-sm text-purple-300 italic mt-2">"{item.translation}"</p>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.options?.map((opt) => {
                      const isOptSelected = selected === opt.label;
                      const isOptCorrect = opt.label === item.correctAnswer;

                      let btnStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20';
                      if (isChecked) {
                        if (isOptCorrect) {
                          btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-semibold';
                        } else if (isOptSelected && !isOptCorrect) {
                          btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                        }
                      } else if (isOptSelected) {
                        btnStyle = 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]';
                      }

                      return (
                        <button
                          key={opt.label}
                          disabled={isChecked}
                          onClick={() => handleSelectAnswer(qId, opt.label)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${btnStyle}`}
                        >
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                            {opt.label}
                          </span>
                          <span className="text-sm font-medium">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Check & Explanation */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    {!isChecked ? (
                      <button
                        onClick={() => handleCheckAnswer(qId)}
                        disabled={!selected}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                          selected
                            ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:scale-105'
                            : 'bg-white/5 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Kiểm tra đáp án
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="flex items-center gap-1.5 text-green-400 font-bold text-sm bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
                            <CheckCircle size={18} /> Chính xác!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-red-400 font-bold text-sm bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
                            <XCircle size={18} /> Chưa đúng - Đáp án đúng là ({item.correctAnswer})
                          </span>
                        )}
                      </div>
                    )}

                    {isChecked && (
                      <div className="w-full bg-white/[0.04] p-5 rounded-2xl border border-white/10 mt-2">
                        <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles size={14} /> Giải thích chi tiết
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* PART 6 & PART 7: READING COMPREHENSION & TEXT COMPLETION */}
            {(activeTab === 'part6' || activeTab === 'part7') && tabItems.map((group, groupIdx) => {
              const groupId = group.id;
              const isTransShown = showTranslation[groupId];

              return (
                <div key={groupId} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  {/* Group Header & Translation Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full mr-2">
                        Bài đọc #{groupIdx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white inline-block">{group.title}</h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowTranslation(prev => ({ ...prev, [groupId]: !prev[groupId] }))}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                      >
                        {isTransShown ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isTransShown ? 'Ẩn Bản Dịch' : 'Dịch Tiếng Việt'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Reading Passage Box */}
                  <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <BookOpen size={16} /> Đoạn văn bài đọc (Passage):
                    </p>
                    <div className="text-sm sm:text-base text-gray-200 whitespace-pre-line leading-relaxed font-mono bg-black/30 p-5 rounded-xl border border-white/5">
                      {group.passage}
                    </div>
                  </div>

                  {/* Optional Translation Box */}
                  {isTransShown && (
                    <div className="my-6 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-2">Bản dịch Tiếng Việt:</p>
                      <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed">{group.translation}</p>
                    </div>
                  )}

                  {/* Questions for this reading passage */}
                  <div className="space-y-6 mt-6">
                    {group.questions?.map((q, qIndex) => {
                      const qId = q.id;
                      const isChecked = checkedQuestions[qId];
                      const selected = userAnswers[qId];
                      const isCorrect = selected === q.correctAnswer;

                      return (
                        <div key={qId} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h4 className="text-base font-bold text-white">
                              <span className="text-purple-400 mr-2">{qIndex + 1}.</span>
                              {q.questionText}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options?.map((opt) => {
                              const isOptSelected = selected === opt.label;
                              const isOptCorrect = opt.label === q.correctAnswer;

                              let btnStyle = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20';
                              if (isChecked) {
                                if (isOptCorrect) {
                                  btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-semibold';
                                } else if (isOptSelected && !isOptCorrect) {
                                  btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                                }
                              } else if (isOptSelected) {
                                btnStyle = 'bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]';
                              }

                              return (
                                <button
                                  key={opt.label}
                                  disabled={isChecked}
                                  onClick={() => handleSelectAnswer(qId, opt.label)}
                                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${btnStyle}`}
                                >
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                    {opt.label}
                                  </span>
                                  <span className="text-sm font-medium pt-0.5">{opt.text}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Check answer & explanation for this specific sub-question */}
                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                            {!isChecked ? (
                              <button
                                onClick={() => handleCheckAnswer(qId)}
                                disabled={!selected}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                                  selected
                                    ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white shadow-[0_0_15px_rgba(192,132,252,0.3)] hover:scale-105'
                                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                }`}
                              >
                                Kiểm tra đáp án câu này
                              </button>
                            ) : (
                              <div className="flex items-center gap-2">
                                {isCorrect ? (
                                  <span className="flex items-center gap-1 text-green-400 font-bold text-xs">
                                    <CheckCircle size={15} /> Đúng!
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-red-400 font-bold text-xs">
                                    <XCircle size={15} /> Sai - Đáp án ({q.correctAnswer})
                                  </span>
                                )}
                              </div>
                            )}

                            {isChecked && (
                              <div className="w-full bg-white/[0.04] p-4 rounded-xl border border-white/5 mt-2">
                                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                                  Giải thích:
                                </p>
                                <p className="text-xs text-gray-300 leading-relaxed">{q.explanation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
          </div>
        )}
      </main>
    </div>
  );
}

export default ToeicPractice;
