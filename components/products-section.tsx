import { Card } from "@/components/ui/card"

export function ProductsSection() {
  const categories = [
    {
      title: "여성 컬렉션",
      description: "우아함과 현대적 감각이 조화를 이루는 여성 의류",
      image: "/img3.png",
    },
    {
      title: "남성 컬렉션",
      description: "세련되고 품격 있는 남성 스타일링",
      image: "/img4.png",
    },
    {
      title: "액세서리",
      description: "스타일을 완성하는 프리미엄 액세서리",
      image: "/img5.png",
    },
  ]

  return (
    <section id="products" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 text-balance">우리의 컬렉션</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              당신의 스타일을 완성할 다양한 제품을 만나보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="group overflow-hidden border-0 bg-background hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
