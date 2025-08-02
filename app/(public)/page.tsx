import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  CallToActionSection
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </div>
  );
} 