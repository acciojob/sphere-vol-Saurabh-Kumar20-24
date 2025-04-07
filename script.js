// let btn=document.getElementById("submit");
let input=document.getElementById("radius");
let volume=document.getElementById("volume");

function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	// volume.value=NULL;
  let radius=input.value;
	if(isNaN(radius)|| radius<0){
		volume.value="NaN";
		return;
	}
	
	let vol=parseFloat((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4)
	volume.value=vol;
	console.log(vol)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
