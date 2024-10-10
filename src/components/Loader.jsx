import loaderGIF from "../assets/loading.gif";

const Loader = () => {
  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed h-full top-0 left-0 w-full bg-black  flex items-center justify-center bg-opacity-60"
    >
      <img className="h-[6rem] w-[6rem]" src={loaderGIF} />
    </div>
  );
};
export default Loader;
