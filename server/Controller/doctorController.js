const { response } = require("express")
const doctorModel = require("../Model/doctorModel")

const doctorRegistration = async (req,res)=>{
 const {name,contact,email,address,specialization,city,password} = req.body

try {
    doctorModel.create({
    name:name,
    contact:contact,
    email:email,
    city:city,
    password:password,
    address:address,
    specialization:specialization
   })

   res.status(200).send({msg:"doctor successfully registered !"})
} catch (error) {

   res.status(400).send({msg:"database not working...!"})
  
}
}
const doctorList = async (req,res)=>{
   try {
   const responce = await doctorModel.find()
   res.status(200).send(responce)
      
   } catch (error) {
      res.status(400).send({msg:"data not found in DB "})
   }

}

module.exports = {
  doctorRegistration,
  doctorList
}