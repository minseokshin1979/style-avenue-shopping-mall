import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <img src="/img2.png" alt="Fashion store" className="w-1/2 h-1/2 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-6 lg:mb-8 text-white">
            스타일과 품질이
            <br />
            만나는 곳
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
            Style Avenue는 현대적인 감각과 시대를 초월한 우아함을 결합하여 당신만의 독특한 스타일을 완성합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group bg-white text-black hover:bg-white/90">
              우리의 이야기
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group bg-transparent border-white text-white hover:bg-white hover:text-black">
              컬렉션 보기
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
