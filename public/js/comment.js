const commentJobPost = async  (event) => {
  event.preventDefault();
  event.stopPropagation();


 
  const comment_text =  document.querySelector("#comment_text").value.trim();
  const pathArray = window.location.pathname.split('/');
  const job_id = pathArray[pathArray.length - 1];

  // Above, we get the job id from the location of the window

  
  
  if (!comment_text) {
    console.log("No comment to Add!")
  }


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

  // Above, we pass the comment text and job id to our api route.

};


document.addEventListener("DOMContentLoaded", function () {
  

  document.querySelector("#commentBTN").addEventListener("click", commentJobPost);
});

// Above is our event listener.