export default async function getAllPosts() {
  const res = await fetch("https://api.tablebackend.com/v1/rows/1dQucBaX5vjr", {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error(res.statusText);
  const posts = await res.json();
  return posts.data;
}
