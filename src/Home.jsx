import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight, Sparkles, BookOpen, GraduationCap, Globe2, Users, PlayCircle, Zap, Quote } from 'lucide-react';
import logo from './assets/logo.svg';

function Home() {
  const navigate = useNavigate();
  const [summary, setSummary] = React.useState({ total: 0, counts: {} });

  React.useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:9999';
    fetch(`${baseUrl}/api/vocabulary/summary`)
      .then(res => res.json())
      .then(data => setSummary(data))
      .catch(err => console.error('Error fetching vocabulary summary:', err));
  }, []);

  const levelCounts = summary.counts;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Modern Glass Navbar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#050505]/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-[90px] flex items-center justify-between">
          
          {/* HUGE LOGO */}
          <div className="flex items-center">
            {/* The wrapper forces a minimum height and width to ensure the logo is never small */}
            <div className="h-[60px] w-auto sm:h-[80px] flex items-center justify-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] invert" 
                style={{ minHeight: '60px' }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium tracking-wide">
            <a href="#" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group">
              Khóa Học
              <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors group">
              Luyện Tập
              <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Cộng Đồng
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* Hidden for now */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-[160px] pb-24 px-6 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography & CTA */}
          <div className="flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-white/20">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-[14px] font-medium text-gray-200">Nền Tảng #1 Chinh Phục Tiếng Anh</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[85px] font-bold leading-[1.1] tracking-tight mb-8">
              CHINH PHỤC <br/>
              <span className="text-gradient">TIẾNG ANH</span> <br/>
              NGAY.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
              Các khóa học toàn diện cho TOEIC, IELTS và Tiếng Anh giao tiếp giúp bạn tự tin vươn ra thế giới. Học thông minh, không cần gian nan.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => navigate('/learn')}
                className="bg-gradient-to-r from-[#818cf8] to-[#c084fc] text-white px-10 py-4 rounded-full font-bold text-[16px] shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_50px_rgba(192,132,252,0.6)] hover:scale-105 transition-all flex items-center gap-2"
              >
                Bắt Đầu Học Miễn Phí
                <ArrowRight size={18} />
              </button>
              
              <button className="flex items-center gap-3 text-gray-300 hover:text-white font-medium px-6 py-4 transition-all hover:scale-105">
                <PlayCircle size={24} className="text-gray-400" />
                Xem Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-12 w-full">
              <div>
                <div className="text-3xl font-bold text-white mb-1">2Tr+</div>
                <div className="text-sm text-gray-500 font-medium">Học Viên</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-500 font-medium">Tỷ Lệ Đạt</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-500 font-medium">Giảng Viên</div>
              </div>
            </div>
          </div>

          {/* Right: Abstract 3D / Floating UI Elements (Replacing the globe) */}
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center z-10">
            {/* Center Glowing Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 blur-[80px] opacity-40 animate-pulse"></div>
            </div>
            
            {/* Floating Glass Cards */}
            <div className="relative w-full h-full animate-float">
              {/* Card 1: IELTS */}
              <div className="absolute top-[10%] left-[5%] w-[260px] glass-panel p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chinh Phục IELTS</h3>
                <p className="text-sm text-gray-400">Đạt Band 8.0+ với lộ trình toàn diện.</p>
                <div className="mt-4 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-blue-400 rounded-full"></div>
                </div>
              </div>

              {/* Card 2: TOEIC */}
              <div className="absolute top-[40%] right-[0%] w-[280px] glass-panel p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animation-delay-2000">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap className="text-purple-400" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-purple-300">Thịnh hành</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TOEIC 900+</h3>
                <p className="text-sm text-gray-400">Luyện thi sát với môi trường làm việc.</p>
              </div>

              {/* Card 3: Community */}
              <div className="absolute bottom-[10%] left-[20%] w-[250px] glass-panel p-5 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 animation-delay-4000">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-[#0b0c10]"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 border-2 border-[#0b0c10]"></div>
                    <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-[#0b0c10] flex items-center justify-center text-xs font-bold">+5k</div>
                  </div>
                  <div className="text-sm font-medium text-gray-300">Đang Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Vocabulary Stats Section */}
      <section className="relative py-16 px-6 z-10 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Kho Từ Vựng <span className="text-gradient">Khổng Lồ</span></h2>
            <p className="text-gray-400">Chinh phục {summary.total || 0} từ vựng trải dài trên các cấp độ CEFR.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['A1', 'A2', 'B1', 'B2', 'C1'].map(level => (
              <div key={level} className="glass-panel p-6 text-center hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-gray-400 mb-2">Level {level}</h3>
                <div className="text-4xl font-bold text-white">{levelCounts[level] || 0}</div>
                <p className="text-sm text-gray-500 mt-2">Từ vựng</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="relative py-24 px-6 z-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Châm Ngôn <span className="text-gradient">Cuộc Sống</span></h2>
            <p className="text-gray-400">Những lời răn dạy vượt thời gian từ những huyền thoại tiếp thêm sức mạnh cho bạn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote 1 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-purple-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Ta thà phụ người trong thiên hạ, chứ không để người trong thiên hạ phụ ta."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center font-bold text-white shadow-lg">
                    CC
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Cao Cao (Tào Tháo)</h4>
                    <span className="text-sm text-gray-500">Thừa tướng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-indigo-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Đừng bao giờ quên bạn là ai, vì thế giới sẽ không quên điều đó. Hãy biến nó thành sức mạnh của bạn."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
                    TL
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Tyrion Lannister</h4>
                    <span className="text-sm text-gray-500">Trò Chơi Vương Quyền</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-fuchsia-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Súng không lau, súng mau han gỉ; Người không rèn, ý chí không cao."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white shadow-lg">
                    PG
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Đại tướng Phan Văn Giang</h4>
                    <span className="text-sm text-gray-500">Bộ trưởng Bộ Quốc phòng VN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 4 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-red-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Sức mạnh càng lớn, trách nhiệm càng cao."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center font-bold text-white shadow-lg">
                    UB
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Uncle Ben</h4>
                    <span className="text-sm text-gray-500">Người Nhện</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 5 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-blue-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Tâm trí cần sách như thanh kiếm cần đá mài."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
                    TL
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Tyrion Lannister</h4>
                    <span className="text-sm text-gray-500">Trò Chơi Vương Quyền</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 6 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-yellow-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Không có gì quý hơn độc lập, tự do."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center font-bold text-white shadow-lg">
                    HCM
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Hồ Chí Minh</h4>
                    <span className="text-sm text-gray-500">Chủ tịch nước</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 7 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-amber-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Tên tôi là Sherlock Holmes. Công việc của tôi là biết những gì người khác không biết."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center font-bold text-white shadow-lg">
                    SH
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Sherlock Holmes</h4>
                    <span className="text-sm text-gray-500">Thám tử tư</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 8 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-sky-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Tôi không sợ một đội quân sư tử do cừu dẫn dắt; tôi sợ một đội quân cừu do sư tử dẫn dắt."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
                    AG
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Alexander Đại đế</h4>
                    <span className="text-sm text-gray-500">Vua xứ Macedon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 9 */}
            <div className="glass-panel p-8 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 transform -scale-x-100 group-hover:text-pink-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "Thắng bại là chuyện bình thường của binh gia."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center font-bold text-white shadow-lg">
                    CC
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Cao Cao (Tào Tháo)</h4>
                    <span className="text-sm text-gray-500">Thừa tướng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Minimal Sleek Footer */}
      <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="h-[50px] mb-6">
               <img src={logo} alt="Logo" className="h-full w-auto object-contain filter invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nâng tầm giao tiếp toàn cầu thông qua nền tảng giáo dục ngôn ngữ đổi mới, bài bản và chuyên sâu.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Sản Phẩm</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Khóa Học</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luyện Tập</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bảng Giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Tài Nguyên</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Tài Liệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cộng Đồng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Công Ty</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tuyển Dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2026 WolfLinea. Mọi quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Điều Khoản Dịch Vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
