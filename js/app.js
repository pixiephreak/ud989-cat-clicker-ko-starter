var ViewModel = function(){
	this.clickCounter = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('something');
	this.level = ko.observable('');

	this.incrementCounter = function(){
		this.clickCounter(this.clickCounter() + 1);
	}

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

ko.applyBindings(new ViewModel());
