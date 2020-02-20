function changeColor() {
	let paragraph1 = document.getElementById("paragraph1");
	paragraph1.style.backgroundColor = "lightblue";
}

function changeWord() {
	let p2 = document.getElementById("paragraph2").innerHTML;
	let newparagraph2 = p2.replace('Jedi', 'Sith');
	document.getElementById("paragraph2").innerHTML = newparagraph2;
}

function changeWordColor() {
	let txt = 'Jedi';
	if (window.getSelection) {
		txt = window.getSelection().toString();
	} else if (document.selection) {
		txt = document.selection.createRange().text;
	}
	document.getElementById("paragraph2").innerHTML = txt;
}
document.getElementById("txt").onclick = txt.style.backgroundColor = "green";
