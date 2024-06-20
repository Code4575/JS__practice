// const tinder=new Object()      // singleton object
const tinder1={}               //non singleton obj
//both use to define to objects 


// console.log(tinder)
//console.log(tinder1)


tinder1.id="@gmai.com"
tinder1.name="shiavngi"
tinder1.islogged=false

//object inside object

const regular={
    email:"234@gmail.com",
    fullname:{
         username:{
                    name:"shivangiiii",
        lastname:"raj"
         }
    }
}

// console.log(regular)

//********COMBINING OBJECTS*******


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}           ----not a good practice

//const obj3=Object.assign({},obj1,obj2)       //------giving {}   is a good practice and pakka hota h k ab ek combined val hi milegi

const obj3={...obj1,...obj2}                    //spread wala also in array

// console.log(obj3)

// console.log(tinder1);

// console.log((Object.keys(tinder1)));         //proper works as array
// [ 'id', 'name', 'islogged' ]----result

// console.log((Object.values(tinder1)));
//[ '@gmai.com', 'shiavngi', false ]----result

// console.log((Object.entries(tinder1)));
//  [[ 'id', '@gmai.com' ],[ 'name', 'shiavngi' ],[ 'islogged', false ]]

// console.log(tinder1.hasOwnProperty('email'));          // ------prop h ya nhi batata h in true or false




//**************************************************** */



const course={
    coursename:"jid",
    price:"999",
    courseinst:"Shivangi"
}

//1st method----- course.courseinst


//below is called destructuring of object

const {courseinst:inst}=course         //name ko chota bhi kar sakte hai 
// console.log(inst);


// {
//     "name":"shivangi",
//     "age":"19",
//     "location":"up"
// }                                      //method for aaplying JSON