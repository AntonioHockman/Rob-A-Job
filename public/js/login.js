const loginFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const userType = document.querySelector("#userType").value;
  const alertDiv = document.querySelector("#alert");

  // Above, we grap all our input variables

  if (!email || !password || !userType) {
    const h3EL = document.createElement("h3");
    h3EL.classList.add("alert");
    h3EL.textContent = "Please Fill All Entries!";

    alertDiv.append(h3EL);

    setTimeout(() => {
      h3EL.remove(); // Removes the alert element after 5 seconds.
    }, 2000);
  }

  // Above, we chack if all our selected elements exist.

  if (userType === "Employer") {
    const response = await fetch("/login/user", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/employer");
    } else {
      alert("Failed to log in.");
    }
  }
  // Above, is to log in if the user chooses Employer to log in.

  if (userType === "Applicant") {
    const response = await fetch("/login/user", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }

  // Above, is to log in if the user chooses Applicant to log in.
};

function showPassword() {
  const iconSpan = document.querySelector("#iconSpan");
  const passwordInput = document.querySelector("#password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconSpan.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Change icon to show crossed eye
  } else {
    passwordInput.type = "password";
    iconSpan.innerHTML = '<i class="fas fa-eye"></i>'; // Change icon to show regular eye
  }
}
// Above, is a function to show the user password.

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#logInBtn")
    .addEventListener("click", loginFormHandler);

  document.querySelector("#iconSpan").addEventListener("click", showPassword);
});

// Above, we wait till the document is loaded before adding any of our listeners.
