const deleteJobPost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const pathArray = window.location.pathname.split("/");
  const job_id = pathArray[pathArray.length - 1];
  const commentUserID = event.target.parentNode.id;
  const commentId = event.target.parentNode.dataset.id;

  // Above, we we get the comment user id the comment id and the job id

  const response = await fetch("/api/comment/delete", {
    method: "DELETE",
    body: JSON.stringify({ commentUserID, job_id, commentId }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/api/comment/comments/${job_id}`);
  } else if (response.status === 404) {
    alert("Cannot delete other user Comments");
  } else {
    alert("Failed to delete Comment!");
  }
  // Above we pass our variabels to the body of the request.
  // if the request is succesful it will direct us back to the comment page for applicants.
};

document.addEventListener("DOMContentLoaded", function () {
  const deleteBTN = document.querySelectorAll("#deleteBTN");

  if (deleteBTN.length > 0) {
    deleteBTN.forEach((btn) => {
      btn.addEventListener("click", deleteJobPost);
    });
  }
});
// Above is our event listener to check if any buttons exist.
