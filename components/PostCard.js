import React from "react";

function PostCard({ post }) {
  console.log(post);

  return (
    <div className="">
      <div className="">
        <img
          className="h-52 w-full object-cover"
          src={post.image}
          loading="lazy"
        />
      </div>

      <h1 className="text-2xl font-semibold leading-relaxed mt-4">
        {post.title}
      </h1>
      <h2 className="text-base mt-2">
        {post.tagline}
      </h2>

      <div className="my-3 flex">
        <img
          className="h-12 w-12 object-cover rounded-full overflow-hidden"
          src={post.image}
          loading="lazy"
        />
        <div className="mx-4">
          <h1 className="font-semibold">
            {post.author}
          </h1>
          <h2 className="">
            {post.date}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
