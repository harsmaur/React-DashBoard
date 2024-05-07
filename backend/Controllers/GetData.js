import jsonModel from "../Models/jsondata.js";

export const getAllData = async(req, res)=>{
    try {
        const allData = await jsonModel.find();
        res.status(200).json(allData);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}