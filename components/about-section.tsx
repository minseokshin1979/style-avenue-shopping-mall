export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance">
                패션을 통해
                <br />
                삶을 풍요롭게
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Style Avenue는 2015년 설립 이래, 고품질 의류와 액세서리를 통해 고객들의 일상에 특별함을 더해왔습니다.
                우리는 단순히 옷을 파는 것이 아니라, 자신감과 개성을 표현할 수 있는 방법을 제공합니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                지속 가능한 패션과 윤리적 생산을 최우선으로 하며, 모든 제품은 엄격한 품질 관리를 거쳐 고객에게
                전달됩니다.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img src="/img.png" alt="About us" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
