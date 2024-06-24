// const arr=["js","cpp","py","java"]

// const values=arr.forEach((items)=>{
// console.log(items);
// return items
// })

// //for each kabhi bhi values ko return nahi karta hai

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]
 
// const newmums=mynums.filter((nums)=>nums>4)

//                   or

const newmums=mynums.filter((nums)=>{
 return nums>4
})

// {} use kar rhe to return karna hi padega warna normal hi hai

//console.log(newmums);

//   output of above -----[ 5, 6, 7, 8, 9, 10 ]

// const mynewnums=[]

// mynums.forEach((num)=>{
//     if(num>4){
//         mynewnums.push(num)
//     }
// })
// console.log(mynewnums)

// same output



//                     to get something from an object


//const userbook=books.filter((bk)=>bk.genre==='history')
//console.log(userbook);

const myarr=[1,2,3,4,5,6,7,8,9,10]


//const ans=myarr.map((num)=>num+10)
//thats called chaining
 

const mymus=myarr.map((nums)=>nums*10)
.map((nums)=>nums+1)     
.filter((num)=>num>=40)


// console.log(mymus);




//            REDUCE


const nums=[1,2,3]

// const mytotal=nums.reduce(function(acc,currval){
//     console.log(`acc is ${acc} and curr ${currval}`);
// return acc+currval
// },0)


//                       OR


//const mytotal=nums.reduce((acc,curr)=>acc+curr,0)

//console.log(mytotal);


const courses=[{
course:"java",
prices:999
},
{
    course:"cs",
    prices:1111
    },
    {
        course:"python",
        prices:2222
        }
]

const ans=courses.reduce((acc,item)=>acc+item.prices,0)
console.log(ans);