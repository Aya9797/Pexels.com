'use client';

import React, { useState } from 'react';
import { 
  Search, Download, Heart, Bookmark, Video, Image as ImageIcon, 
  Sparkles, ShieldCheck, FileText, Info, X, CheckCircle2, Share2 
} from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'photo';
  resolution: '8K' | '4K';
  aspect: '9:16' | '16:9';
  author: string;
  avatar: string;
  src: string;
  downloads: string;
}

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

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
      title: 'مقطع عمودي لتيك توك وReels',
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
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
        
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-2 rounded-xl text-slate-950 font-black shadow-lg">
                AZ
              </div>
              <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-emerald-400">
                AZ-8K
              </span>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition shadow-lg">
              رفع محتوى
            </button>
          </div>
        </header>

        {/* Hero Section */}
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

            <div className="relative max-w-2xl mx-auto shadow-2xl">
              <input 
                type="text" 
                placeholder="ابحث عن فيديوهات 8K، صحراء، مناظر طبيعية سينمائية..." 
                className="w-full h-16 pr-14 pl-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 backdrop-blur-xl text-base font-medium"
              />
              <Search className="absolute right-5 top-5 text-emerald-400 w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <main className="max-w-7xl mx-auto px-4 py-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {mediaList.map((item, index) => (
              <React.Fragment key={item.id}>
                <div 
                  onClick={() => setSelectedMedia(item)}
                  className="relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 break-inside-avoid shadow-xl cursor-pointer"
                >
                  <img src={item.src} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/50 flex items-center gap-1.5 text-[10px] font-black text-emerald-400">
                      {item.type === 'video' ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                      {item.resolution} ULTRA HD
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                    <div className="flex justify-end gap-2">
                      <button className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300"><Heart className="w-4 h-4" /></button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">{item.avatar}</div>
                        <span className="text-xs font-bold text-slate-200">{item.author}</span>
                      </div>
                      <button className="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs flex items-center gap-1.5">
                        <Download className="w-4 h-4" /> تنزيل
                      </button>
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col items-center justify-center text-center break-inside-avoid min-h-[280px] relative overflow-hidden">
                    <span className="absolute top-3 right-3 text-[10px] uppercase text-slate-500 font-bold bg-slate-950/50 px-2 py-0.5 rounded">إعلان ممول</span>
                    <Sparkles className="w-6 h-6 text-emerald-400 mb-4" />
                    <h3 className="text-base font-bold text-white mb-2">ترقية إلى عضوية AZ-8K VIP</h3>
                    <button className="w-full py-2.5 rounded-xl bg-slate-800 text-emerald-400 text-xs font-bold border border-slate-700">
                      استكشف باقات VIP
                    </button>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </main>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelectedMedia(null)} className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-400">
                <X className="w-5 h-5" />
              </button>
              <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-4">
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-h-[60vh] object-contain rounded-2xl" />
              </div>
              <div className="md:w-2/5 p-6 flex flex-col justify-between bg-slate-900">
                <div>
                  <h3 className="text-sm font-bold text-slate-200 mb-3">اختر دقة التحميل المناسبة:</h3>
                  <div className="space-y-2.5 mb-6">
                    {['8K Original', '4K Ultra HD', 'Full HD'].map((res, i) => (
                      <button key={i} onClick={() => handleDownload(res)} className="w-full p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-right text-xs font-bold text-white flex justify-between">
                        <span>{res}</span>
                        <Download className="w-4 h-4 text-emerald-400" />
                      </button>
                    ))}
                  </div>
                  {downloadSuccess && (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> جاري بدء تحميل {downloadSuccess}...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </body>
    </html>
  );
}
