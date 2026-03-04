"use client"

import { useInView } from "@/hooks/use-in-view"
import { Target, Eye, Heart } from "lucide-react"

const items = [
  {
    icon: Target,
    title: "Missão",
    description: "Promover saúde e qualidade de vida por meio de soluções acessíveis e integradas para todos."
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em bem-estar no Brasil, transformando a relação das pessoas com o autocuidado."
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Cuidado, equilíbrio, acessibilidade, ética, inovação e resultados reais."
  }
]

export function Mission() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 lg:py-24 bg-viva-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4E8C3F] text-balance">
            O que nos move
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#A85438]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-[#A85438]" />
              </div>
              <h3 className="text-xl font-bold text-[#4E8C3F] mb-4">
                {item.title}
              </h3>
              <p className="text-[#333333] leading-relaxed">
                {item.description}
              </p>
              <div className="w-12 h-1 bg-[#A85438] rounded-full mx-auto mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
