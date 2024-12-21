// Fetch and display products
document.getElementById("load-products").addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => displayProducts(products))
        .catch((error) => console.error("Error fetching products:", error));
});

function displayProducts(products) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; // Clear previous content
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating.rate}</p>
            <button onclick='addToWishlist(${JSON.stringify(product)})'>Wishlist</button>
        `;

        grid.appendChild(card);
    });
}

// Add product to wishlist
function addToWishlist(product) {
    const wishlist = JSON.parse(localStorage.getItem("wishlistedProducts")) || [];
    wishlist.push(product);
    localStorage.setItem("wishlistedProducts", JSON.stringify(wishlist));
    alert("Product added to Wishlist!");
}
