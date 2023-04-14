const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = document.querySelector('.new-comment-form').dataset.postid;
    const comment_text = document.querySelector('#comment-text').ariaValueMax.trim();

    if (post_id && comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      document.location.reload();

    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);