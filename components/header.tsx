"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground" />
            <span className="text-lg font-semibold tracking-tight">STYLE AVENUE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
              회사 소개
            </a>
            <a href="#values" className="text-sm hover:text-muted-foreground transition-colors">
              우리의 가치
            </a>
            <a href="#products" className="text-sm hover:text-muted-foreground transition-colors">
              제품
            </a>
            <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors">
              문의하기
            </a>
            <Link href="/careers" className="text-sm hover:text-muted-foreground transition-colors">
              채용정보
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <Button className="hidden md:inline-flex">상담 예약</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                회사 소개
              </a>
              <a
                href="#values"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                우리의 가치
              </a>
              <a
                href="#products"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                제품
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
              <Link
                href="/careers"
                className="text-sm hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                채용정보
              </Link>
              <Button className="w-full">상담 예약</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
