const arr=[0,1,2,3,4]
const array=new Array(1,2,3,4)

// console.log(arr[0])

// arr.push(6)
// arr.pop()

// arr.unshift(9)      //insert in starting
// arr.shift(9)
//console.log(arr.includes(9))

const newa=arr.join()  //convert into strings

// console.log(arr)
// console.log(typeof newa)



//slice,splice

// console.log("A",arr)

// const myar=arr.slice(1,3)
// console.log(myar)
// console.log("B",arr)

// const myar2=arr.splice(1,3)
// console.log(myar2)
// console.log("C",arr)

//  splice original arra ko maipulate kar deta hai

//but slice original array ko banaye rakhta hai

// A [ 0, 1, 2, 3, 4 ]
// [ 1, 2 ]---slice
// B [ 0, 1, 2, 3, 4 ]
// [ 1, 2, 3 ]-----splice
// C [ 0, 4 ]----after splice