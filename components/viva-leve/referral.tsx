"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Share2, UserPlus, Gift, Copy, Check, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Share2,
    step: 1,
    title: "Compartilhe seu link",
    description: "Copie e envie para amigos e familiares"
  },
  {
    icon: UserPlus,
    step: 2,
    title: "Amigo assina qualquer plano",
    description: "Ele ganha 20% de desconto"
  },
  {
    icon: Gift,
    step: 3,
    title: "Você também ganha 20%",
    description: "Sem limite de indicações"
  }
]

export function Referral() {
  const { ref, isInView } = useInView()
  const [copied, setCopied] = useState(false)
  const referralLink = "vivaleve.com.br/indicar/seu-codigo"

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${referralLink}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="indicar" className="py-16 lg:py-24 bg-[#E2E7D9]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Badge */}
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-[#4E8C3F]/10 text-[#4E8C3F] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            <span>Programa de Indicação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4E8C3F] text-balance">
            Indique um amigo e ganhem 20% de desconto
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-lg">
            Você indica, seu amigo ganha 20% e você também. Simples assim.
          </p>
        </div>

        {/* Steps Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#4E8C3F]/40" />
                </div>
              )}
              
              <div className="bg-white/60 backdrop-blur-[8px] border border-white/40 rounded-2xl p-6 text-center h-full hover:bg-white/80 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-[#A85438] text-white rounded-full text-sm font-bold mb-4">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-[#4E8C3F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#4E8C3F]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#4E8C3F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#333333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Share Link Box */}
        <div className={`max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-[12px] border border-white/50 rounded-2xl p-6 shadow-lg">
            <p className="text-center text-[#4E8C3F] font-semibold mb-4">
              Seu link de indicacao
            </p>
            
            {/* Link Input with Copy Button */}
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-[#E8EDE0] rounded-xl px-4 py-3 text-[#333333] font-mono text-sm overflow-hidden">
                <span className="truncate block">{referralLink}</span>
              </div>
              <Button
                onClick={handleCopy}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  copied 
                    ? 'bg-[#4E8C3F] text-white' 
                    : 'bg-[#4E8C3F] hover:bg-[#3A6B2E] text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            
            {/* Share Options */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="text-sm text-[#333333]/70">Compartilhar via:</span>
              <button className="text-sm text-[#4E8C3F] hover:underline font-medium">WhatsApp</button>
              <button className="text-sm text-[#4E8C3F] hover:underline font-medium">E-mail</button>
              <button className="text-sm text-[#4E8C3F] hover:underline font-medium">Telegram</button>
            </div>
          </div>
          
          {/* Benefit Highlight */}
          <div className="mt-6 text-center">
            <p className="text-[#333333]/80 text-sm">
              Sem limite de indicacoes — quanto mais amigos, mais desconto voce acumula!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
