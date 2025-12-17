import type { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";
import { notFound } from "next/navigation";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="post border rounded p-2">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });
  if (renderedPosts.length === 0)
    return (
      <div className="h-96 flex items-center justify-center">No Posts</div>
    );

  return <div className="space-y-2">{renderedPosts}</div>;
}
