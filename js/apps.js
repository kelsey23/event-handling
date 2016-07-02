window.onload = doThings; 
function doThings(){
	var lanikai = document.getElementById("lanikai"); 
	lanikai.addEventListener("click", handleclick); 	
}
function handleclick(evt){
	console.log(evt.target.id);
}



