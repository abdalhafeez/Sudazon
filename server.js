const dotenv = require("dotenv").config()
 const helmet = require("helmet")
const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require("./config/connectDB")
connectDB()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use("/api/users", require("./routes/usersRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/products", require("./routes/productsRoutes"))
app.use("/api/orders", require("./routes/ordersRoutes"))
app.use("/api/cart", require("./routes/cartRoutes"))
  if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Right before your app.listen(), add this:
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  }
const PORT = process.env.PORT || 500;
app.listen(PORT, () => console.log("Server is running"));
