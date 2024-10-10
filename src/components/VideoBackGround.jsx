import { useSelector } from "react-redux";
import { useMovieVideos } from "../hooks/useMovieVideos";
const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideos(movieId);

  return (
    <div className="w-screen">
      <iframe
        src={`https://www.youtube.com/embed/4CLE3pWAAr8?si=${trailerVideo?.key}&autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=4CLE3pWAAr8`}
        className="w-screen aspect-video "
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
