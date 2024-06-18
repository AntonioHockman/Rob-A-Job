const updateJobHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const company_name = document.querySelector("#companyName").value.trim();
  const position_title = document.querySelector("#positionTitle").value.trim();
  const salary = document.querySelector("#salary").value.trim();
  const location = document.querySelector("#location").value.trim();
  const description = document.querySelector("#description").value.trim();
  const responsibilities = document.querySelector("#responsibilities").value.trim();
  const qualifications = document.querySelector("#qualifications").value.trim();
  const schedule_info = document.querySelector("#schedule").value.trim();
  const pathArray = window.location.pathname.split('/');
  const job_id = pathArray[pathArray.indexOf('mjob') + 1];

  console.log(job_id);



  const response = await fetch("/api/user/job", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company_name,
      position_title,
      salary,
      location,
      description,
      responsibilities,
      qualifications,
      schedule_info,
      job_id
    }),
  });

  if (response.ok) {
    document.location.replace("/employer");
  } else {
    alert("Failed to Update Job.");
  }
};


document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#updateJobBTN")
    .addEventListener("click", updateJobHandler);
});
