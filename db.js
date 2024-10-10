const mongoose =  require ("mongoose") ;

const  mgurl = "mongodb+srv://amitshinde22042:Amit_422605@test.fcw3c.mongodb.net/"


mongoose.connect(mgurl , {
    useNewUrlParser : true ,
    useUnifiedTopology : true 
}) ;

const  db =  mongoose.connection ;

db.on("connected" , ()=>{
    console.log("connected  to  the  database ") ;
}) ;


db.on("disconnected" , ()=>{
    console.log("disconnected  to  the  database ") ;
}) ;

db.on("error " , ()=>{
    console.log("error  to  the  database ") ;
}) ;

//  expot the data  base  connection  then only  it  connected  


module.exports =  db ;