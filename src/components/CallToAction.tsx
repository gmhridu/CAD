import { Button } from "./ui/Button";

const CallToAction = () => {
  return (
    <section className="section section-cta bg-gray-100 py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="cta-bx text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <Button variant={"primary"} size={'lg'}>Hire design talent</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
