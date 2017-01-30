var initialCats = [
	{clickCounter:0,
	name: 'Tabby',
	imgSrc:'img/1413379559_412a540d29_z.jpg',
	imgAttribution: 'something',
	level: '',
	nicknames: ['tabs', 'tabsee','tabster']},
	{clickCounter:0,
	name: 'Toby',
	imgSrc:'img/22252709_010df3379e_z.jpg',
	imgAttribution: 'something',
	level: '',
	nicknames: ['tobes', 'tobesee','tobester']}

]

var Cat = function(data){
	this.clickCounter = ko.observable(data.clickCounter);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.level = ko.observable(data.level);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function(){
		if(this.clickCounter() <= 5){
			return 'infant kitty';
		}else if(this.clickCounter() <= 10){
			return 'teen kitty';
		}else{
			return 'adult kitty ';
		}
	}, this);
}


var ViewModel = function(){
	var self = this;

	this.catList = ko.observableArray([]);
	console.log(this.catList());
	//returns empty array

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});
	//is this pushing anything?!?!
	// why new Cat? What is in Cat class now?

	this.currentCat = ko.observable(this.catList()[0] );

	this.incrementCounter = function(){
		self.currentCat().clickCounter(self.currentCat().clickCounter() + 1);
	}






}

ko.applyBindings(new ViewModel());



