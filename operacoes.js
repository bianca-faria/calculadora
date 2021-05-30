function adicao() {

	var num1 = document.getElementById('idnum1').value;
	var num2 = document.getElementById('idnum2').value;
	
	resultado = Number(num1) + Number(num2);

	document.getElementById('resul').value = resultado;
}

function sub() {

	var num1 = document.getElementById('idnum1').value;
	var num2 = document.getElementById('idnum2').value;
	
	resultado = Number(num1) - Number(num2);

	document.getElementById('resul').value = resultado;
}

function mult() {
	var num1 = document.getElementById('idnum1').value;
	var num2 = document.getElementById('idnum2').value;
	
	resultado = Number(num1) * Number(num2);

	document.getElementById('resul').value = resultado;
}


function div() {
	var num1 = document.getElementById('idnum1').value;
	var num2 = document.getElementById('idnum2').value;
	
	resultado = Number(num1) / Number(num2);

	document.getElementById('resul').value = resultado;
}

function pot() {

	var num1 = document.getElementById('idnum1').value;
	var num2 = document.getElementById('idnum2').value;
		
	 resultado = Math.pow(Number(num1), Number(num2))

	document.getElementById('resul').value = resultado;
}
