

const CallToAction = () => {
  return (
    <section className="section section-cta bg-gray-100 py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="cta-bx text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <a
            href="/quote"
            className="btn btn-info btn-lg bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Hire design talent
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
