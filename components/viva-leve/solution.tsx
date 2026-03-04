"use client"

import { useInView } from "@/hooks/use-in-view"
import { Utensils, Sparkles, Video, Heart } from "lucide-react"

const solutions = [
  {
    icon: Utensils,
    title: "Alimentação",
    description: "Receitas saudáveis e planos alimentares personalizados para sua rotina",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80"
  },
  {
    icon: Sparkles,
    title: "Meditação",
    description: "Práticas guiadas de meditação e mindfulness para paz interior",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
  },
  {
    icon: Video,
    title: "Consultas",
    description: "Atendimento online com especialistas em saúde e bem-estar",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
  },
  {
    icon: Heart,
    title: "Autocuidado",
    description: "Conteúdos e práticas para cuidar de você de forma completa",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80"
  }
]

export function Solution() {
  const { ref, isInView } = useInView()

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-viva-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A7A5A] text-balance max-w-3xl mx-auto">
            Tudo o que você precisa para viver mais leve, em um só lugar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group bg-white rounded-2xl overflow-hidden border-t-4 border-t-[#4A7A5A] hover:shadow-xl hover:shadow-[#4A7A5A]/10 transition-all duration-300 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-[#C4694A]/10 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#C4694A]" />
                </div>
                <h3 className="text-xl font-bold text-[#4A7A5A] mb-2">
                  {solution.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
