const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/route');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/products', productRoute);

// app.get("/", (req, res) => {
//     res.send("Hello from API server");
// });

mongoose.connect("mongodb+srv://phurpawangchuk20:WbAYAnfpLtNhejQw@cluster0.e47qdme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB Atlas");
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed:", error.message);
    });
