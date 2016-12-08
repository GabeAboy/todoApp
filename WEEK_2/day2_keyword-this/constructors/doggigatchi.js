//Create a dog object that has hungry, tired, playful
//Create the methods on that object : play, eat, sleep
//The play method decreases playful by 30 (Never less than 0), and increases hungry by 20 and tired by 10,
//The eat method decreases hungry by 30 (Never less than 0) and increases tired by 20
//The sleep method decreases tired by 30 (Never less than 0) and increases playful by 20
//Add a method that logs how hungry, tired, and playful your dog is

var dog = {
	lim:0,
	hungry:50,
	tired:50,
	playful:50,
	play: function(){
		this.playful -= 30
		this.hungry += 20
		this.tired += 10
		if(this.playful < 0){
		this.playful = 0
		}

	},
	eat: function() {
		this.hungry -= 30;
		this.tired += 20;
		if(this.hungry < 0){
		this.hungry = 0;
		}
	},
	sleep: function() {
		this.tired -= 30
		this.playful += 20
		if(this.tired < 0){
			this.tired = 0
		}
	},
	mood : function() {
		console.log('playful: ',this.playful)
		console.log('hungry: ',this.hungry)
		console.log('tired: ',this.tired)
	}


}

dog.play()
dog.play()
dog.play()
dog.sleep();
dog.mood()
dog.playful
dog.eat()
dog.eat()
dog.eat()
dog.eat()
dog.mood()
