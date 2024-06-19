const arr=["no","yes","yupp"]

const st=["hii","hola","moshi"]

// arr.push(st)

// console.log(arr)
// console.log(arr[3][1])

// const newarr=arr.concat(st)    //push works on existing arrybut CONCAT works upon new array(hamko naya array banan hoga concat ke liye)
// console.log(newarr)

// const allnew=[...arr,...st]
// console.log(allnew)                   //ek ek element spread hokar milega
                                      //conacat ki limitaion h ki usme const val leni hoti hai     spread m ye scene nahi hai

// const arr3=[1,2,3,[4,5,6],[7,8,9]]
// const make=arr3.flat(Infinity)
// console.log(make)                    //flat ek hi m convert kar deta h pure array ko


// console.log(Array.isArray("shivangi"))
// console.log(Array.from("shivanhi"))        // from convert a string into an array
// console.log(Array.from({name:"shivanhi"}))   //gave blank arry bcoz hamko ise key , val deni hogi



let m1=100
let m2=200
let m3=300

console.log(Array.of(m1,m2,m3))          //    .of directly converts the variables into an array