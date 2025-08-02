import PublicLayout from '@/components/layout/PublicLayout';
import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  CallToActionSection
} from '@/components/home';

export default function RootPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-white text-gray-900">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CallToActionSection />
      </div>
    </PublicLayout>
  );
} 