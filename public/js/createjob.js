const createJobHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();


  
    const company_name = document.querySelector("#companyName").value.trim()
    const position_title = document.querySelector("#positionTitle").value.trim();
    const salary = document.querySelector("#salary").value.trim();
    const location = document.querySelector("#location").value.trim();
    const description = document.querySelector("#description").value.trim();
    const responsibilities  = document.querySelector("#responsibilities").value.trim();
    const qualifications= document.querySelector("#qualifications").value.trim();
    const schedule_info = document.querySelector("#schedule").value.trim();
    const alertDiv = document.querySelector(".alert4")

    // Above, we get all our entries from our form.



    if(!company_name || !position_title || !salary || !location || !description || !responsibilities  || !qualifications || !schedule_info){
      const h3EL = document.createElement("h3");
      h3EL.classList.add( "emergency" ,"alert");
      h3EL.textContent = "Please Fill All Entries!";
  
      alertDiv.append(h3EL);
  
      setTimeout(() => {
        h3EL.remove(); // Removes the alert element after 5 seconds.
      }, 2000);
    }
    // Above is our handler if any entry is missing 







  

  const response = await fetch("/api/user/newjob", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({company_name,position_title,salary,location,description,responsibilities,qualifications,schedule_info}),
  });

  if (response.ok) {
    document.location.replace("/employer");
  } else {
    alert("Failed to make a new Job.");
  }
    // Above we pass all the entries to the body of the request and if the request passes we diresct to the employer home page.
}







document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelector("#createJobBTN").addEventListener("click", createJobHandler);
});

// Above, is our event listener .
