const  mongoose  =  require('mongoose') ;

const  person_detail=  new mongoose.Schema({
    name: {
        type : "string" ,
        require :  true ,
    }
}) ;



const Person =  mongoose.model("person" ,  person_detail) ; //  creat  the model to  input  some thing from  the use  in the given formate  


module.exports =  Person ;


//  kiso crud  operation  bolte  he  