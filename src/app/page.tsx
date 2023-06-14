import { Suspense } from "react";
import Posts from "@/app/components/Posts";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
  const postsData: Promise<Post[]> = getAllPosts()

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Posts promise={postsData} />
    </Suspense>
  )
}
