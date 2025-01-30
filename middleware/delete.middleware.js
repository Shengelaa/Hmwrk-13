const { isValidObjectId } = require("mongoose");

const validateUser = (req,res,next) =>{
    const userId = req.headers["user-id"]

    if(!userId){
        return res.status(400).json({message:"user id is required"})
    }
    if(!isValidObjectId(userId)){
        return res.status(400).json({message:"invalid user id"})
    }
    next()
}

module.exports = validateUser