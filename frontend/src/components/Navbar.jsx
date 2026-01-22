import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="main-navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">MyStore</Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
