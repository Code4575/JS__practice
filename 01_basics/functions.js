function name(){
    console.log("Shivangi");
}

//     name()      //execution

function add(num1,num2){
    console.log(num1+num2);
}

    // const result=add(3,5)
    // console.log("result:",result);

    function add1(num1,num2){
    //    let result= num1+num2;
    //    console.log("shivangi");                 //return ke baad ki koi bhi value print nahi hogi
    //    return result

    return num1+num2
    }

    const ans=add1(3,5)





// function username(username){
// return `${username} just logged in`
// }
// console.log(username("shivangi"))

// ()   karne par undefined aayega




//***********************************************


function calculatecartprice(val1,val2,...num1){
    return num1
}

// console.log(calculatecartprice(200,400,300,500));

//that ... is called rest operator it convert into an array


const user={
    username:"Shivangi",
    id:199
}

function handleobject(anyobject){
//console.log(`username is ${anyobject.username} and its id ${anyobject.id}`);
}

//handleobject(user)

      //or

handleobject({
    username:"sam",
    id:122
})


const myarray=[200,300,400]

function returnarray(getarray){
    return getarray[1]
}

// console.log(returnarray(myarray))

console.log(returnarray([200,300,400,500]));