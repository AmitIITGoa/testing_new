
const  express =  require("express")

const router =  express.Router() ;

const  menu =  require('../model/menu.js') ;


router.get('/' , async (req ,  res)=>{
    const  data  =  await  menu.find() ;
    res.status(201).json(data) ;

}) ;

router.post('/' , async (req ,  res)=>{
    try{
        const  data  =  req.body ;
        const  newmenu =  new menu(data) ;
        const  sv =  await  newmenu.save() ;

        res.status(201).json(sv) ;
    } 
    catch (error){
        res.status(500).json(error) ;
    }
}) ;


router.get('/:nam', async (req, res) => {
    try {
        const nenu = req.params.nam;

        const data = await menu.find({ name: nenu });

        console.log("ok", nenu); 

        res.status(200).json(data); 

    } catch (error) {
        
        res.status(500).send("An error occurred"); 
    }
});

router.put('/:id' ,  async (req ,  res) => {
    try {
        const personid =  req.params.id ;
        const  data =  req.body ;
        const  responces =  await  menu.findByIdAndUpdate(personid ,  data) ;
        if(!responces){
            res.send("invalid  id ") ;
        }
        res.status(200).json(responces) ;
  

    }
    catch(error){
        res.status(501).json({erro : "error come "}) ;
    }
});


router.delete('/:id' ,  async(req ,  res)=>{
    try{
        const  menuid =  req.params.id ;
        const  responces =  await menu.findByIdAndRemove(menuid) ;
        if(!responces){
            res.send("id  is  not found  ") ;

        }
        res.send("data  is  deleted ") ;
    }
    catch(error){
        res.status(501).send("it  give error ") ;
    }
}) ;





module.exports =  router ;