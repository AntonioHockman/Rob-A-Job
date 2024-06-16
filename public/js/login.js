const loginFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const userType = document.querySelector("#userType").value;
  const alertDiv = document.querySelector("#alert");

  if (!email || !password || !userType) {
    const h3EL = document.createElement("h3");
    h3EL.classList.add("alert");
    h3EL.textContent = "Please Fill All Entries!";

    alertDiv.append(h3EL);

    setTimeout(() => {
      h3EL.remove(); // Removes the alert element after 5 seconds
    }, 2000);
  }

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




  /*if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }*/
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
  document
    .querySelector("#logInBtn")
    .addEventListener("click", loginFormHandler);

  document.querySelector("#iconSpan").addEventListener("click", showPassword);
});
