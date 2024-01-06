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
    
    const img = document.createElement('img');
    img.className = 'object-cover w-full h-52 dark:bg-gray-500';
    img.src = 'https://source.unsplash.com/200x200/?fashion'; // Replace with your product image URL
    img.alt = product.title; // Replace 'title' with the actual property name for image alt text

    const div = document.createElement('div');
    div.className = 'flex flex-col flex-1 p-6';

    const h3 = document.createElement('h3');
    h3.className = 'flex-1 py-2 text-lg font-semibold leadi';
    h3.textContent = product.title; // Replace 'title' with the actual property name

    const userId = document.createElement('p');
  userId.textContent = `User ID: ${product.userId}`;
  div.appendChild(userId);

  const body = document.createElement('p');
  body.textContent = product.body;
  div.appendChild(body);

    // Add more elements as needed

    div.appendChild(h3);
    article.appendChild(img);
    article.appendChild(div);
    return article;
  }

  // Call the function to fetch and display products
  fetchProducts();