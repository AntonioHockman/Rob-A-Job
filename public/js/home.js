

const commentJobPost = async  (event) => {
  event.preventDefault();
  event.stopPropagation();


  const job_id = event.target.parentNode.parentNode.parentNode.id; 
  const parentElement = event.target.parentNode
  const firstChildElement = parentElement.firstElementChild;
  const comment_text = firstChildElement.value

  // Above, we get the the job id from the event target and the comment text from the sibling of the event target.
  
  if (!comment_text) {
    console.log("No comment to Add!")
  }

   // Above, we check if comment tet exists 
  const response = await fetch("/api/user/comment", {
    method: "POST",
    body: JSON.stringify({ comment_text, job_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/api/comment/comments/${job_id}`);
  } else {
    alert("Failed to Post Comment.");
  }

      // Above we pass the the comment text and job id to the body and if the response is good we direcr the user to the employer comment page.


};









document.addEventListener("DOMContentLoaded", function () {
  const submitbtns = document.querySelectorAll(".submitBTN ");
  

  if (submitbtns.length > 0) {
    submitbtns.forEach((btn) => {
      btn.addEventListener("click", commentJobPost);
    });
  };
});
