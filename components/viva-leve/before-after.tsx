"use client"

import { useInView } from "@/hooks/use-in-view"
import { X, Check } from "lucide-react"

const beforeItems = [
  "Falta de tempo para se cuidar",
  "Estresse constante",
  "Alimentação irregular",
  "Sem orientação profissional",
  "Dificuldade em manter hábitos"
]

const afterItems = [
  "Rotina leve de autocuidado",
  "Equilíbrio emocional",
  "Alimentação prática e saudável",
  "Apoio especializado",
  "Hábitos constantes sem culpa"
]

export function BeforeAfter() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 lg:py-24 bg-viva-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A7A5A] text-balance">
            Como a Viva Leve transforma sua rotina
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <div className={`${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80"
                alt="Pessoa estressada"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4 bg-[#A85438] text-white px-4 py-1 rounded-full font-semibold text-sm">
                Antes
              </div>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#A85438]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-[#A85438]" />
                  </div>
                  <span className="text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className={`${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80"
                alt="Pessoa feliz e saudável"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4 bg-[#4A7A5A] text-white px-4 py-1 rounded-full font-semibold text-sm">
                Depois
              </div>
            </div>
            <div className="space-y-4">
              {afterItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4A7A5A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#4A7A5A]" />
                  </div>
                  <span className="text-[#4A7A5A] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
