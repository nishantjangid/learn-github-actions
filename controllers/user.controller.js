import users from "../data.json" assert { type: "json" };
const getUsers = async (req,res) => {
    try{
        let response = users;
        return res.status(200).json({data:response});
    }catch(err){
        return res.status(500).json({
            message:err.message
        })
    }
}

export {
    getUsers
}