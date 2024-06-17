

const commentJobPost = async  (event) => {
    event.preventDefault();
    event.stopPropagation();
  
  
    const job_id = event.target.parentNode.parentNode.parentNode.id; 
    const parentElement = event.target.parentNode
    const firstChildElement = parentElement.firstElementChild;
    const comment_text = firstChildElement.value
  
    
    
    if (!comment_text) {
      console.log("No comment to Add!")
    }
  
  
    const response = await fetch("/api/user/comment", {
      method: "POST",
      body: JSON.stringify({ comment_text, job_id }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace(`api/comment/employer/comments/${job_id}`);
    } else {
      alert("Failed to Post Comment.");
    }
  
};
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const submitbtns = document.querySelectorAll(".submitBTN ");
    
  
    if (submitbtns.length > 0) {
      submitbtns.forEach((btn) => {
        btn.addEventListener("click", commentJobPost);
      });
    };
  });