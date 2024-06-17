const loginFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const first_name = document.querySelector("#firstName").value.trim();
  const last_name = document.querySelector("#lastName").value.trim();
  const userType = document.querySelector("#userType").value;
  const alertDiv = document.querySelector("#alert");
  // Above, I get all the input fields from the form

  if (!email || !password || !userType || !first_name || !last_name) {
    const h5EL = document.createElement("h5");
    h5EL.classList.add("alert", "alert2");
    h5EL.textContent = "Please Fill All Entries!";

    alertDiv.append(h5EL);

    setTimeout(() => {
      h5EL.remove(); // Removes the alert element after 5 seconds
    }, 2000);
  }

  // Above, checks if the all my input fields exist

  if (password.length < 8) {
    const h5EL = document.createElement("h3");
    h5EL.classList.add("alert", "alert2");
    h5EL.textContent = "Password length must be atleast 8!";

    alertDiv.append(h5EL);

    setTimeout(() => {
      h5EL.remove(); // Removes the alert element after 5 seconds
    }, 2000);
  }

  // Above, checks if the passord length is atleast 8 charc.

  if (userType === "Employer") {
    const response = await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/employer");
    } else if (response.status === 400) {
      const h5EL = document.createElement("h3");
      h5EL.classList.add("alert", "alert2");
      h5EL.textContent = " User account already exists!";

      alertDiv.append(h5EL);

      setTimeout(() => {
        h5EL.remove(); // Removes the alert element after 5 seconds
      }, 2000);
      // Above, is a response if a user account already exists
    } else {
      alert("Failed to create account.");
    }
  }

  if (userType === "Applicant") {
    const response = await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (response.status === 400) {
      const h5EL = document.createElement("h3");
      h5EL.classList.add("alert", "alert2");
      h5EL.textContent = " User account already exists!";

      alertDiv.append(h5EL);

      setTimeout(() => {
        h5EL.remove(); // Removes the alert element after 5 seconds
      }, 2000);
      // Above, is a response if a user account already exists
    } else {
      alert("Failed to create account.");
    }

    // Above, is if the user signs in as a applicant.
  }
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

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#iconSpan").addEventListener("click", showPassword);

  document
    .querySelector("#signUpBtn")
    .addEventListener("click", loginFormHandler);
});

// Above, we wait till the document is loaded before adding any of our listeners.
