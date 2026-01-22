const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "Headphones",
    price: 150,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

function Products() {
  return (
    <div className="page">
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="card product-card">
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
