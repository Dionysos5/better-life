const CardDetails = () => {
  return (
    <main>
      {/* Flex container */}
      <div className="container flex flex-col mx-auto p-10">
        <h1 className="text-3xl font-semibold text-center">Writing</h1>
        {/* Benefits of the skill */}
        <div className="">
          <h3 className="text-xl">Benefits of writing</h3>
          {/* TODO: Consider using small cards for the benefits with a header and a content, maybe use slots */}
          <ul className="">
            <li>Communicate with more clarity</li>
            <li>Reduce anxiety</li>
            <li>Become more productive</li>
            <li>Learn more</li>
            <li>Become more aware</li>
            <li>Make better decisions</li>
          </ul>
        </div>
        {/* How to build the habit */}
        <div className="mt-4">
          <h3 className="text-xl">How to become a writer</h3>
          {/* TODO: Consider getting actual good advice for improving as a writer from good writers and credit them */}
          <ul>
            <li>
              Write every day, at the same time, same place and have minimum
              number of words to write, you are free to write more but not less.
            </li>
            <li>
              Write about anything that comes to mind, just make structured,
              like you are writing for someone else
            </li>
            <li>Read from good writers</li>
            <li>Read out loud what you write</li>
            <li>
              Reread what you wrote and cut everything that is not essential to
              the message
            </li>
          </ul>
        </div>
        {/* Resources to dig deeper */}
        <div className="mt-4">
          <h3 className="text-xl">Resources to dig deeper into Why and How</h3>
          <ul>
            <li className="text-blue-600">
              <a href="https://jamesclear.com/book-summaries/bird-by-bird">
                Summary of Bird by bird by Anne Lamott
              </a>
            </li>
            <li className="text-blue-600">
              <a href="https://jamesclear.com/scale">
                Why I write by James Clear
              </a>
            </li>
            <li className="text-blue-600">
              <a href="https://jamesclear.com/daily-routines-writers">
                The daily Routines of 12 Famous Writers by James Clear
              </a>
            </li>
          </ul>
        </div>
        {/* Getting started */}
      </div>
    </main>
  );
};

export default CardDetails;
