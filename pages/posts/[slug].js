import React from "react";
import find from "list-files";
import { getPostBySlug } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import "../../styles/post.module.css";
import { H1 } from "../../lib/postCss";

function slug({ post }) {
  // console.log(post);

  return (
    <div>
      <h1>Hello</h1>
      <div className="post">
        <ReactMarkdown
          renderers={{
            heading: H1,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default slug;

export async function getStaticProps({
  params,
}) {
  const post = getPostBySlug(
    params.slug,
    [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
    ]
  );

  // const content = await markdownToHtml(
  //   post.content || ""
  // );

  const content = post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// getStaticPaths Start

const getSlug = (thePath) => {
  const newPath = thePath.substring(
    thePath.lastIndexOf("/") + 1
  );

  return newPath.substring(
    0,
    newPath.lastIndexOf(".")
  );
};

const getDir = (thePath) => {
  const newPath = thePath.substring(
    0,
    thePath.lastIndexOf("/")
  );

  return newPath.substring(
    thePath.lastIndexOf("/") + 1
  );
};

export async function getStaticPaths() {
  let paths = await getpaths();

  return {
    paths: paths.map((path) => {
      return {
        params: {
          slug: getSlug(path),
          // dir: getDir(path),
        },
      };
    }),
    fallback: false,
  };
}

function getpaths() {
  return new Promise(
    (resolve, reject) => {
      find(
        (result) => {
          resolve(result);
        },
        {
          dir: "data",
          name: "md",
        }
      );
    }
  );
}

// getStaticPaths End
