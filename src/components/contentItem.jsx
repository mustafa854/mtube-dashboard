import { Link } from "react-router-dom";

function ContentItem({ video }) {
  return (
    <Link to={"/update-video/" + video.videosId}>
      <div className="container flex flex-row px-7 border-b py-2 background-f9f9f9 cursor-pointer">
        <div className="w-1/6 p-2 ps-0 ">
          <img className="rounded-sm" src={video.videoThumbnail} alt="" />
        </div>
        <div className="flex-grow py-4 pl-4">
          <h2 className="text-sm">{video.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Diljit Dosanjh | Ghost (Official Video) | Born To Shine Tour |
            Australia | Thiarajxtt
          </p>
        </div>
        <div className="w-1/12 py-4">
          <p className="text-sm">{video.publishDate.seconds}</p>
        </div>
        <div className="w-1/12 py-4">
          <p className="text-sm">{video.views}</p>
        </div>
        <div className="w-1/12 py-4">
          <p className="text-sm">0</p>
        </div>
        <div className="w-1/12 py-4">
          <p className="text-sm">0</p>
        </div>
      </div>
    </Link>
  );
}

export default ContentItem;
