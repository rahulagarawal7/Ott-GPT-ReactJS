import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 h-56  md:w-48 pr-4 ">
      <img
        alt="Movie Card"
        className="object-contain h-56 "
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
