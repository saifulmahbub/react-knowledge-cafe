import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, SetBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    SetBookmarks(newBookMarks);
  };
  const handleMarkAsRead = (time) => {
    const newReadingTime = Number(readingTime) + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-5xl mx-auto  ">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
