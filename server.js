const  express  =  require("express") ;

require('dotenv').config() ;

const app =  express() ;

const  bodypar = require('body-parser') ;

app.use(bodypar.json()) ;

const  db =  require('./db') ;


//  us it correctly 
const menuinfo =  require('./router/menu.js') ;

app.use('/menu' ,  menuinfo);

const personinfo   =  require('./router/person.js') ;

app.use('/person' ,  personinfo);

const PORT =  process.env.PORT ||  3000 ;

app.listen(PORT , ()=>{
    console.log("server  start") ;
}) ;



