
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{

    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("db ecoonection successful")
    })

    .catch((error)=>{
        console.log("issues in db Connnection");
        console.error(error.message);
       process.exit(1);
    })
}
module.exports=dbConnect;