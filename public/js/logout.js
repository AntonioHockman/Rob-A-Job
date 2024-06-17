



const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
};


// Above, is our log out function that is a api call to our log out route.
// The route sends us back to the log in page if the response is good.












document.addEventListener("DOMContentLoaded", function () {
   
  
    document.querySelector("#logout").addEventListener("click", logout);
});

// Above, we wait for our document to load then add the event listener to the log out link. 
  