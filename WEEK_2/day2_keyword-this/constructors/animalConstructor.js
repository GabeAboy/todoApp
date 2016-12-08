function Animal(type,legs,sound) {
	this.type= type;
	this.legs = legs;
	this.sound = sound
	// this.makeSound = function() {
	// 	console.log(sound+ "!!!!!")
	// }
}

Animal.prototype.makeSound = function() {
		console.log(this.sound+ "!!!!!")
	}


var zebra = new Animal('horse','4','whoop whoop')
zebra.makeSound()

var giraffe = new Animal('quad-legged', 'quad-legged','moopphar')
giraffe.makeSound()
