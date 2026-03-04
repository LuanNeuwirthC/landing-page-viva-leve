import { Navbar } from "@/components/viva-leve/navbar"
import { Hero } from "@/components/viva-leve/hero"
import { Challenge } from "@/components/viva-leve/challenge"
import { Solution } from "@/components/viva-leve/solution"
import { Differentials } from "@/components/viva-leve/differentials"
import { BeforeAfter } from "@/components/viva-leve/before-after"
import { Pricing } from "@/components/viva-leve/pricing"
import { SocialImpact } from "@/components/viva-leve/social-impact"
import { Referral } from "@/components/viva-leve/referral"
import { Testimonials } from "@/components/viva-leve/testimonials"
import { Mission } from "@/components/viva-leve/mission"
import { CTAFinal } from "@/components/viva-leve/cta-final"
import { Footer } from "@/components/viva-leve/footer"

export default function VivaLevePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Differentials />
      <BeforeAfter />
      <Pricing />
      <SocialImpact />
      <Referral />
      <Testimonials />
      <Mission />
      <CTAFinal />
      <Footer />
    </main>
  )
}
