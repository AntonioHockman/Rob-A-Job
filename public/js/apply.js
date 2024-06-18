const applyJobPost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const pathArray = window.location.pathname.split("/");
  const job_id = pathArray[pathArray.length - 1];
  // Above, we get the job id

  const response = await fetch("/api/user/apply", {
    method: "POST",
    body: JSON.stringify({ job_id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/`);
  } else if (response.status === 400) {
    alert("User is already an applicant for this job.");
  } else {
    alert("Failed to Apply.");
  }

  // Above, we pass  and job id to our api route.*/
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#applyBTN").addEventListener("click", applyJobPost);
});

// Above is our event listener!
