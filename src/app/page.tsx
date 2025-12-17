import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@/components/nextui-org-components";
export const dynamic = "force-dynamic"; //to make sure the comments and posts added tot he home page
export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <div className="col-span-3 md:col-span-4 ">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="col-span-2 md:col-span-1 border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
