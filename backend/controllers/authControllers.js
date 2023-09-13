const adminModel=require("../models/adminModel")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const {responseReturn}=require("../utiles/response")
const {createToken}=require("../utiles/tokenCreate")
class authControllers {
    admin_login = async(req,res)=>{
        const {email,password}=req.body;
        try {
            const admin = await adminModel.findOne({email}).select('+password');
            if (admin) {
                const match=await bcrypt.compare(password, admin.password)
                if (match) {
                    const token =await createToken({
                        id:admin.id,
                        role:admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires: new Date(Date.now()+ 7*24*60*60*1000)
                    })
                    responseReturn(res,200,{token, message : 'login success'})
                } else {
                    responseReturn(res,400, {error: "email or password incorrect"})
                }
            } else {
                responseReturn(res,400, {error:"email not found"})
            }
        } catch (error) {
            responseReturn(res,500, {error: error.message})
        }
    }
}
module.exports= new authControllers()