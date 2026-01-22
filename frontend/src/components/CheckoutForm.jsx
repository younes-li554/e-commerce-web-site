import { useState } from "react";
import axios from "axios";

function CheckoutForm() {
  const [formData, setFormData] = useState({ name: "", email: "", address: "", paymentMethod: "Credit Card" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/orders", formData);
      alert(res.data.message);
      setFormData({ name: "", email: "", address: "", paymentMethod: "Credit Card" });
    } catch (error) {
      alert("Failed to place order");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Payment Method:</label>
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
          <option value="Credit Card">Credit Card</option>
          <option value="Paypal">Paypal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;
