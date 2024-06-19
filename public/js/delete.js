const deleteUserAccount = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const response = await fetch("/api/user/quit", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/login`);
  } else {
    alert("Failed to delete User!");
  }
  // Above is our delete route to delete a users account completly
  // Note, make sure  model constarints are set to cascade or a constraint will stop the delete.
};

const deleteApp = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const job_id = event.target.parentNode.parentNode.parentNode.id;
  // Above, we get the job id we set in the handle bars templet.

  const response = await fetch("/api/user/dapp", {
    method: "DELETE",
    body: JSON.stringify({ job_id }),
    headers: { "Content-Type": "application/json" },
  });
  // Above, we pass that job Id through the body of the request.
  if (response.ok) {
    document.location.replace(`/`);
  } else {
    alert("Failed to delete Application!");
  }
};

const deleteJob = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const job_id = event.target.parentNode.parentNode.parentNode.id;

  const response = await fetch("/api/user/djob", {
    method: "DELETE",
    body: JSON.stringify({ job_id }),
    headers: { "Content-Type": "application/json" },
  });
  // Above, we pass that job Id through the body of the request.
  if (response.ok) {
    document.location.replace(`/employer`);
  } else {
    alert("Failed to delete Application!");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#deleteBTN")
    .addEventListener("click", deleteUserAccount);

  const deleteAppBTN = document.querySelectorAll("#deleteApp");

  if (deleteAppBTN.length > 0) {
    deleteAppBTN.forEach((btn) => {
      btn.addEventListener("click", deleteApp);
    });
  }

  const deleteJobBTN = document.querySelectorAll("#eDeleteJob");

  if (deleteJobBTN.length > 0) {
    deleteJobBTN.forEach((btn) => {
      btn.addEventListener("click", deleteJob);
    });
  }
});
