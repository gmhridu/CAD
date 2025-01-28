import Hero from "@/components/Hero";
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
import GetInTouch from "./components/GetInTouch";
function App() {
  return (
    <>
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
      <GetInTouch />
      {/* <Skills/> */}
    </>
  );
}

export default App;
