// singleton-------constructor se banata h
//object.create----------iske through singleton banata hai

//object literals


const sym=Symbol("key1")


const jsuser={
    name:"Shivangi",
    "full name":"shivangi raj",
    age:22,
    [sym]:"mykey1",          //normal sym likhte to wo string hota [] use hi symbol ke liye kar rhe hai(refer karne ke liye)
    location:"up",
    islogged:false,
    lastloggin:["monday","saturday"]
}


// console.log(jsuser.location)
// console.log(jsuser["location"])        //har cheez ko aap . se access nhi kar payenge uss ke liye alag lag method h like [] ,""
// console.log(jsuser["full name"])      //u cant use full name by 1st method we have to use 2 one
// console.log(jsuser[sym])
// console.log(jsuser)

//   Object.freeze(jsuser)       //freexe karne ki wajah se jsuser m koi changes nhi honge a

 jsuser.location="america"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello")
}

jsuser.greetingtwo=function(){
    console.log(`hello, ${this.name}`)      //``----used for interpolation
}

console.log(jsuser.greeting)
console.log(jsuser.greeting())

console.log(jsuser.greetingtwo())



//results of both
//[Function (anonymous)]
//hello