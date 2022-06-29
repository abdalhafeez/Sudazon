const dotenv = require("dotenv").config()
var colors = require("colors/safe");
const helmet = require("helmet");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/connectDB");
connectDB();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/uploads", require("./routes/uploadRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "client", "build")));
// Production setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(colors.rainbow("Server is running on PORT: " + PORT))
);

// app.use((req, res, next) => {
//   const whitelist = process.env.HITELIST?.split(" ");
//   const origin = req.headers.origin ? req.headers.origin : req.referer;

//   if (whitelist.includes(origin)) {
//     res.setHeader("Access -Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods, 'GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-HeadersContent-Type", "Authorization");
//   res.header("Acces5-Control-Allow-Credentials", true);
//   return next();
// });
