const express = require("express")
const app = express()
const connectDB = require("./config/connectDB")
connectDB()
 
https: app.use(express.json())
app.use("/api/users", require("./routes/usersRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/products", require("./routes/productsRoutes"))
app.use("/api/orders", require("./routes/ordersRoutes"))

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")))

//   app.get("*", (req, res) => {
//     app.use(
//       express.static(path.resolve(__dirname, "client", "build", "index.html"))
//     )
//   })
// }

app.listen(5000, () => console.log("Server is running"))
       

