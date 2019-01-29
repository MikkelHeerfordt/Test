function insertText() {
	document.getElementById("newContent").innerHTML = "HELLO MOTHERFUCKER <br>";
	}
	
function calculate() {
	var t = widthBox.value;
	//read from the textboxs
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	//convert to float
	w = parseFloat(w);
	h = parseFloat(h);
	l = parseFloat(l);
	var result = w*l*h;
	//show result in div
	document.getElementById("result").innerHTML = result;
}
	
	