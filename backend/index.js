const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.get("/", (req, res) => {
  res.send("ECommerceStore Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
