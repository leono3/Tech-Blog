// Comment HTML elements
const commentInputEl = document.getElementById("comment-input");
const commentBtn = document.getElementById("comment-btn");
const blogId = commentBtn.dataset.blogid;

commentBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  const comment = commentInputEl.value;

  if (comment.trim() === 0) {
    return alert("Enter a comment");
  }

  try {
    // fetch to post new comment
    const response = await fetch(`/api/comment/${blogId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });
    await response.json();
    if (response.ok) window.location.reload();
  } catch (error) {
    console.log(error);
  }
});

// Edit Comment Section
let commentId;
let currentCommentText;

// Comment edit modal HTML elements
const modalCommentEl = document.getElementById("commentText-input");
const saveCommentBtn = document.getElementById("saveComment-btn");
const deleteCommentBtn = document.getElementById("deleteComment-btn");
const editCommentBtn = document.querySelectorAll(".editComment-btn");

editCommentBtn?.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    // Get id of comment to be edited
    commentId = event.target.dataset.commentid;
    // Get text content of this comment
    currentCommentText =
      button.parentNode.parentNode.children[1].children[0].textContent;
    // Set edit comment Modal's text to reflect current Blog text
    modalCommentEl.value = currentCommentText;
  });
});

saveCommentBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const comment = modalCommentEl.value;

  try {
    const response = await fetch(`/api/comment/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });
    if (response.ok) window.location.reload();
  } catch (error) {
    console.log(error);
  }
});

deleteCommentBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`/api/comment/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) window.location.reload();
  } catch (error) {
    console.log(error);
  }
});
