import HeroSection from './components/HeroSection';
import AboutUSection from './components/HomeAbout';
import PricingSection from './components/pricing-plan';
import Clients from './components/clients';
import HomeServices from './components/Home-Services';
import ProjectsSlider from './components/ProjectsSlider';
import Action from  './components/Call';
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutUSection />
      <div className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <HomeServices />
      </div>
      <PricingSection />
      <Clients />
      <ProjectsSlider />
      <Action/>
    </div>
  );
}
