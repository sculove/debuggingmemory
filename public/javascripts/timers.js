var buggyObject = {
	callAgain: function () {
		var ref = this;
		var val = setTimeout(function () {
			console.log('Called again: ' + new Date().toTimeString());
			ref.callAgain();
		}, 1000);
	}
};

buggyObject.callAgin();
buggyObject = null;