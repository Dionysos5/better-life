import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <section className="bg-gray-200">
        {/* Flex Container */}
        <div className="flex flex-col container mx-auto p-10 mt-10 mb-5 md:flex-row">
          {/* Left Item */}
          <div className="flex flex-col md:w-1/2 space-y-5">
            <h1 className="text-4xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              laborum?
            </p>
            <div className="flex ">
              {/* Button */}
              <a
                href="/"
                className="hidden  bg-green-400 px-6 py-3 rounded-full md:block hover:bg-green-500"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Right Item */}
          <div className="flex justify-center md:w-1/2">
            <img src="https://picsum.photos/400" alt="logo" />
          </div>
        </div>
        <div className="flex justify-center">
          {/* Button */}
          <a
            href="/"
            className=" bg-green-400 px-6 py-3 rounded-full md:hidden hover:bg-green-500"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="main mb-4">
        {/* Flex Container */}
        <div className="container flex flex-col justify-center mx-auto mt-4">
          <div className="text-center ">
            <h1 className="text-4xl p-4 bg-gray-100 rounded">
              Pick a skill you want to learn
            </h1>
          </div>
          {/* Cards */}
          <div className=" mx-auto grid grid-cols-1 gap-4 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
