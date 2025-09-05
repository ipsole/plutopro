function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {a
	showTime();
}, 1000);if (userMessage.includes("joke")) {
  reply = await getJoke();
}