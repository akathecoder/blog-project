import Head from "next/head";
import Layout from "../components/Layout";
import PostsList from "../components/PostsList";
import SectionName from "../components/SectionName";
import * as postsData from "../lib/posts.json";

export default function Home() {
  // console.log(postsData.default);

  return (
    <Layout>
      <div className="grid grid-cols-3">
        <div className="col-span-2 ">
          <SectionName name="Latest" />
          <PostsList
            posts={postsData.default}
          />
        </div>
      </div>
    </Layout>
  );
}
