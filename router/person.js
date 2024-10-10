
const  express =  require("express") ;

const  router =  express.Router() ;

Person =  require('../model/person.js') ;


router.post('/' , async (req ,  res)=>{
    try{
        const data  =  req.body  ;
        const newperson =  new  Person(data) ; // it  is  wait   it  data  go in  newperson  
        
        const  saveperson =  await  newperson.save() ; //  wait  still  save  the  data in the  mngo  

        console.log("data  save " ,  saveperson) ;
        // console.log(saveperson.name) ;
        res.status(201).json(saveperson);         

    }
    catch(error){
        res.status(500).json({error : "internal  error  "}) ;
    }
});


//  this is   use to  creat the differences  scheman  and then save  the  shcema  in  the  database mongo db  server  

router.get('/' ,  async (req ,  res)=>{
    try{
        const  data  =  await Person.find() ; //  fetching the data  from the server  
        //  use  the await when  we  have  to  wait  for the data still  getting  the  data in it 
        console.log(data) ;
        res.status(201).json(data) ;
    }
    catch (err) {
        res.status(500).send(error) ;
    }
});



module.exports =  router ;