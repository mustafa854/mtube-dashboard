import { useState } from "react";
import { useChannel } from "../context/channel";
import { createVideo } from "../utils/firebase.firestore/videos/createVideo";
import { useVideo } from "../context/video";

function CreateVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const { channel } = useChannel();
  const { videos, setVideos } = useVideo();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(channel.channelsId);
    const response = await createVideo(
      title,
      description,
      video,
      thumbnail,
      channel.channelsId
    );
    setVideos((prevArray) => [...prevArray, response]);
    setTitle("");
    setDescription("");
    setThumbnail("");
    setVideo("");
  };

  return (
    <div className="container w-full h-full">
      <div className="p-7 border-b">
        <h1 className="text-2xl font-semibold text-gray-800">Upload Video</h1>
      </div>
      <div className="w-1/2 mx-auto">
        <form className="max-w-sm p-7">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video Description
            </label>
            <textarea
              rows={4}
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="thumbnail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video Thumbnail
            </label>
            <input
              type="text"
              id="thumbnail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="video"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video
            </label>
            <input
              type="text"
              id="video"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateVideo;
