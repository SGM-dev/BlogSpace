fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    for (let post of postsArr) {
      html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
  });

document.getElementById("new-post").addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const data = {
    title: postTitle.value,
    body: postBody.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
