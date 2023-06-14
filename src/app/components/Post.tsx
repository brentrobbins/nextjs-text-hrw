import { notFound } from "next/navigation";
import { format } from "date-fns";


interface PostsProps {
  promise: Promise<Post>
}

export default async function Post({ promise }: PostsProps) {
  const post = await promise;
  if (!post?.id) {
    return notFound()
  }


  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>{format(post.date, "yyyy-MM-dd")}</em></p>
      <p>{post.body}</p>
    </div>
  )
}