//                                for of loop

// ["","",""]
// [{},{},{}]
// works as for loop but in better version

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting="hello world"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }
/* each char is h
each char is e
each char is l
each char is l
each char is o
each char is  
each char is w
each char is o
each char is r
each char is l
each char is d        ----   result of above*/



// maps------known for their unique pair

// const map=new Map()
// map.set('IN',"india")
// map.set('usa',"united america")
// map.set('fr',"france")

// console.log(map);

// for (const [key,value] of map) {         // [] key aur value ki value alag alag lene ke liye
//     console.log(key, ' ', value);
// } 


// const myobject={
//     game1:'nfs',
//     game2:'spiderman'
// }
// for (const [key,value] of myobject) {     
//          console.log(key, ' ', value);
//     } 

//  map ka iterable wala way yaha same nahi hai......iske liye alag hota hai





//                         for in loop

const myobject={
    js:'javascipt',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myobject) {
    //console.log(`${key} has value ${myobject[key]}`);
}

// key ke liye consile m simple key
// value ke liye object[key]



const arr=["js","cpp","py","java"]
for (const key in arr) {
   //console.log(arr[key]);
}
//key likhne se unse indexes aate hai
// value k liye arr[key]  likhna hoga



const map=new Map()
map.set('IN',"india")
map.set('usa',"united america")
map.set('fr',"france")

for (const key in map) {
   //console.log(key);
}

// map are not iterable for for in loop





//                            for each loop



const array=["js","cpp","java","jv"]
// for each is a call back function
//isme fuction ke saath name ka zaroorat nahi hai

// array.forEach( function (item){
//        console.log(item);
// }   )


// array.forEach((val)=>{
//     console.log(val);
// } )

function printMe(val){
   // console.log(val);
}

array.forEach(printMe)
//isme refence dene ki zaroorat nahi hai

array.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

/*   output of above

js 0 [ 'js', 'cpp', 'java', 'jv' ]
cpp 1 [ 'js', 'cpp', 'java', 'jv' ]
java 2 [ 'js', 'cpp', 'java', 'jv' ]
jv 3 [ 'js', 'cpp', 'java', 'jv' ]
*/


const coding=[
    {
        language:"java",
        filename:"js"
    },
    {
        language:"python",
        filename:"py"
    },
    {
        language:"c",
        filename:"c++"
    }
]

coding.forEach((items)=>{
console.log(items.language);
})