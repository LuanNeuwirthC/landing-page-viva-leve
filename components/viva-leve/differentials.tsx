"use client"

import { useInView } from "@/hooks/use-in-view"
import { Zap, Clock, MessageCircle, Heart, Settings, Users } from "lucide-react"

const differentials = [
  {
    icon: Zap,
    title: "Integração corpo e mente",
    description: "Abordagem holística para seu bem-estar completo"
  },
  {
    icon: Clock,
    title: "Foco na praticidade",
    description: "Soluções que cabem na sua rotina corrida"
  },
  {
    icon: MessageCircle,
    title: "Linguagem simples e acessível",
    description: "Sem termos complicados, direto ao ponto"
  },
  {
    icon: Heart,
    title: "Cuidado humanizado",
    description: "Sem pressão estética, apenas bem-estar real"
  },
  {
    icon: Settings,
    title: "Personalização à sua rotina",
    description: "Conteúdos adaptados às suas necessidades"
  },
  {
    icon: Users,
    title: "Suporte de especialistas reais",
    description: "Profissionais qualificados ao seu lado"
  }
]

export function Differentials() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 lg:py-24 bg-[#4A7A5A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            Por que escolher a Viva Leve?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#C4694A]/20 rounded-xl flex items-center justify-center mb-4">
                <diff.icon className="w-6 h-6 text-[#C4694A]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {diff.title}
              </h3>
              <p className="text-[#E8EDE0] leading-relaxed text-sm">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
