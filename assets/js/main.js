//fetch post from api
function fetchProducts() {
    fetch('https://jsonplaceholder.typicode.com/posts') // Adjust the URL to your actual API endpoint
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
          const productElement = createProductElement(product);
          container.appendChild(productElement);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  function createProductElement(product) {
    const article = document.createElement('article');
    article.className = 'flex flex-col dark:bg-gray-900';

    const h3 = document.createElement('h3');
    h3.className = 'flex-1 py-2 text-lg font-semibold leadi';
    h3.textContent = product.title;
    
    const div = document.createElement('div');
    div.className = 'flex flex-col flex-1 p-6';

    const userId = document.createElement('p');
  userId.textContent = `User ID: ${product.userId}`;
  div.appendChild(userId);

  const body = document.createElement('p');
  body.textContent = product.body;
  div.appendChild(body);

  const deleteButton = document.createElement('button');
    deleteButton.className = 'bg-red-500 text-white p-2 rounded';
    deleteButton.style.width = '40px'; // Making the button square
    deleteButton.style.height = '40px';
    deleteButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    deleteButton.onclick = function() { deletePost(product.id); };
    
    const updateButton = document.createElement('button');
updateButton.className = 'bg-blue-500 text-white p-2 rounded ml-2';
updateButton.textContent = 'Update';
updateButton.onclick = function() {
    window.location.href = `update_post_view.php?postId=${product.id}`;
};
    

    div.appendChild(h3);
    article.appendChild(div);
    article.appendChild(deleteButton);
    div.appendChild(updateButton);
    return article;
  }

  // Call the function to fetch and display products
  fetchProducts();


//add posts and multi add
document.querySelectorAll('.postForm').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert('Post added successfully');
            this.reset();
        })
        .catch(error => console.error('Error:', error));
    });
});


// Function to handle post deletion
function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log("Post deleted successfully", postId);
        } else {
            console.error("Failed to delete post", postId);
        }
    })
    .catch(error => console.error('Error:', error));
}


// fetching post for update
function fetchPostForUpdate(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('postId').value = post.id;
            document.getElementById('userId').value = post.userId;
            document.getElementById('title').value = post.title;
            document.getElementById('body').value = post.body;
        })
        .catch(error => console.error('Error:', error));
}


// updating posts from
document.getElementById('updatePostForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postId = document.getElementById('postId').value;
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        alert('Post updated successfully');
    })
    .catch(error => console.error('Error:', error));
});







