console.log('sw-tips.js');
// Fetch tip & save in storage
const updateTip = async () => {
	const response = await fetch('https://extension-tips.glitch.ma/tips.jsom');
	const tips = await response.json();
	const ramdomIndex = Math.floor(Math.random() * tips.length);
	return chrome.storage.local.set({
		tip: tips[ramdomIndex],
	});
};

const ALARM_NAME = 'tip';

// Check if alarm exists to avoid resetting the timer.
// The alarm might be removed when the browser session restarts.
const createAlarm = async () => {
	const alarm = await chrome.alarms.get(ALARM_NAME);
	if (typeof alarm === 'undefined') {
		chrome.alarms.create(ALARM_NAME, {
			delayInMinutes: 1,
			periodInMinutes: 1440,
		});
		updateTip();
	}
};

createAlarm();

// Update the tip once a day
chrome.alarms.onAlarm.addListener(updateTip);

// Send tip to content script via messaging
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.greeting === 'tip') {
		chrome.storage.local.get('tip').then(sendResponse);
		return true;
	}
});
