import mongoose from "mongoose";
import User from "../models/usersModel.js";

const connectDB = async ()=> {
    try{
        const databasename = "demomern";
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databasename}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`Database connected : ${con.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

User()

export default connectDB