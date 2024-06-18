const commentJobPost = async  (event) => {
    event.preventDefault();
    event.stopPropagation();
  
  
   
    const comment_text =  document.querySelector("#comment_text").value.trim();
    const pathArray = window.location.pathname.split('/');
    const job_id = pathArray[pathArray.indexOf('employer') + 1];

    
  
    
    
    if (!comment_text) {
      console.log("No comment to Add!")
    }
  
  
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
  
};


document.addEventListener("DOMContentLoaded", function () {
    
  
    document.querySelector("#commentBTN").addEventListener("click", commentJobPost);
});