const commentJobPost = async  (event) => {
    event.preventDefault();
    event.stopPropagation();
  
  
   
    const comment_text =  document.querySelector("#comment_text").value.trim();
    const pathArray = window.location.pathname.split('/');
    const job_id = pathArray[pathArray.indexOf('employer') + 1];

    // ABove, we get the comment text and then the job id from the window location 
  
    
    
    if (!comment_text) {
      console.log("No comment to Add!")
    }
  
    // Above, we check if comment text exist.
    const response = await fetch("/api/user/comment", {
      method: "POST",
      body: JSON.stringify({ comment_text, job_id }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace(`/api/comment/employer/comments/${job_id}`);
    } else {
      alert("Failed to Post Comment.");
    }
   // ABove, we pass the the comment text and job id to the request body 
};


document.addEventListener("DOMContentLoaded", function () {
    
  
    document.querySelector("#commentBTN").addEventListener("click", commentJobPost);
});

// Above is our event listener 