const createJobHandler = async (jobData) => {
    try {
      const response = await fetch('/api/user/employers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobData)
      });
  
      if (response.ok) {
        // if successful job creation, redirect to homepage
        document.location.replace("/employer");
      } else {
        console.error('Failed to create job:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to create job:', error.message);
    }
  };
  
//   selecting job creation form
  const jobForm = document.querySelector('.commentForm');
  

  jobForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // all the inputs for creating a job
    const jobData = {
      name: jobForm.querySelector('#companyName').value,
      title: jobForm.querySelector('#positionTitle').value,
      salary: jobForm.querySelector('#salary').value,
      location: jobForm.querySelector('#location').value,
      description: jobForm.querySelector('#position').value,
      responsibilites: jobForm.querySelector('#responsibilities').value,
      qualifications: jobForm.querySelector('#qualifications').value,
      schedule: jobForm.querySelector('#schedule').value
    };
  
    await createJobHandler(jobData);
  });
  