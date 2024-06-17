const handleCommentSubmit = async (event) => {
    event.preventDefault();
  
    // find comment input
    const commentText = document.querySelector('commentText').value.trim();
  
    if (!commentText) {
      alert('Please enter a comment.');
      return;
    }
  
    
    try {
      const response = await fetch('/api/comment/:id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment_text: commentText }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // reset input area
      document.querySelector('commentText').value = '';
      
    // reload page after adding comment
      window.location.reload();
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again later.');
    }
  };
  
  // event listener for form submission
  document.querySelector('commentButton').addEventListener('submit', handleCommentSubmit);
  