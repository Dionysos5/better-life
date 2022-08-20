const HeroSection = () => {
  return (
    <section className="bg-gray-200">
      {/* Flex Container */}
      <div className="flex flex-row container mx-auto p-10 mt-10 mb-5">
        {/* Left Item */}
        <div className="flex flex-col md:w-1/2 space-y-5">
          <h1 className="text-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            laborum?
          </p>
          <div className="flex">
            {/* Button */}
            <a
              href="/"
              className="hidden bg-green-400 px-6 py-3 rounded-full md:block hover:bg-green-500"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Right Item */}
        <div className="flex md:w-1/2">
          <img src="https://picsum.photos/400" alt="logo" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
