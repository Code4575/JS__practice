// immediately invoked function expressions

//jo function immediately execute ho jayye----------IIFE
              //also
//global scope ke pollution se kayi baar dikkat hoti hai ussi ko hatane ke liye iife use hota hai



function chai(){
    console.log(`DB CONNECTED`);
}
chai();


//instead of using above we can do like

// (function chai(){
//named iife

//     console.log(`DB CONNECTED`);
// })()



// that mean     ()()
//error will be there if we not include ; in the end of the previous function
//   ; important hai



((name)=>{
    console.log(`db connected ${name}`)
}

)('shivangi')

// unnamed iife


