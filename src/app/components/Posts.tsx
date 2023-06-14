import Link from "next/link";

interface PostsProps {
  promise: Promise<Post[]>
}

export default async function Posts({ promise }: PostsProps) {
  const posts = await promise;

  return (
    <div>
      {posts ?
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/news/${post.id}`}>
                {post.title}
              </Link>
            </li>))}
        </ul>
        : (
          <h3>No posts to display</h3>
        )}
    </div>
  )
}