export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "품질 우선",
      description: "최고급 원단과 장인 정신으로 제작된 제품만을 선별하여 고객에게 제공합니다.",
    },
    {
      number: "02",
      title: "지속 가능성",
      description: "환경을 생각하는 생산 방식과 재활용 가능한 소재를 사용하여 지구를 보호합니다.",
    },
    {
      number: "03",
      title: "고객 중심",
      description: "고객의 만족이 우리의 최우선 목표입니다. 개인화된 서비스와 세심한 관리를 제공합니다.",
    },
  ]

  return (
    <section id="values" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 text-balance">우리의 핵심 가치</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Style Avenue를 특별하게 만드는 세 가지 원칙
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value) => (
              <div key={value.number} className="text-center md:text-left">
                <div className="text-6xl font-light text-muted-foreground/30 mb-4">{value.number}</div>
                <h3 className="text-2xl font-light mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
