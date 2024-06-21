let a=10
const b=20
var c=30

// console.log(a);
// console.log(b);
// console.log(c);

//      {}   is for scope in every lang


// ******************************   NESTED SCOPE     ***************

function one(){
    const username="shivangi"
    function two(){
        const plat="github"
        console.log(username);
    }
//console.log(plat)

//const  {}  ke bahar kaam nhi karega

two()
}
// one()

if(true){
    const name="Shivangi"
    if(name==="Shivangi"){
        const website="youtube"
       // console.log(name + website);
    }
    //console.log(website);
}

//console.log(name)

//{} ke bahar ocnsole karne ka try karenge ko nahi hoga





//***************     INTERESTING       ********************* */

console.log(addone(5))
function addone(num){
    return num+1
}

//   isme ham console pehle likh kar bhi return ho gyai value

addtwo(5)
const addtwo=function addone(num){
    return num+1
}

//   isme nahi hui because hamne use ek particularconst m rakah hai







