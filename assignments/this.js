/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Without pointing to anything "this" with be bound to the window object.
* 2. Implicit - when a function is called using dot notation the object before the . is what this points to 
* 3. New- when a constructior function is used "this" points to the new object being created
* 4. Explicit- When call or apply are used on a function 'this' is explictly bound
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding

let Me ={
    "name":"Tom"
}
function likes(like1,like2,like3){
    return `Hello, my name is ${this.name} and I like: ${like1}, ${like2}, ${like3}.`;
}

console.log(likes("pizza","tacos",'beer'))


// Principle 3

// code example for New Binding

function greet(greeter){
    this.greeting ="My name is ";
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greeting + this.greeter);
    }
};

let Tommy = new greet('Tom');
let Dave = new greet('Dave');

Tommy.speak();


// Principle 4

// code example for Explicit Binding

Dave.speak();
Tommy.speak.call(Dave);
