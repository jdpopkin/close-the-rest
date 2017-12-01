chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.getAll(function(windows) {
		windows.forEach(function(window) {
			if (!window.focused) {
				chrome.windows.remove(window.id);
			}
		});
	});
});
