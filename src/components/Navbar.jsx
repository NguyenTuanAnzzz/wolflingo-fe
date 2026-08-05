import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Headphones, GraduationCap, Users, Sparkles, Bookmark, Home as HomeIcon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { getSavedWords } from '../utils/vocabManager';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [savedCount, setSavedCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSavedCount(getSavedWords().length);

    const handleVocabChange = (e) => {
      setSavedCount(e.detail?.count ?? getSavedWords().length);
    };

    window.addEventListener('vocab-review-changed', handleVocabChange);
    return () => window.removeEventListener('vocab-review-changed', handleVocabChange);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Trang Chủ', path: '/', icon: HomeIcon },
    { label: 'Từ Vựng CEFR', path: '/learn', icon: BookOpen, badge: savedCount > 0 ? savedCount : null },
    { label: 'TOEIC Nghe & Đọc', path: '/learn/toeic', icon: Headphones },
    { label: 'Chinh Phục IELTS', path: '/learn/ielts', icon: GraduationCap },
    { label: 'Nhân Vật AI', path: '/characters', icon: Users },
  ];

  const isItemActive = (itemPath) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    if (itemPath === '/learn') {
      return location.pathname === '/learn';
    }
    if (itemPath === '/learn/toeic') {
      return location.pathname.startsWith('/learn/toeic');
    }
    if (itemPath === '/learn/ielts') {
      return location.pathname.startsWith('/learn/ielts');
    }
    if (itemPath === '/characters') {
      return location.pathname.startsWith('/characters') || 
             location.pathname.startsWith('/character') || 
             (location.pathname !== '/' && !location.pathname.startsWith('/learn'));
    }
    return false;
  };

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="h-[48px] sm:h-[54px] w-auto flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] invert group-hover:scale-105 transition-transform" 
            />
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isItemActive(item.path);

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-white border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-purple-400' : 'text-gray-500'} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 px-2 py-0.5 bg-fuchsia-600 text-white text-[11px] font-bold rounded-full shadow-sm animate-pulse">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/learn')}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:scale-105 transition-all"
          >
            <Sparkles size={15} />
            <span>Ôn Tập Từ ({savedCount})</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isItemActive(item.path);

            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-left font-medium transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-white border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'text-purple-400' : 'text-gray-400'} />
                  <span className="text-base">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2.5 py-0.5 bg-fuchsia-600 text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 mt-1 border-t border-white/10 sm:hidden">
            <button 
              onClick={() => {
                navigate('/learn');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-5 py-3.5 rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(192,132,252,0.3)]"
            >
              <Sparkles size={16} />
              <span>Ôn Tập Từ ({savedCount})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
