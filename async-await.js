async function fetchData() {
  const url1 = "https://jsonplaceholder.typicode.com/posts/1";
  const url2 = "https://jsonplaceholder.typicode.com/posts/2";

  console.log("Fething data for url1");
  const res1 = await fetch(url1);
  const post1 = await res1.json();
  console.log("First post", post1);

  const res2 = await fetch(url2);
  const post2 = await res2.json();
  console.log("Second post", post2);
}
fetchData();

async function fetchUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("User ot Found");
    const user = await response.json();
    console.log("User", user);
  } catch (error) {
    console.log("error", error);
  }
}
fetchUser(3);
