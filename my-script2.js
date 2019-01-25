//create count in the database 
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update html to relfect datase count 
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}
update()

//add one to count 
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count 
function reset() {
	if (confirm("You don't mean that... hit CANCEL NOW!")) {
		localStorage.setItem("count",0);
		update();
	}
}