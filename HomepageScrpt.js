const homepageComment = document.getElementById('homepage-comment');
const commentsContainer = document.getElementById('homepage-comment'); // Correctly define commentsContainer
let comments = [];

//validate form


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
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;
    const comment = document.getElementById('comment').value.trim();

    if (name && comment && email && rating) {
        comments.push({ name, email, rating, text: comment });
        displayComments();
        document.getElementById('homepage-guest-book-form').reset();
    }
});

displayComments();
