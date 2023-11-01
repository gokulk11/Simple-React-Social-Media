import React from "react";
import Post from "./Post";

const Main = () => {
  return (
    <div className="mt-4">
      <div className="ml-6 mb-5">
        <h2 className="text-[.8rem] font-semibold">Recent Posts</h2>
      </div>
      {/* Main Content */}
      <div className="main-container">
        <Post/>
      </div>
    </div>
  );
};

export default Main;
