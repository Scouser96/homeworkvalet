const name = prompt("как тебя зовут?");
const isMarried=confirm("ты женат?")
const newObject= {surname: "ВИтушко"};
newObject.age=24;
newObject.name = name;
newObject.married= isMarried;
console.log(newObject);



// if ( name ==="vitalik" ) {
//     console.log("hi vital")
// }  else if (name === "ebal" ){
//     console.log("123") 
// } else {console.log("mamkuEbal")}




name === "vitalik" ? console.log("hi vital") :
name === "ebal" ? console.log("123") :
console.log("4444")