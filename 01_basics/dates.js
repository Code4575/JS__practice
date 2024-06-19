let mydate=new Date();
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(typeof mydate)


//month starts from 0 in js

let mdate=new Date("2024-6-19");
// console.log(mdate.toDateString())
// console.log(mdate)
// console.log(mydate.toDateString())

let mytimestamp=Date.now()
// console.log(mytimestamp)   //ye wo time h jo 1970 se abhi tak ka raha hai in millisec
// console.log(mdate.getTime())      //ye wo time h jo 6 july se mujhe milli hai

//console.log(Math.floor(Date.now()/1000))         //floor val milegi isse


let newdate=new Date()
// console.log(newdate.getMonth()+1)     //+1 isliye kyunki 0 se start hai months


newdate.toLocaleString('default',{
    weekday:"long"
})