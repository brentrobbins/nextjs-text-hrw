export default async function getPost(id: string) {
  const res = await fetch(
    `https://api.tablebackend.com/v1/singleRow/1dQucBaX5vjr/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post;
}
