function changeColor() {
	let paragraph1 = document.getElementById("paragraph1");
	paragraph1.style.backgroundColor = "lightblue";
}

function changeWord() {
	let p2 = document.getElementById("paragraph2").innerHTML;
	let newparagraph2 = p2.replace('Jedi', 'Sith');
	document.getElementById("paragraph2").innerHTML = newparagraph2;
}

function changeWordColor(text) {
	let word = document.getElementById("paragraph3");
	let innerHTML = word.innerHTML;
	let index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class= 'highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		word.innerHTML = innerHTML;
	}
}
