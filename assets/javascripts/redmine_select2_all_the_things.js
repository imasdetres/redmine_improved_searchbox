$(function(){
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
		//loop through the detected mutations(added controls)
		mutations.forEach(function(mutation) {
			//addedNodes contains all detected new controls
			if (mutation && mutation.addedNodes) {
				mutation.addedNodes.forEach(function(elm) {
					//only apply select2 to select elements
					$(elm).select('select').select2({ width: 'off', dropdownAutoWidth : true });
				});
			}
		});
	});
        observer.observe($('body')[0], { childList: true, subtree: true });
});
