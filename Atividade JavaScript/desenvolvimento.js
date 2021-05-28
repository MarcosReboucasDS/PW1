var aceleracao;
var massa;
var forca;

function calcforca() {
	massa = parseInt(document.getElementById('massaforca').value);
	aceleracao = parseInt(document.getElementById('aceleracaoforca').value);
	forca = massa * aceleracao;
    document.getElementById('resultadoforca').textContent = forca + "N";
}

var espaco;
var tempo;
var vm;

function calcvm(){
	espaco = parseInt(document.getElementById('espaçovm').value);
	tempo = parseInt(document.getElementById('tempovm').value);
	vm = espaco / tempo;
    document.getElementById('resultadovm').textContent = vm + ("m/s");
}

var vi;
var aceleracaovf;
var varespaco;
var vf;

function calcvf(){
	vi = parseInt(document.getElementById('velinicialvf').value);
	aceleracaovf = parseInt(document.getElementById('aceleracaovf').value);
	varespaco = parseInt(document.getElementById('varespacovf').value);
	vf = Math.sqrt(vi^2 + 2 * aceleracaovf * varespaco);
	document.getElementById('resultadovf').textContent = vf + ("m/s");
}

var ac;
var vartempo;
var varaceleracao;

function calcaceleracao() {
	varaceleracao = parseInt(document.getElementById('varaceleracao').value);
	vartempo = parseInt(document.getElementById('vartempo').value);
	ac = vartempo / varaceleracao;
    document.getElementById('resultadoaceleracao').textContent = ac + "m/s";
}

var pi;
var velinicial;
var acfhp;
var tempofhp;
var pf

function calcfhp(){
	pi = parseInt(document.getElementById('posinicial').value);
	velinicial = parseInt(document.getElementById('velinicial').value);
	acfhp = parseInt(document.getElementById('aceleracaofhp').value);
	tempofhp = parseInt(document.getElementById('tempofhp').value);
	pf = (pi + velinicial * tempofhp + acfhp) / 2
	document.getElementById('resultadofhp').textContent = pf + ("m/s");
}
