const  express  =  require("express") ;

require('dotenv').config() ;



const  bodypar = require('body-parser') ;
const bcrypt = require('bcrypt');

const passport  =  require('passport') ;

const  localst =  require('passport-local').Strategy ;

const app =  express() ;
// const person =  require('./model/person') ;
app.use(bodypar.json()) ;

passport.use(new localst(async (username, password, done) => {
    try {
        console.log("receiver the credentials") ;
        const user = await Person.findOne({username:username }) ;
        if(!user){
            return done(null ,  false ,  {message : "incorrect  username  "}) ;
        }
        const isPasswordValid = password === user.password; //  it  take a  data  form  the  body  request  not  from  params  and query  
        console.log(user.password) ;
        if(isPasswordValid){
            return  done(null ,  user) ;
        }
        else{
            return done(null  , false ,  {message :  "incorrect  password"}) ;
        }
    } catch (err) {
        return done(err);
    }
}));

//  done is  the  call back  function  


app.use(passport.initialize());

// app.use(passport.session());


const  db =  require('./db') ;

const logfile = (req ,  res , next)=>{
    console.log(`[${new Date().toLocaleString()}] , request made to : ${req.originalUrl}`) ;
    next() ;
}

app.get('/' , passport.authenticate('local' ,  {session : false})   , (req ,  res)=>{
    console.log("welcome  to   my  world ") ;
    res.send("middleware  pass ") ;
})

app.use(logfile) ;

//  us it correctly 
const menuinfo =  require('./router/menu.js') ;

app.use('/menu' ,  menuinfo);

const personinfo   =  require('./router/person.js') ;

app.use('/person' ,  personinfo);

const PORT =  process.env.PORT ||  3000 ;

app.listen(PORT , ()=>{
    console.log("server  start") ;
}) ;



