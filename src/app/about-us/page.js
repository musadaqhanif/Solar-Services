// import AboutHero from "/components/AboutHero";
// import MissionSection from "/components/MissionSection";
// import TeamSection from "/components/TeamSection";
// import StatsSection from "/components/StatsSection";
import AboutHero from "../../components/about-us/AboutHero";
import MissionSection from "../../components/about-us/MissionSection";
import TeamSection from "../../components/about-us/TeamSection";
import StatsSection from "../../components/about-us/StatsSection";
import FAQSection from "../../components/about-us/FAQSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <AboutHero />
      <MissionSection />
      <FAQSection />
      <StatsSection />
      <TeamSection />
    </main>
  );
}
