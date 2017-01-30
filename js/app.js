var Cat = function(){
	this.clickCounter = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('something');
	this.level = ko.observable('');
	this.nicknames = ko.observableArray([
		{nickname: 'tabs'}, {nickname: 'tabsee'},{nickname: 'tabster'}
		]);

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

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function(){
		this.clickCounter(this.currentCat().clickCounter() + 1);
	}






}

ko.applyBindings(new ViewModel());


