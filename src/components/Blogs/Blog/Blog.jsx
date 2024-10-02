import Blogs from "../Blogs";
import { IoBookmarksSharp } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { author, cover_title, cover, author_img, reading_time, hashtags } =
    blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover}></img>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl">{author}</h3>
            <p>{reading_time}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} m reading time</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-500"
          >
            <IoBookmarksSharp></IoBookmarksSharp>
          </button>
        </div>
      </div>

      <h2 className="text-4xl">{cover_title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span>
            <a href="" key={idx}>
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;
