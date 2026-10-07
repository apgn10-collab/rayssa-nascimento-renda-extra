import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { NewsTicker } from '@/components/landing/NewsTicker'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ReferralBlock } from '@/components/landing/ReferralBlock'
import { FeaturedNews } from '@/components/landing/FeaturedNews'
import { RealTasksSegments } from '@/components/landing/RealTasksSegments'
import { RobotShowcase } from '@/components/landing/RobotShowcase'
import { GlobalPress } from '@/components/landing/GlobalPress'
import { PaymentProofs } from '@/components/landing/PaymentProofs'
import { StatsAndSimulator } from '@/components/landing/StatsAndSimulator'
import { FinalConversion } from '@/components/landing/FinalConversion'
import { LANDING_IMAGES, LANDING_PROOFS } from '@/lib/images'

export default function Index() {
  return (
    <>
      <Header logoUrl={LANDING_IMAGES.logo.url} />
      <Hero heroBgUrl={LANDING_IMAGES.heroBg.url} />
      <NewsTicker />
      {/* Seção de Segmentos Reais com as 3 Fotos Distribuídas Abaixo do Hero */}
      <RealTasksSegments
        foldingClothesImg={LANDING_IMAGES.foldingClothes.url}
        dogWalkImg={LANDING_IMAGES.dogWalkRoutine.url}
        hotelImg={LANDING_IMAGES.hotelHospitality.url}
        slot1Img={LANDING_IMAGES.slotUpcoming1.url}
        slot2Img={LANDING_IMAGES.slotUpcoming2.url}
      />
      <HowItWorks
        step1Img={LANDING_IMAGES.step1.url}
        step1Thumb={LANDING_IMAGES.step1.thumb}
        step2Img={LANDING_IMAGES.step2Minute.url}
        step2Thumb={LANDING_IMAGES.step2Minute.thumb}
        step3Img={LANDING_IMAGES.step3Payout.url}
        step3Thumb={LANDING_IMAGES.step3Payout.thumb}
      />
      <ReferralBlock />
      <FeaturedNews />
      <RobotShowcase robotPhotoUrl={LANDING_IMAGES.robotPhoto.url} />
      <GlobalPress />
      <PaymentProofs proofs={LANDING_PROOFS} />
      <StatsAndSimulator />
      <FinalConversion finalBgUrl={LANDING_IMAGES.finalBg.url} />
    </>
  )
}
