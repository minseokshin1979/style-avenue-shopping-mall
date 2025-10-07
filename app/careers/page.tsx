import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const mdRequirements = [
    {
      title: "기본 요건",
      requirements: [
        "의류학, 패션디자인, 상품학 또는 관련 학과 졸업자",
        "패션업계 MD 경험 3년 이상",
        "트렌드 분석 및 시장 조사 능력",
        "상품 기획 및 개발 경험",
        "엑셀, 파워포인트 등 오피스 프로그램 활용 가능"
      ]
    },
    {
      title: "우대 사항",
      requirements: [
        "온라인 쇼핑몰 MD 경험",
        "해외 브랜드 및 트렌드 분석 경험",
        "상품 기획서 작성 및 프레젠테이션 경험",
        "협력업체 관리 및 네트워킹 능력",
        "영어 회화 가능자",
        "패션 관련 자격증 보유자"
      ]
    },
    {
      title: "업무 내용",
      requirements: [
        "시즌별 상품 기획 및 개발",
        "트렌드 분석 및 시장 조사",
        "브랜드별 매출 분석 및 개선안 도출",
        "협력업체 발굴 및 관리",
        "상품 기획서 작성 및 발표",
        "매장 진열 및 상품 관리"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  홈으로 돌아가기
                </Button>
              </Link>
              
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4 text-balance">
                채용정보
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Style Avenue와 함께 패션의 미래를 만들어갈 인재를 찾습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Position */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-light mb-2">상품기획자 (MD)</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      서울시 강남구
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      정규직
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      경력 3년 이상
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">회사 소개</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Style Avenue는 2015년 설립 이래, 고품질 의류와 액세서리를 통해 고객들의 일상에 특별함을 더해왔습니다. 
                    우리는 단순히 옷을 파는 것이 아니라, 자신감과 개성을 표현할 수 있는 방법을 제공합니다. 
                    지속 가능한 패션과 윤리적 생산을 최우선으로 하며, 모든 제품은 엄격한 품질 관리를 거쳐 고객에게 전달됩니다.
                  </p>
                </div>

                {mdRequirements.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">근무 조건</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">근무시간:</span> 09:00 ~ 18:00 (주 5일)
                    </div>
                    <div>
                      <span className="font-medium">급여:</span> 면접 후 협의
                    </div>
                    <div>
                      <span className="font-medium">복리후생:</span> 4대보험, 퇴직금, 교육비 지원
                    </div>
                    <div>
                      <span className="font-medium">채용형태:</span> 정규직
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Application Section */}
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">지원하기</h3>
              <p className="text-muted-foreground mb-8">
                관심이 있으시다면 언제든지 연락주세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:careers@styleavenue.co.kr?subject=상품기획자(MD) 지원">
                    이메일로 지원하기
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:02-1234-5678">
                    전화 문의하기
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
