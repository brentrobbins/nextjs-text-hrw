import { Suspense } from "react";
import Post from "@/app/components/Post";
import getPost from "@/lib/getPost"
import getAllPosts from "@/lib/getAllPosts";

type Props = {
  params: {
    id: string;
  }
}

export default async function page({ params: { id } }: Props) {
  const postData: Promise<Post> = getPost(id)

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Post promise={postData} />
    </Suspense>
  )
}

export async function generateStaticParams() {
  const postsData: Promise<Post[]> = getAllPosts()
  const posts = await postsData

  return posts.map((post) => ({
    id: post.id.toString()
  }))
}