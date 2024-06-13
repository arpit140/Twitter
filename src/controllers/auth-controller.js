import UserService from "../services/user-service.js";

const userService = new UserService()

export const signup = async (req,res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            success: true,
            message: "Succefully created a new user",
            data: response,
            error: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: error
        })
        
    }
}

export const login = async(req, res) => {
    try {
        const user  = await userService.getUserByEmail(req.body.email)

        
        if(!user){
            return res.status(401).json({
                message: "No user found",
                success: false,
                
            })
        }
        if(!user.comparePassword(req.body.password)){
            console.log("here")
            return res.status(401).json({
                message: "Incorrect Password",
                success: false,
                
            })
        }
        const token = user.genJWT()
        return res.status(200).json({
            success: true,
            message: 'succesfully logged in',
            data: token,
            err: {}
        })
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: {},
            error: error
        })
    }
}