function inputangka(x) {
	document.getElementById('data').value += x;
}

function hapusangka(y) {
	document.getElementById('data').value = y;
}

function hitung() {
	var hasil = eval(document.getElementById('data').value);
	document.getElementById('data').value = hasil;
}