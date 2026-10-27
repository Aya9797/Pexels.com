'use client';

import React, { useState } from 'react';
import { 
  Search, Download, Heart, Bookmark, Video, Image as ImageIcon, 
  Sparkles, ShieldCheck, FileText, Info, X, CheckCircle2, Share2 
} from 'lucide-react';

// Sample Media Item Interface
interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'photo';
  resolution: '8K' | '4K';
  aspect: '9:16' | '16:9';
  author: string;
  avatar: string;
  src: string;
  videoUrl?: string;
  downloads: string;
}

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Sample Data matching AZ-8K focus (8K, Desert, Vertical 9:16)
  const mediaList: MediaItem[] = [
    {
      id: '1',
      title: 'كثبان صحراوية ذهبية بدقة 8K',
      type: 'video',
      resolution: '8K',
      aspect: '16:9',
      author: 'Ahmed Zahaf',
      avatar: 'AZ',
      src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      downloads: '14.2K',
    },
    {
      id: '2',
      title: 'غروب الشمس السينمائي في الصحراء',
      type: 'photo',
      resolution: '8K',
      aspect: '9:16',
      author: 'Sahara Creative',
      avatar: 'SC',
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      downloads: '28.9K',
    },
    {
      id: '3',
      title: 'مقطع عمودي لتيك توك وReels - الطبيعة',
      type: 'video',
      resolution: '8K',
      aspect: '9:16',
      author: 'Desert Motion',
      avatar: 'DM',
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      downloads: '9.4K',
    },
  ];

  const handleDownload = (resLabel: string) => {
    setDownloadSuccess(resLabel);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-2 rounded-xl text-slate-950 font-black shadow-lg shadow-emerald-500/20">
              AZ
            </div>
            <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-emerald-400">
              AZ-8K
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-emerald-400 transition">الصور (Photos)</a>
            <a href="#" className="hover:text-emerald-400 transition">فيديوهات 8K</a>
            <a href="#" className="hover:text-emerald-400 transition text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> ريلز وتيك توك (9:16)
            </a>
          </nav>

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition shadow-lg shadow-emerald-500/10">
              رفع محتوى
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section with Search */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 scale-105" />

        <div className="relative z-20 max-w-4xl w-full px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4" /> منصة الميديا الأولى بدقة 8K فائقة الوضوح
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            أفضل الصور والفيديوهات المجانية بجودة <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">8K Ultra HD</span>
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto shadow-2xl shadow-emerald-500/5">
            <input 
              type="text" 
              placeholder="ابحث عن فيديوهات 8K، صحراء، مناظر طبيعية سينمائية..." 
              className="w-full h-16 pr-14 pl-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 backdrop-blur-xl text-base font-medium"
            />
            <Search className="absolute right-5 top-5 text-emerald-400 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* 3. Media Grid with Native Ad Slots */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {mediaList.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Media Card */}
              <div 
                onClick={() => setSelectedMedia(item)}
                className="relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 break-inside-avoid shadow-xl cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" 
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/50 flex items-center gap-1.5 text-[10px] font-black text-emerald-400">
                    {item.type === 'video' ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                    {item.resolution} ULTRA HD
                  </div>
                  {item.aspect === '9:16' && (
                    <div className="bg-emerald-500 text-slate-950 font-black px-2 py-1 rounded-lg text-[10px]">
                      9:16 Vertical
                    </div>
                  )}
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                  <div className="flex justify-end gap-2">
                    <button className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition"><Heart className="w-4 h-4" /></button>
                    <button className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition"><Bookmark className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">{item.avatar}</div>
                      <span className="text-xs font-bold text-slate-200">{item.author}</span>
                    </div>
                    <button className="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition font-black text-xs flex items-center gap-1.5 shadow-lg">
                      <Download className="w-4 h-4" /> تنزيل
                    </button>
                  </div>
                </div>
              </div>

              {/* Native In-Feed Ad Slot (Injected after 1st item) */}
              {index === 0 && (
                <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col items-center justify-center text-center break-inside-avoid min-h-[280px] relative overflow-hidden">
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-slate-950/50 px-2 py-0.5 rounded">إعلان ممول</span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">ترقية إلى عضوية AZ-8K VIP</h3>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">تحميل سريع جداً لملفات الـ 8K الأصلية بدون انتظار وبدون إعلانات.</p>
                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-bold transition border border-slate-700">
                    استكشف باقات VIP
                  </button>
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </main>

      {/* 4. Dynamic Download Modal (High Conversion & Monetization) */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Preview Box */}
            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-4 relative min-h-[300px]">
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title} 
                className="max-h-[60vh] w-auto object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> دقة عالية 8K Ultra HD
              </div>
            </div>

            {/* Resolution Options & Download Sidebar */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-slate-900">
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center">
                      {selectedMedia.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{selectedMedia.author}</h4>
                      <p className="text-[11px] text-slate-400">تحميلات: {selectedMedia.downloads}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-sm font-bold text-slate-200 mb-3">اختر دقة التحميل المناسبة:</h3>

                {/* Download Options */}
                <div className="space-y-2.5 mb-6">
                  {[
                    { label: '8K Original (7680x4320)', tag: 'أصلية', speed: 'فائقة', badge: 'VIP/Free' },
                    { label: '4K Ultra HD (3840x2160)', tag: 'موصى بها', speed: 'سريعة' },
                    { label: 'Full HD (1920x1080)', tag: 'قياسي', speed: 'فورية' },
                  ].map((res, i) => (
                    <button
                      key={i}
                      onClick={() => handleDownload(res.label)}
                      className="w-full p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between transition group text-right"
                    >
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition">{res.label}</div>
                        <div className="text-[10px] text-slate-400">{res.tag} • سرعة التنزيل {res.speed}</div>
                      </div>
                      <Download className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                    </button>
                  ))}
                </div>

                {downloadSuccess && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4" /> جاري بدء تحميل {downloadSuccess}...
                  </div>
                )}

                {/* Ad Placeholder inside Modal (High Conversion Slot) */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1">إعلان AdSense / Ezoic</span>
                  <div className="text-xs font-medium text-slate-400">احصل على استضافة سيرفر سريعة لموقعك مع Hetzner</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 text-center">
                ترخيص الاستخدام: مجاني للاستخدام التجاري والشخصي بدون حقوق.
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 5. Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 mt-20 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="bg-emerald-500 p-2 rounded-xl text-slate-950 font-black">AZ</div>
              <span className="text-xl font-black text-white">AZ-8K</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              المنصة العالمية الرائدة لتوفير أرقى محتوى مرئي بدقة 8K ومحتوى تيك توك العمودي للمبدعين حول العالم.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">السياسات والقانونية</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-emerald-400 transition flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> سياسة الخصوصية (Privacy Policy)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-emerald-400" /> شروط الخدمة (Terms of Service)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-emerald-400" /> من نحن (About Us)</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
