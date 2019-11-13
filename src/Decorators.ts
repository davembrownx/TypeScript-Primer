//----Class Decorator Example----
function myDecorator(prefix?: string) {
  return (constructor:any) => {   
        console.log(constructor);
        console.log("decorator evaluated");
        constructor.prototype.message = prefix+constructor.name;
  };

}

@myDecorator('Hello ')
class World {
  message:string; 
}

let w = new World();
console.log("Class Decorator ")
console.log(w.message);
console.log("--------------------")

//----Method Decorator------------
function myFunctionDecorator(extraStuff:string){
  return (constructor:any, name:string)=>{
    console.log(name+" function observed");
  }
}

class MyClass{
  @myFunctionDecorator("testing")
  myFunction(){
    console.log("inside function call");
  }
}

let myClass = new MyClass();
myClass.myFunction();
myClass.myFunction();

//-----Property Decorator Operations-------

function propertyDecorators(label: string, count: number) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, { 
      get: () => key+"= "+label+" "+count
    });
  }
}

class Test {
  @propertyDecorators('Mr', 2) 
  name: string = 'Jason';
}

let t = new Test();

console.log("1. Property Decorator ")
console.log(t.name);  // 'test'
console.log("--------------------")



//---Parameter Decorator Example----

function logPosition(target: any, methodName: string, paramIndex: number) {
  console.log("methodName: "+ methodName+", paramIndex: "+paramIndex);
}

console.log("Param Decorator ")

class Cow {
  say(b: string, @logPosition c: boolean) {
    console.log(b);
  }
}

new Cow().say('Hello', false);
console.log("--------------------")
