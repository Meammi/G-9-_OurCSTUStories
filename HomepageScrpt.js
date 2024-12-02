const homepageComment = document.getElementById('homepage-comment');
const commentsContainer = document.getElementById('homepage-comment'); // Correctly define commentsContainer
let comments = [];

//validate form
function validateForm(name, email, rating, comment) {
    if (name.length < 3 || name.length > 20) {
        alert('Username must be between 3 and 20 characters.');
        return false;
    }
    if (!name.match(/^[A-Za-z0-9]+$/)) {
        alert('Name must contain only letters and numbers.');
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!rating) {
        alert('Please select a rating.');
        return false;
    }

    if (comment.length < 10 || comment.length > 300) {
        alert('Comment must be between 10 and 300 characters.');
        return false;
    }

    return true;
}

//display star
function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

//display comments on the page
function displayComments() {
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-box');
        commentDiv.innerHTML = `
        <div class="homepage-comment">
            <p class="comment-name"><strong>${comment.name}</strong></p>
            <p class="comment-rating"><span class="comment-rating-star">${generateStars(comment.rating)}</span></p>
            <p>${comment.text}</p>
        </div>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}

// Handle form submission
document.getElementById('homepage-guest-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;
    const comment = document.getElementById('comment').value.trim();

    if (validateForm(name, email, rating, comment)) {
        comments.push({ name, email, rating, text: comment });

        displayComments();

        document.getElementById('homepage-guest-book-form').reset();

        const submitButton = document.querySelector('.homepage-form-submit');
        submitButton.disabled = true;
        setTimeout(() => submitButton.disabled = false, 3000);
    }
});

displayComments();

window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  }