//virker på alle sprog

document.getElementById('in').oninput = function(){
	//kryptere
    const offset = 3;
    
	//fra kode til tegn
    let str = this.value;// iterere over linjer
    
	//fra tegn til kode
	console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){//lopper igennem
		let code = str.charCodeAt(i);
		code = code + offset;// tilføje blanding til koden
		out += String.fromCharCode(code); //her fik man symbol og tilføjet out
	}
	document.getElementById('out').innerHTML = out;
}

//dekryptere
document.getElementById('out2').oninput = function(){
	const offset = 3; //det samme konstant
	let str = this.value; //få en str fra den element, hvor vi starter kryptere
	let out = ''; //former en tom str
	for (let i=0; i< str.length; i++){ //lopper igennem
		let code = str.charCodeAt(i); 
		code = code - offset; //minus blanding til koden
		out += String.fromCharCode(code); //konverter til tekst og tilføj out
	}
	document.getElementById('out3').innerHTML = out; //resultet skal outputes 
}