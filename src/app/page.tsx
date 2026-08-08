import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTACards from "@/components/CTACards";
import WhySection from "@/components/WhySection";
import PracticeAreas from "@/components/PracticeAreas";
import AboutSection from "@/components/AboutSection";
import CaseFiles from "@/components/CaseFiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CTACards />
        <WhySection />
        <PracticeAreas />
        <AboutSection />
        <CaseFiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
