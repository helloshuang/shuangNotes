function ClassA(name) {
	// body...
	this.name = name;
	this.age = 18
}
function ClassB(name) {
	this.age = name;
	this.lala = 'lalalala'
	return {
		name
	}
}
var a = new ClassA('A');
var b = new ClassB('B');
console.log(a);
console.log(b);