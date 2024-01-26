// content.jsx
import { useEffect } from "react";
import { useVideo } from "../context/video";
import { getAllVideos } from "../utils/firebase.firestore/videos/getAllVideos";
import ContentItem from "../components/contentItem";
import Loader from "../components/Loader";

function Content() {
  const { videos } = useVideo();

  return (
    <div className=" w-full">
      <div className="p-7">
        <h1 className="text-2xl font-semibold text-gray-800">
          Channel Content
        </h1>
      </div>
      <div className="px-7 border-t border-b py-3 ">
        <div className="container flex flex-row">
          <div className="flex-grow ">
            <p className="text-sm font-semibold ">Video</p>
          </div>

          <div className="md:w-1/12  md:block hidden">
            <p className="text-sm font-semibold ">Publish Date</p>
          </div>
          <div className="md:w-1/12  md:block hidden">
            <p className="text-sm font-semibold ">Views</p>
          </div>
          <div className="md:w-1/12  md:block hidden">
            <p className="text-sm font-semibold ">Comments</p>
          </div>
          <div className="md:w-1/12  md:block hidden">
            <p className="text-sm font-semibold ">Likes vs Dislikes</p>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        {videos ? (
          videos.map((element) => (
            <ContentItem video={element} key={element.videosId} />
          ))
        ) : (
          <Loader height={"400px"} />
        )}
      </div>
    </div>
  );
}

export default Content;
