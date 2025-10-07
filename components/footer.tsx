export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-background" />
                <span className="font-semibold">STYLE AVENUE</span>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                당신의 스타일을 완성하는 프리미엄 패션 브랜드
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#about" className="hover:text-background transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#values" className="hover:text-background transition-colors">
                    우리의 가치
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    채용
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">고객 지원</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#contact" className="hover:text-background transition-colors">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    배송 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    반품 정책
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>서울시 강남구 테헤란로 123</li>
                <li>02-1234-5678</li>
                <li>info@styleavenue.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
            <p>© 2025 Style Avenue. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
