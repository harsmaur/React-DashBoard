import mongoose from "mongoose";

const connectdb = async(db_url)=>{
    try {
        await mongoose.connect(db_url);
        console.log('Connetcted to DB')
        
    } catch (error) {
        console.log(error)
    }
}
export default connectdb;