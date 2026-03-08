import { useEffect } from 'react';

export default function HeroAscii() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        const allElements = projectDiv.querySelectorAll('*');
        allElements.forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            el.remove();
          }
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-mono">
      {/* Vitruvian man animation - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div
          data-us-project="vitruvian-ascii"
          data-us-scale="1"
          className="w-full h-full"
        />
      </div>

      {/* Mobile stars background */}
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />

      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-start p-4 md:p-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-xs md:text-sm tracking-[0.3em] font-bold">
              UIMIX
            </span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-[10px] md:text-xs text-white/50">EST. 2025</span>
          </div>
        </div>

        <div className="flex flex-col items-end text-[10px] md:text-xs text-white/40">
          <span>LAT: 37.7749°</span>
          <span className="w-8 h-px bg-white/20 my-1" />
          <span>LONG: 122.4194°</span>
        </div>
      </div>

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {/* Top decorative line */}
            <div className="flex items-center gap-3 text-white/30">
              <div className="w-12 h-px bg-white/30" />
              <span className="text-[10px] tracking-widest">001</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Title with dithered accent */}
            <div className="space-y-2">
              <div className="w-16 h-px bg-gradient-to-r from-white/60 to-transparent" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                <span className="block">PERFECT</span>
                <span className="block text-white/40 mt-1">
                  PROPORTIONS
                </span>
              </h1>
            </div>

            {/* Decorative dots pattern - desktop only */}
            <div className="hidden md:flex flex-wrap gap-1 max-w-[200px]">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-white/20 rounded-full"
                />
              ))}
            </div>

            {/* Description with subtle grid pattern */}
            <div className="relative">
              <p className="text-sm md:text-base text-white/60 max-w-md leading-relaxed">
                Where geometry meets humanity — Da Vinci's vision of ideal form
              </p>

              {/* Technical corner accent - desktop only */}
              <div className="hidden md:block absolute -right-8 top-0">
                <div className="w-4 h-4 border border-white/10" />
              </div>
            </div>

            {/* Buttons with technical accents */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-widest font-medium hover:bg-white/90 transition-colors">
                <span className="w-2 h-2 bg-black rounded-full group-hover:scale-110 transition-transform" />
                <span className="w-px h-3 bg-black/20" />
                GET STARTED
              </button>
              <button className="border border-white/30 px-6 py-3 text-xs tracking-widest text-white/70 hover:text-white hover:border-white/60 transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Bottom technical notation - desktop only */}
            <div className="hidden md:flex items-center gap-3 text-[10px] text-white/20 pt-4">
              <span>∞</span>
              <div className="w-8 h-px bg-white/10" />
              <span className="tracking-[0.5em]">VITRUVIAN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex justify-between items-end p-4 md:p-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[10px] text-white/40">
            <span className="hidden md:inline">SYSTEM.ACTIVE</span>
            <span className="md:hidden">SYS.ACT</span>
            <div className="flex gap-px">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-3 bg-white/20"
                />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-white/40">
          <span>◐ RENDERING</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <span>FRAME: ∞</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />
    </div>
  );
}
