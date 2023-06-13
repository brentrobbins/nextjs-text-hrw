import getAllPosts from "@/lib/getAllPosts";
// import Link from "next/link";

export default async function Home() {
  const postsData: Promise<Post[]> = getAllPosts()

  const posts = await postsData




  return (

    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Human Rights Watch</a>
        </h1>
        {posts &&
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}
                {/* <Link href={`/posts/${post.id}`}>
                  {post.title}
                </Link> */}
              </li>))}
          </ul>
        }
      </main>
    </  div>
  )
}
