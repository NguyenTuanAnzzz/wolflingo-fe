import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, BookOpen, Volume2, CheckCircle, XCircle, 
  ArrowRight, Sparkles, RefreshCw, Eye, EyeOff, Award,
  Bookmark, BookmarkCheck, FileText, Headphones, Globe2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { speakText, toggleWordSaved, isWordSaved } from '../utils/vocabManager';

function IeltsPractice() {
  const [activeTab, setActiveTab] = useState('reading'); // 'reading' | 'listening' | 'vocabulary'
  const [data, setData] = useState({ reading: [], listening: [], vocabulary: [] });
  const [isLoading, setIsLoading] = useState(true);

  // Question state tracking: { [questionId]: selectedOptionLabel }
  const [userAnswers, setUserAnswers] = useState({});
  // Checked questions: { [questionId]: boolean }
  const [checkedQuestions, setCheckedQuestions] = useState({});
  // Transcript visibility for Listening: { [id]: boolean }
  const [showScript, setShowScript] = useState({});
  // Translation visibility: { [id]: boolean }
  const [showTranslation, setShowTranslation] = useState({});
  // Audio playing indicator
  const [isPlayingId, setIsPlayingId] = useState(null);
  // Track saved words in state for UI re-rendering
  const [savedWordMap, setSavedWordMap] = useState({});
  // Exam selector state
  const [examList, setExamList] = useState([]);
  const [selectedExamId, setSelectedExamId] = useState(1);
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'exam'

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${baseUrl}/api/ielts/list`)
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) setExamList(json);
      })
      .catch(err => console.error('Error fetching IELTS exam list:', err));
  }, [baseUrl]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/api/ielts?examId=${selectedExamId}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching IELTS data:', err);
        setIsLoading(false);
      });
  }, [baseUrl, selectedExamId]);

  useEffect(() => {
    const updateSavedMap = () => {
      if (!data.vocabulary) return;
      const newMap = {};
      data.vocabulary.forEach(wordObj => {
        newMap[wordObj.word] = isWordSaved(wordObj.word);
      });
      if (data.reading) {
        data.reading.forEach(item => {
          item.vocabularyHighlights?.forEach(w => {
            newMap[w.word] = isWordSaved(w.word);
          });
        });
      }
      setSavedWordMap(newMap);
    };
    updateSavedMap();
    const handleChanged = () => updateSavedMap();
    window.addEventListener('vocab-review-changed', handleChanged);
    return () => window.removeEventListener('vocab-review-changed', handleChanged);
  }, [data]);

  const handleSelectAnswer = (questionId, label) => {
    if (checkedQuestions[questionId]) return;
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

  const handleToggleSave = (wordObj) => {
    toggleWordSaved(wordObj);
    setSavedWordMap(prev => ({
      ...prev,
      [wordObj.word]: !prev[wordObj.word]
    }));
  };

  const tabs = [
    { id: 'reading', label: 'IELTS Reading (Đọc Học Thuật)', icon: FileText },
    { id: 'listening', label: 'IELTS Listening (Bài Giảng AI)', icon: Headphones },
    { id: 'vocabulary', label: 'Từ Vựng IELTS C1/C2', icon: BookOpen },
  ];

  // Calculate score for reading & listening tabs
  let totalQs = 0;
  let correctQs = 0;
  if (activeTab === 'reading' || activeTab === 'listening') {
    const list = data[activeTab] || [];
    list.forEach(item => {
      item.questions?.forEach(q => {
        totalQs++;
        if (checkedQuestions[q.id] && userAnswers[q.id] === q.correctAnswer) {
          correctQs++;
        }
      });
    });
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30 overflow-x-hidden pb-24">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-600/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="relative z-10 pt-[110px] max-w-[1200px] mx-auto px-6">
        {viewMode === 'list' ? (
          /* ====================================================
             10-EXAM CATALOG / LOBBY VIEW (Danh sách 10 đề IELTS)
             ==================================================== */
          <div className="py-4">
            {/* Hero Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-4 border-fuchsia-500/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider shadow-lg">
                <Sparkles size={14} />
                <span>Hệ Thống Đề Thi IELTS Academic Thực Chiến 8.0+</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Kho Đề Thi <span className="text-gradient">IELTS Học Thuật</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                Chọn một trong 10 bộ đề chuẩn Cambridge Academic mới nhất. Cấu trúc đầy đủ Reading Học thuật, Listening Audio AI chuẩn Anh/Mỹ cùng bộ từ vựng cao cấp C1-C2.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-white">10 Bộ Đề</p>
                  <p className="text-[11px] text-gray-400 font-medium">Cambridge Academic</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-fuchsia-400">Reading & Listening</p>
                  <p className="text-[11px] text-gray-400 font-medium">Bám sát cấu trúc thi</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-indigo-400">Audio AI Chuẩn</p>
                  <p className="text-[11px] text-gray-400 font-medium">Âm thanh siêu thực</p>
                </div>
                <div className="glass-panel py-3 px-4 rounded-2xl border border-white/10">
                  <p className="text-xl font-bold text-emerald-400">Từ Vựng C1-C2</p>
                  <p className="text-[11px] text-gray-400 font-medium">Giải thích học thuật</p>
                </div>
              </div>
            </div>

            {/* 10 Exam Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examList.map((exam) => {
                const getDifficultyColor = (diff) => {
                  if (diff?.includes('Khó') || diff?.includes('Chuyên') || diff?.includes('C2')) return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
                  if (diff?.includes('Trung Bình') || diff?.includes('C1')) return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
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
                    className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-fuchsia-500/60 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold px-3 py-1 rounded-full text-xs shadow-md">
                          Đề #{exam.id >= 10 ? exam.id : `0${exam.id}`}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/30 font-semibold">
                          {exam.badge || 'Cambridge Academic'}
                        </span>
                      </div>

                      {/* Topic Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors line-clamp-1">
                        {exam.topic}
                      </h3>
                      <p className="text-xs font-semibold text-fuchsia-300 mt-1">
                        {exam.title}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                        {exam.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        <span className={`text-xs px-2.5 py-0.5 rounded-md border font-medium ${getDifficultyColor(exam.difficulty)}`}>
                          Độ khó: {exam.difficulty || 'Nâng Cao C1-C2'}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          {exam.band || 'Band 8.0+'}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      className="mt-6 w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-fuchsia-500/25 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-all"
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
             EXAM PRACTICE TEST VIEW (Giao diện làm bài IELTS)
             ==================================================== */
          <div>
            {/* Top Return to Exam List Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  setViewMode('list');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-500/50 text-gray-300 hover:text-white text-sm font-semibold transition-all group shadow-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">⬅</span>
                <span>Quay lại danh sách 10 bộ đề IELTS</span>
              </button>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-3 border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap size={14} />
                  <span>Academic IELTS 8.0+ Mastery</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Chinh Phục <span className="text-gradient">IELTS Học Thuật</span>
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Bài khóa Academic Reading • Bài giảng Audio chuẩn AI • Bộ từ vựng cao cấp C1-C2
                </p>
              </div>

              {(activeTab === 'reading' || activeTab === 'listening') && (
                <div className="flex items-center gap-4">
                  <div className="glass-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                    <Award className="text-fuchsia-400" size={24} />
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
                  >
                    <RefreshCw size={16} />
                    <span className="hidden sm:inline">Làm lại</span>
                  </button>
                </div>
              )}
            </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 no-scrollbar">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
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

        {/* Loading */}
        {isLoading ? (
          <div className="glass-panel p-16 rounded-3xl text-center border border-white/10 my-10">
            <div className="inline-block w-10 h-10 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-medium">Đang tải tài liệu IELTS Học Thuật...</p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* IELTS READING */}
            {activeTab === 'reading' && (
              data.reading?.map((item, index) => (
                <div key={item.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                  {/* Reading Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold rounded-full">
                          Band {item.band}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">• Chủ đề: {item.topic}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  {/* Reading Passage */}
                  <div className="my-6 p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10">
                    <p className="text-sm sm:text-base text-gray-200 leading-loose whitespace-pre-line font-light">
                      {item.passage}
                    </p>
                  </div>

                  {/* Highlighted Academic Vocabulary */}
                  {item.vocabularyHighlights && item.vocabularyHighlights.length > 0 && (
                    <div className="my-6 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20">
                      <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Sparkles size={15} /> Từ vựng học thuật cao cấp trong bài (C1/C2)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {item.vocabularyHighlights.map((v) => {
                          const saved = savedWordMap[v.word];
                          return (
                            <div key={v.word} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-white">{v.word}</span>
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">
                                    {v.cefr}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{v.meaning}</p>
                              </div>

                              <button
                                onClick={() => handleToggleSave({ ...v, level: v.cefr })}
                                className={`p-2 rounded-lg transition-all ${
                                  saved ? 'bg-fuchsia-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'
                                }`}
                                title={saved ? 'Đã lưu trong sổ tay từ vựng' : 'Lưu từ vào sổ tay'}
                              >
                                {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Reading Questions */}
                  <div className="space-y-6 mt-8">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <FileText size={18} className="text-fuchsia-400" />
                      Câu hỏi đọc hiểu
                    </h4>

                    {item.questions?.map((q, qIndex) => {
                      const qId = q.id;
                      const isChecked = checkedQuestions[qId];
                      const selected = userAnswers[qId];
                      const isCorrect = selected === q.correctAnswer;

                      return (
                        <div key={qId} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                          <h5 className="text-base font-bold text-white mb-4">
                            <span className="text-fuchsia-400 mr-2">{qIndex + 1}.</span>
                            {q.questionText}
                          </h5>

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
                                btnStyle = 'bg-fuchsia-500/20 border-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.3)]';
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

                          {/* Check & explanation */}
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
                                <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-1">
                                  Giải thích học thuật:
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
              ))
            )}

            {/* IELTS LISTENING */}
            {activeTab === 'listening' && (
              data.listening?.map((item, index) => {
                const isScriptShown = showScript[item.id];
                const isTransShown = showTranslation[item.id];

                return (
                  <div key={item.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl">
                    {/* Listening Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">
                            Academic Lecture
                          </span>
                          <span className="text-xs text-gray-400">Diễn giả: {item.speaker}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handlePlayAudio(item.id, item.audioScript)}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                            isPlayingId === item.id
                              ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.5)] animate-pulse'
                              : 'bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 text-purple-300 hover:text-white border border-purple-500/40'
                          }`}
                        >
                          <Volume2 size={16} />
                          <span>{isPlayingId === item.id ? 'Đang Đọc Bài Giảng...' : 'Nghe Bài Giảng (AI Speech)'}</span>
                        </button>

                        <button
                          onClick={() => setShowScript(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                        >
                          {isScriptShown ? <EyeOff size={14} /> : <Eye size={14} />}
                          <span>{isScriptShown ? 'Ẩn Transcript' : 'Xem Transcript'}</span>
                        </button>

                        <button
                          onClick={() => setShowTranslation(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5"
                        >
                          {isTransShown ? <EyeOff size={14} /> : <Eye size={14} />}
                          <span>{isTransShown ? 'Ẩn Dịch Tiếng Việt' : 'Dịch Việt'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Transcript Box */}
                    {isScriptShown && (
                      <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Transcript gốc tiếng Anh:</p>
                        <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">{item.audioScript}</p>
                      </div>
                    )}

                    {/* Translation Box */}
                    {isTransShown && (
                      <div className="my-6 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                        <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-2">Bản dịch tiếng Việt:</p>
                        <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">{item.translation}</p>
                      </div>
                    )}

                    {/* Questions */}
                    <div className="space-y-6 mt-8">
                      <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Headphones size={18} className="text-purple-400" />
                        Câu hỏi kiểm tra nghe hiểu
                      </h4>

                      {item.questions?.map((q, qIndex) => {
                        const qId = q.id;
                        const isChecked = checkedQuestions[qId];
                        const selected = userAnswers[qId];
                        const isCorrect = selected === q.correctAnswer;

                        return (
                          <div key={qId} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                            <h5 className="text-base font-bold text-white mb-4">
                              <span className="text-purple-400 mr-2">{qIndex + 1}.</span>
                              {q.questionText}
                            </h5>

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

                            {/* Check & explanation */}
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
              })
            )}

            {/* IELTS VOCABULARY C1/C2 */}
            {activeTab === 'vocabulary' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.vocabulary?.map((wordObj) => {
                  const saved = savedWordMap[wordObj.word];
                  return (
                    <div key={wordObj.id} className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-fuchsia-500/40 transition-all bg-white/[0.02] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-white tracking-tight">{wordObj.word}</h3>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                              Level {wordObj.level}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handlePlayAudio(wordObj.id, wordObj.word)}
                              className={`p-2.5 rounded-xl border transition-all ${
                                isPlayingId === wordObj.id
                                  ? 'bg-fuchsia-600 border-fuchsia-500 text-white'
                                  : 'bg-white/5 border-white/10 text-purple-300 hover:text-white hover:bg-white/10'
                              }`}
                              title="Phát âm tiếng Anh"
                            >
                              <Volume2 size={18} />
                            </button>

                            <button
                              onClick={() => handleToggleSave(wordObj)}
                              className={`p-2.5 rounded-xl border transition-all ${
                                saved
                                  ? 'bg-fuchsia-600 border-fuchsia-500 text-white shadow-[0_0_15px_rgba(192,38,211,0.5)]'
                                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                              }`}
                              title={saved ? 'Đã lưu trong sổ tay từ vựng (Ôn lại sau)' : 'Lưu từ vào sổ tay'}
                            >
                              {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                            </button>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-purple-300 italic">{wordObj.pronunciation} • {wordObj.pos}</p>
                          <p className="text-lg font-bold text-white mt-1">{wordObj.meaning}</p>
                        </div>

                        <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/5 mb-4">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Ví dụ:</p>
                          <p className="text-sm text-gray-200 italic">"{wordObj.example}"</p>
                        </div>
                      </div>

                      {wordObj.collocations && (
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                          <span>Collocations:</span>
                          <span className="font-semibold text-purple-300 truncate max-w-[240px]">
                            {wordObj.collocations}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
          </div>
        )}
      </main>
    </div>
  );
}

export default IeltsPractice;
