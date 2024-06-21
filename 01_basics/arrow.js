const user={
    username:"shivangi",
    price:999,

    welcomemsg:function(){
        console.log(`${this.username} , welcome user`)
        console.log(this);
    }

}

//   {}  ke ander ka content use karne ke liye thid=s use karenge 
/*{
    username: 'shivangi',
    price: 999,
    welcomemsg: [Function: welcomemsg]
  }
*/            //result of this

// user.welcomemsg()
// user.username="samm"
// user.welcomemsg()


// console.log(this)                //gives {} only 



// function chai(){
//     let username="shivangi"                 //with let it gives us indefined
//     console.log(this.username)
// }
// chai()


// const chai=function(){
//     let username="shivangi"                 
//     console.log(this.username)
// }

// chai()              //also gave undefined


//_________________ARROW_____________


//  const chai=()=>{
//          let username="shivangi"                 
//          console.log(this.username)
//     }
//     chai()






const addtwo=(num1,num2)=>{
return num1+num2
}

// console.log(addtwo(3,5));



                            //or//
                         //  { }   likhenge to hamko return kihna compulsory hai   agar {} nahi hai to return ka bhi zaroorat nahi hai
                            
// const addtwo1=(num1,num2)=> (num1+num2 )                       
// console.log(addtwo1(3,5));                            

//object ko return karne ke liye {}  m wrap karna hi padega

const addtwo1=(num1,num2)=> ({username:"Shivangi"})                       
// console.log(addtwo1(3,5)); 




