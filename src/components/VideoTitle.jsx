import playIcon from "../assets/play.png";
import infoIcon from "../assets/info.png";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  return (
    <div className="pt-[15%] pl-36 absolute w-[100%] aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{movieTitle}</h1>
      <p className="w-1/3 py-2">{movieOverview}</p>
      <div className="flex pt-4">
        <div className="mr-6">
          <button
            type="button"
            className="flex justify-evenly bg-white hover:bg-opacity-80 text-black w-28 py-2 rounded-md"
          >
            <img className="mt-1 h-6" src={playIcon} alt="play icon" />
            <span className="pb-1 text-lg">Play</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex justify-evenly bg-zinc-500 hover:bg-opacity-80 text-white w-36 py-2 rounded-md"
          >
            <img className="h-7" src={infoIcon} alt="info icon" />
            <span className="pb-1 text-lg">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
