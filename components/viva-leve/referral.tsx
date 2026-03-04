"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Share2, UserPlus, Gift } from "lucide-react"

const steps = [
  {
    icon: Share2,
    step: 1,
    title: "Compartilhe seu link",
    description: "Envie para amigos e familiares"
  },
  {
    icon: UserPlus,
    step: 2,
    title: "Amigo assina qualquer plano",
    description: "Ele também ganha 7 dias grátis"
  },
  {
    icon: Gift,
    step: 3,
    title: "Você ganha 1 mês grátis",
    description: "Sem limite de indicações"
  }
]

export function Referral() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 lg:py-24 bg-viva-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4E8C3F] text-balance">
            Indique um amigo e ganhe 1 mês grátis
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto">
            Compartilhe seu link exclusivo. Quando seu amigo assinar qualquer plano, 
            você ganha automaticamente 1 mês grátis. Sem limite de indicações.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-12 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {steps.map((item, index) => (
            <div key={item.step} className="text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-[#4E8C3F] rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#A85438] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#4E8C3F]">
                {item.title}
              </h3>
              <p className="mt-2 text-[#333333]">
                {item.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+60px)] w-[calc(100%-120px)] border-t-2 border-dashed border-[#4E8C3F]/30" />
              )}
            </div>
          ))}
        </div>

        <div className={`text-center ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          <Button
            size="lg"
            className="bg-[#4E8C3F] hover:bg-[#3A6B2E] text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
          >
            Quero indicar agora
          </Button>
        </div>
      </div>
    </section>
  )
}
