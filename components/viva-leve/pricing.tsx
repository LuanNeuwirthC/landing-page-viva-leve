"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Check, Heart, Gift, Percent, CreditCard } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    monthlyPrice: 29.90,
    annualPrice: 25.42,
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
    annualPrice: 50.92,
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
    annualPrice: 84.92,
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
    annualPrice: 25.42,
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
  { icon: Percent, text: "15% OFF no plano anual" },
  { icon: Gift, text: "Indique e ganhem 20% de desconto" }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const { ref, isInView } = useInView()

  return (
    <section id="planos" className="py-16 lg:py-24 bg-[#E2E7D9]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4E8C3F] text-balance">
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
                !isAnnual ? 'bg-[#4E8C3F] text-white' : 'text-[#333333] hover:text-[#4E8C3F]'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-[#4E8C3F] text-white' : 'text-[#333333] hover:text-[#4E8C3F]'
              }`}
            >
              Anual
              <span className="bg-[#A85438] text-white text-xs px-2 py-0.5 rounded-full">
                15% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-t-4 border-t-[#4E8C3F] overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'bg-white/80 backdrop-blur-[12px] border border-white/40 shadow-[0_8px_32px_rgba(78,140,63,0.2)] ring-2 ring-[#4E8C3F]' 
                  : 'bg-white/60 backdrop-blur-[12px] border border-white/40 shadow-[0_8px_32px_rgba(78,140,63,0.15)]'
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#4E8C3F]/15 backdrop-blur-[8px] border border-[#4E8C3F]/30 text-[#4E8C3F] text-xs px-3 py-1 rounded-full font-semibold">
                  Mais popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4E8C3F]">{plan.name}</h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold text-[#4E8C3F]">
                    R$ {isAnnual ? plan.annualPrice.toFixed(2).replace('.', ',') : plan.monthlyPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[#333333]">
                    /{plan.perUser ? 'colaborador/' : ''}mês
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#4E8C3F] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-[#A85438] mb-6">
                  <Heart className="w-4 h-4" />
                  <span>{plan.donation}% doado para instituições de caridade</span>
                </div>

                <Button
                  className={`w-full rounded-full font-semibold transition-all duration-300 ${
                    plan.ctaStyle === 'highlighted'
                      ? 'bg-[#4E8C3F] hover:bg-[#3A6B2E] text-white py-6'
                      : plan.ctaStyle === 'outline'
                      ? 'border-2 border-[#4E8C3F] text-[#4E8C3F] hover:bg-[#4E8C3F] hover:text-white bg-transparent'
                      : 'bg-[#4E8C3F] hover:bg-[#3A6B2E] text-white'
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
              className="flex items-center gap-2 bg-white/45 backdrop-blur-[8px] text-[#4E8C3F] px-4 py-2 rounded-full"
            >
              <badge.icon className="w-5 h-5 text-[#A85438]" />
              <span className="font-medium text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
