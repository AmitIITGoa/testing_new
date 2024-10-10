
console.log("hello   server ") ;


function  add(a ,  b ){
    return  a +  b ;
}

console.log(add(10 , 20)) ;


var  result =  function(a, b){
    return  a +  b ;
}
//  this is var  define fintion   


var  op =  (a ,  b) => {return  a +  b ;} ;

//  this is the  arrow  function  

var  op2 =  (a ,  b) => a + b ;  //  function is  make  shortest  line code 

let  ans  = op(10 ,  15) ;
console.log(ans) ;


(function(){
    console.log("Amit is  unlucky ") ;
})() ;


function callback() {
    console.log("prices is calling the callback function");
}

const amit =  function(a, b, callback) {
    console.log(a + b);
    callback();
}

amit(10, 20, callback);


amit(10 ,  13 ,  function(){
    console.log("inline function  calling" ) ;
})

amit(10 ,  13 ,  () => console.log("function  call ") ) ;
//  this way  we  can  creat the inline function  


var fs =  require('fs') ;
var os =  require('os') ;


 
var  user =  os.userInfo()  ;  // os give the  information  about the system 

console.log(user) ;



fs.appendFile('amit_shinde.txt' ,  'amit  is  unlucky  \n' , () =>  console.log("done")) ;

const  notes  =  require('./notes.js') ;

var  val =  notes.val ;
console.log(val) ;

console.log(notes.addnumber(10 ,  20)) ;


//  some  inbuilt  function  or data  extraction in  the lodash  so  compute  easily  

var  la =  require('lodash') ;


var arr = ["amit" ,  "amit" ,  1 , 2 , 3 ,1 , 2] ;

var  flt =  la.uniq(arr) ; //  give the  unic  elemant form  the  data  

console.log(flt) ;



//  question 3 


function  add(a ,  b) {
    return  a +  b ;
}

function sub (a ,b ){
    return  a -  b ;
}

function  amit_call(a ,b ,  callback){
    return  callback(a ,b ) ;
}


var  p1  =  amit_call(500 ,  69 ,  add) ;
console.log(p1) ;

//  question  2  


fs.readFile('amit_shinde.txt' ,  'utf8'  , (err ,  data ) => {
    if(err){
        console.log(err); 
    }
    console.log(data) ;
} );

// console.log(fd) ;


//  question 4  sum of  the array  

var  lst =  [1,2,3,4,5,6] ;

var  sm =  la.sumBy(lst) ;

console.log( "this is the sum " ,  sm) ;

 



 







/* 
notes  

    call  back function : 
            when  our  main  function is  done then  our  call  back  function  run  
    
    call  back function is use in  the main  function so we  need  to pass  it  in the  function 
    and  when  our  main  function is  run  when  we  call  the  our  call back function  

*/


/* 

const prompt = require('prompt-sync')({sigint: true});


var  a =  10 ;
var  b = 10 ;

console.log(a+b) ;

console.log("hi  i  am  Amit  ") ;

const  top = "Lucky" ;

console.log(top) ;

console.log(typeof(top)) ;

const  arr = [1,2,3,4] 
arr.push(6) ;
console.log(arr) ;
console.log(arr[2]) ;


const  age = [10 ,13, 22, 12] ;

const  result  =  age.filter(check) ;

function check(x){
    return  x <=  18 ;
}

console.log(result) ;





let  v1 =  parseFloat(prompt("Please enter your age:")) ;

console.log(v1) ;
v1 =  v1 +  20  ;
console.log(v1) ;







// npm  init is  use to  initiate the prgram  

    it  ask  all  the  question then it  go  ferther  detail  


*/







