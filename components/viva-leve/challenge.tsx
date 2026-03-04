"use client"

import { useInView } from "@/hooks/use-in-view"
import { Clock, Brain, HelpCircle } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Falta de tempo",
    description: "Dificuldade em encontrar tempo para hábitos saudáveis na rotina corrida",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80"
  },
  {
    icon: Brain,
    title: "Estresse e ansiedade",
    description: "Altos níveis de estresse impactando a saúde mental e física",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=400&q=80"
  },
  {
    icon: HelpCircle,
    title: "Informações dispersas",
    description: "Conteúdos de saúde espalhados sem orientação personalizada",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80"
  }
]

export function Challenge() {
  const { ref, isInView } = useInView()

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#E2E7D9]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-viva-dark-green text-balance">
            Sabemos como é difícil se cuidar no dia a dia
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className={`bg-white rounded-2xl border border-viva-sage/20 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-viva-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-viva-terracotta" />
                </div>
                <h3 className="text-xl font-bold text-viva-dark-green mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
