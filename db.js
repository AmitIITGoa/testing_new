const mongoose =  require ("mongoose") ;

const  mgurl = 'mongodb://localhost:27017/hotels' 


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