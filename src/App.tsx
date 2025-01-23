import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import Services from "@/components/Services";
import Contractors from "@/components/Contractors";
import QuotesSection from "@/components/QuotesSection";
import ActionsSection from "@/components/ActionsSection";
import Counter from "@/components/Counter";
import Hire from "@/components/Hire";
import CompaniesSection from "@/components/CompaniesSection";
import CallToAction from "@/components/CallToAction";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <FeaturedDesigns />
      <Services />
      <Contractors />
      <QuotesSection />
      <ActionsSection />
      <Counter />
      <Hire />
      <CompaniesSection />
      <CallToAction />
      {/* <Skills/> */}
    </>
  );
}

export default App;
