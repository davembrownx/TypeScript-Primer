//Types
let hostName: string = "bob";
let list: number[] = [1, 2, 3];
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

let x = 123;//inferred number type

//Spread Operator
console.log("Spread operator");
console.log(...list);
console.log("---------------");

//Rest Operator
function restExample(param1:string, param2:number,  ...moreParams:any[]){
  console.log(param1);
  console.log(param2);
  moreParams.forEach(param=>console.log(param));
}

console.log("Rest operator");
restExample("Here's some numbers",0, ...list);
console.log("---------------");

//Alias
type str = string;
let animal: str = 'Lion'; // same as let animal: string = ‘Lion’;

//Union of Types
type Age = number | string;

function admitAge (age: Age): string {
  return `I am ${age}, alright?!`;
}

let numAge: Age = 50;
let strAge: Age = 'One Hundred';
console.log("1. Type as Union ")
console.log(admitAge(numAge)); // 'I am 50, alright?!'
console.log(admitAge(strAge))// 'I am One Hundred, alright?!'
console.log("--------------------")

type PartyZone = "pizza hut" | "waterpark" | "bowling alley" | "abandoned warehouse";

function goToParty (place: PartyZone): string {
  return `lets go to the ${place}`;
}


//goToParty("chuck e. cheese"); //This will cause error
console.log("2. Type as enum ")
console.log(goToParty("pizza hut")); 
console.log("--------------------");




