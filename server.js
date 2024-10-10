const  express  =  require("express") ;

const app =  express() ;

const  bodypar = require('body-parser') ;

app.use(bodypar.json()) ;

const  db =  require('./db') ;


//  us it correctly 
const menuinfo =  require('./router/menu.js') ;

app.use('/menu' ,  menuinfo);

const personinfo   =  require('./router/person.js') ;

app.use('/person' ,  personinfo);


app.listen(3000 , ()=>{
    console.log("server  start") ;
}) ;



