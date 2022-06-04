const express = require("express")
const app = express()
const connectDB = require("./config/connectDB")
connectDB()
app.use(express.json())
app.use("/api/auth", require("./routes/auth"))
app.use("/api/products", require("./routes/productsRoutes"))
app.listen(5000, () => console.log("Server is running"))
       

