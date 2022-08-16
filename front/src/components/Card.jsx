const Card = () => {
  return (
    <div className="card bg-white  h-90 w-80 border-2 rounded-lg overflow-hidden shadow-md">
      <img
        src="https://picsum.photos/600/300"
        alt="picsum"
        className="object-cover"
      />
      <div className="card-body p-2 ">
        <div>
          <h5 className="card-title text-xl font-semibold text-gray-700">
            Card title
          </h5>
          <div className="text-sm">
            <p className="card-description">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
            <div className=" bg-blue-500 hover:bg-blue-600 hover:shadow-inner text-white rounded-full p-1 mt-2 w-32 flex justify-center">
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
