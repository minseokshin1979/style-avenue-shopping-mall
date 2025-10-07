import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance">함께 시작하세요</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Style Avenue와 함께 당신만의 스타일을 찾아보세요. 전문 스타일리스트가 개인 맞춤 상담을 제공합니다.
          </p>
          <Button size="lg" className="text-base px-8">
            상담 예약하기
          </Button>
        </div>
      </div>
    </section>
  )
}
