import { Link } from "react-router-dom";

function ContentItem({ video }) {
  return (
    <Link to={"/update-video/" + video.videosId}>
      <div className="container flex flex-row px-7 md:border-b py-2 background-f9f9f9 cursor-pointer w-full">
        <div className="md:w-1/6 p-2 ps-0 w-1/4 ">
          <img className="rounded-sm" src={video.videoThumbnail} alt="" />
        </div>
        <div className="flex-grow md:py-4 my-auto pl-4 :max-sm:w-3/4">
          <h2 className="text-sm">{video.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Diljit Dosanjh | Ghost (Official Video) | Born To Shine Tour |
            Australia | Thiarajxtt
          </p>
        </div>
        <div className="md:w-1/12 md:py-4 my-auto md:block hidden">
          <p className="text-sm">{video.publishDate.seconds}</p>
        </div>
        <div className="md:w-1/12 md:py-4 my-auto md:block hidden">
          <p className="text-sm">{video.views}</p>
        </div>
        <div className="md:w-1/12 md:py-4 my-auto md:block hidden">
          <p className="text-sm">0</p>
        </div>
        <div className="md:w-1/12 md:py-4 my-auto md:block hidden">
          <p className="text-sm">0</p>
        </div>
      </div>
    </Link>
  );
}

export default ContentItem;
