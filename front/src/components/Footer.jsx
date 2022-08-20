const Footer = () => {
  return (
    <footer className="bg-gray-400">
      {/* Flex container */}
      <div className="container flex flex-col-reverse justify-between mx-auto px-6 py-10 space-y-8 md:flex-row md:space-y-0 ">
        {/* Copyright, Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* Copyright */}
          <div className="mx-auto my-6 text-center md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://picsum.photos/50"
              alt="logo"
              className="rounded-full"
            />
            <h1 className="text-3xl font-semibold">Better Life</h1>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            {/* Link 1 */}
            <a href="/">
              <img
                src="https://picsum.photos/30"
                className="rounded-full"
                alt="logo"
              />
            </a>
            {/* Link 2 */}
            <a href="/">
              <img
                src="https://picsum.photos/30"
                className="rounded-full"
                alt="logo"
              />
            </a>
            {/* Link 3 */}
            <a href="/">
              <img
                src="https://picsum.photos/30"
                className="rounded-full"
                alt="logo"
              />
            </a>
          </div>
        </div>
        {/* List container */}
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col space-y-3">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </div>
        {/* Contact form */}
        <div className="flex flex-col justify-between">
          <form action="">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-green-500 rounded-full text-white hover:bg-green-700">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
