"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Check, Heart, Gift, Percent, CreditCard } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    monthlyPrice: 29.90,
    annualPrice: 26.91,
    donation: 5,
    popular: false,
    features: [
      "Aulas de meditação e respiração",
      "Receitas e programas de alimentação saudável",
      "Conteúdos semanais sobre autocuidado",
      "1 consulta por mês com especialista"
    ],
    ctaText: "Começar grátis",
    ctaStyle: "default"
  },
  {
    name: "Equilíbrio",
    monthlyPrice: 59.90,
    annualPrice: 53.91,
    donation: 8,
    popular: true,
    features: [
      "Tudo do Essencial",
      "Aulas de yoga e atividades físicas leves",
      "3 consultas por mês com especialistas",
      "Plano alimentar personalizado",
      "Trilhas de bem-estar guiadas"
    ],
    ctaText: "Começar grátis",
    ctaStyle: "highlighted"
  },
  {
    name: "Viva Pleno",
    monthlyPrice: 99.90,
    annualPrice: 89.91,
    donation: 10,
    popular: false,
    features: [
      "Tudo do Equilíbrio",
      "Consultas ilimitadas com especialistas",
      "Acompanhamento personalizado mensal",
      "Acesso antecipado a novos conteúdos",
      "Suporte prioritário via chat",
      "Programa exclusivo de metas e evolução pessoal"
    ],
    ctaText: "Começar grátis",
    ctaStyle: "default"
  },
  {
    name: "Empresa",
    monthlyPrice: 29.90,
    annualPrice: 29.90,
    donation: 8,
    popular: false,
    perUser: true,
    features: [
      "Plano Equilíbrio completo para cada colaborador",
      "Painel administrativo para gestão da equipe",
      "Relatórios de engajamento e bem-estar",
      "Suporte dedicado ao RH"
    ],
    ctaText: "Falar com consultor",
    ctaStyle: "outline"
  }
]

const badges = [
  { icon: CreditCard, text: "7 dias grátis sem cartão" },
  { icon: Percent, text: "10% OFF no plano anual" },
  { icon: Gift, text: "Indique e ganhe 1 mês grátis" }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const { ref, isInView } = useInView()

  return (
    <section id="planos" className="py-16 lg:py-24 bg-[#E2E7D9]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A7A5A] text-balance">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-[#333333]">
            7 dias grátis em qualquer plano. Sem cartão de crédito.
          </p>
        </div>

        {/* Toggle */}
        <div className={`flex justify-center mb-12 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-full p-1 flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-[#4A7A5A] text-white' : 'text-[#333333] hover:text-[#4A7A5A]'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-[#4A7A5A] text-white' : 'text-[#333333] hover:text-[#4A7A5A]'
              }`}
            >
              Anual
              <span className="bg-[#C4694A] text-white text-xs px-2 py-0.5 rounded-full">
                10% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-t-4 border-t-[#4A7A5A] overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-[#4A7A5A] shadow-lg' : ''
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#C4694A] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Mais popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4A7A5A]">{plan.name}</h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold text-[#4A7A5A]">
                    R$ {isAnnual ? plan.annualPrice.toFixed(2).replace('.', ',') : plan.monthlyPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[#333333]">
                    /{plan.perUser ? 'colaborador/' : ''}mês
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#4A7A5A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-[#C4694A] mb-6">
                  <Heart className="w-4 h-4" />
                  <span>{plan.donation}% doado para instituições de caridade</span>
                </div>

                <Button
                  className={`w-full rounded-full font-semibold transition-all duration-300 ${
                    plan.ctaStyle === 'highlighted'
                      ? 'bg-[#4A7A5A] hover:bg-[#2D4A35] text-white py-6'
                      : plan.ctaStyle === 'outline'
                      ? 'border-2 border-[#4A7A5A] text-[#4A7A5A] hover:bg-[#4A7A5A] hover:text-white bg-transparent'
                      : 'bg-[#4A7A5A] hover:bg-[#2D4A35] text-white'
                  }`}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className={`mt-12 flex flex-wrap justify-center gap-4 ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-[#4A7A5A]/10 text-[#4A7A5A] px-4 py-2 rounded-full"
            >
              <badge.icon className="w-5 h-5 text-[#C4694A]" />
              <span className="font-medium text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
