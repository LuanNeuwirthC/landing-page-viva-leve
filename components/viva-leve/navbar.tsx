"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Planos", href: "#planos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-viva-beige/95 backdrop-blur-sm border-b border-viva-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo-vivaleve.png"
              alt="Viva Leve - Respire. Viva leve."
              width={120}
              height={60}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-viva-dark-green hover:text-viva-sage transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-viva-sage hover:bg-viva-dark-green text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
            >
              Comece grátis por 7 dias
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-viva-dark-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-viva-sage/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-viva-dark-green hover:text-viva-sage transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-viva-sage hover:bg-viva-dark-green text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 w-full mt-4"
              >
                Comece grátis por 7 dias
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
