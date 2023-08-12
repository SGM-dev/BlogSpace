fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    let html = ``;
    postArr.forEach((element) => {
      html += `
        <div class="post">
          <h3 class="post-title">${element.title}</h4>
          <p class="post-content">${element.body}</sp>
        </div>
        <hr />`;
    });
    document.getElementById("blog-section").innerHTML += html;
  });
