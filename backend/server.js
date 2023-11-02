const app = require("./app")
const mongoose = require('mongoose');

const dotenv = require("dotenv");
//config
dotenv.config({path:"backend/config/config.env"})

//connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce').then(()=>console.log("DataBase Connected"))
.catch((e) => console.log(e));

app.listen(process.env.PORT, ()=>{

    console.log(`Server is working on http://localhost: ${process.env.PORT}`)

})