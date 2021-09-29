const express= require("express")
require('dotenv').config()
const app= express()
app.use(express.json())
const PORT = process.env.PORT
app.get('/',(req,res) =>{
    res.json('Wellcome to Shopen backend!')
})
app.listen(PORT, ()=>{
    console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`)
})