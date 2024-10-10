const  mongoose =  require("mongoose") ;

const  menuitem =  new mongoose.Schema({
    name: {
        type : "string" ,
        require :  true ,
    },
    quantity :{
        type : "number" ,
        require :  true ,
    }
}) ;


const  menu =  mongoose.model("menu" ,  menuitem) ;

module.exports =  menu ;
