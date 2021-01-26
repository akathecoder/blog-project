import React from "react";
import PostCard from "../components/PostCard";

function PostsList({ posts }) {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6">
        {posts.map((post) => {
          return (
            <PostCard post={post} />
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
