import { ArrowRight } from 'lucide-react'
import heroImage from '../../assets/cofer-hero.jpg'

export function Hero() {
  return <section id="top" className="relative overflow-hidden bg-[#063f82]">
    <div className="page-shell relative grid min-h-[500px] lg:min-h-[570px] lg:grid-cols-[45%_55%]">
      <div className="relative z-10 flex items-center py-12 sm:py-16 lg:py-0">
        <div className="max-w-[34rem] border-l-4 border-[#e1252d] pl-5 text-white sm:pl-7">
          <p className="mb-7 text-[11px] font-bold tracking-[.14em] text-[#ffe36b]">ĐOÀN TNCS HỒ CHÍ MINH – HỘI SINH VIÊN VIỆT NAM</p>
          <h1 className="font-display font-extrabold leading-[1.1] tracking-[-.06em] text-white"><span className="block text-[clamp(2.2rem,6.4vw,4rem)] lg:inline">TUỔI TRẺ </span><span className="block text-[clamp(2.2rem,6.4vw,4rem)] lg:inline">COFER</span></h1>
          <p className="mt-5 text-[13px] font-extrabold tracking-[.1em] text-[#ffe36b] sm:text-[15px]">BẢN LĨNH <span className="px-1 text-[#e1252d]">•</span> TIÊN PHONG <span className="px-1 text-[#e1252d]">•</span> CỐNG HIẾN</p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-blue-100 sm:text-base">Cùng học tập, rèn luyện, sáng tạo và lan tỏa những giá trị tốt đẹp đến cộng đồng.</p>
          <a href="#hoat-dong" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#e1252d] px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c91925]">Khám phá hoạt động <ArrowRight size={18} /></a>
        </div>
      </div>
      <div className="relative min-h-[300px] overflow-hidden lg:min-h-0 lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]"><img src={heroImage} alt="Chiến sĩ Mùa hè xanh COFER 2026 nhận khen thưởng" width="1200" height="800" fetchPriority="high" className="h-full w-full object-cover object-center" /><div className="absolute inset-y-0 left-0 hidden w-24 bg-[linear-gradient(90deg,#063f82,transparent)] lg:block" /><span className="absolute bottom-5 left-5 border-l-2 border-[#e1252d] bg-[#063f82]/95 px-3 py-2 text-[11px] font-bold tracking-[.08em] text-white">MÙA HÈ XANH COFER 2026</span></div>
    </div>
    <span className="pointer-events-none absolute right-[6%] top-9 hidden h-28 w-28 border border-white/15 lg:block" /><span className="pointer-events-none absolute bottom-0 left-0 h-1 w-[42%] bg-[#e1252d]" />
  </section>
}
