
/**
 * call / apply
 * func.call(this, arg1, arg2);
 * func.apply(this, [arg1, arg2])
 */
function Fruits() {}
Fruits.prototype = {
  color: "red",
  say: function() {
    console.log("My color is " + this.color);
  }
}

let apple = new Fruits;
apple.say();    //My color is red
banana = {
  color: "yellow"
}
apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow

