function plusTemp(){
	var x = document.getElementById("tempTextC").innerHTML;
	x = x.match(/\d+/)[0];
	x= parseInt(x);
	if(x < 50){
	x++;
	var y = (x*2) + 30;
	document.getElementById("tempTextC").innerHTML = x + "°C";
	document.getElementById("tempTextF").innerHTML = y + "°F";
	}
	else{}
}
function minusTemp(){
	var x = document.getElementById("tempTextC").innerHTML;
	x = x.match(/\d+/)[0];
	x= parseInt(x);
	if(x > 0){
		x--;
		var y = (x*2) + 30;
		document.getElementById("tempTextC").innerHTML = x + "°C";
		document.getElementById("tempTextF").innerHTML = y + "°F";
	}
	else{}
}
function confirmDialog(action){
	if(action == "send"){
		var x = confirm("Send new target temperature to thermostat X?");
		if(x== true){
			alert("Target temperature is now " + document.getElementById("tempTextC").innerHTML);
		}
	}
	else if(action == "run"){
		var x = confirm("Run assigned schedule?");
		if(x== true){
			alert("Now running schedule X");
		}
	}
	else{}
}
function holdOn(){
	document.getElementById("holdButton").innerHTML = "Hold on" + "<span class='caret'></span>";
}
function holdOff(){
	document.getElementById("holdButton").innerHTML = "Hold off" + "<span class='caret'></span>";
}