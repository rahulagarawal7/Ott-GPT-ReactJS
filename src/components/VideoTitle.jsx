const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="md:text-6xl hidden md:block text-3xl mt-10 md:mt-0 font-bold">
        {title}
      </h1>
      <p className="text-lg w-1/3 hidden md:block mt-2">{overview}</p>
      <div className="flex ">
        <button className="bg-white md:-mx-0 -mx-6 md:mt-2 mt-[20%] px-4 py-2 md:py-2 text-black md:text-lg md:p-2 md:px-14 rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-600 hidden md:block font-bold hover:bg-opacity-50  text-white p-2 px-14 rounded-lg mx-4 bg-opacity-35 text-lg ">
          <div className="flex gap-4 ">
            <div className=" h-6 w-6 rounded-2xl border border-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                viewBox="0 0 192 512"
                className="my-1 mx-2"
              >
                <path
                  fill="#ffffff"
                  d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"
                />
              </svg>
            </div>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
