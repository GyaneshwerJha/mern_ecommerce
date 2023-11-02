const app = require("./app")
const mongoose = require('mongoose');

const dotenv = require("dotenv");
//config
dotenv.config({ path: "backend/config/config.env" })

//connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce').then(() => console.log("DataBase Connected"))
    .catch((e) => console.log(e));

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
const server = app.listen(process.env.PORT, () => {

    console.log(`Server is working on http://localhost: ${process.env.PORT}`)

})

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});