

function Glav_none() {
	document.getElementById('Arena').style.display = "none";
	document.getElementById('Klan').style.display = "none";
	document.getElementById('Inventi').style.display = "none";
	document.getElementById('nav').style.display = "none";
	document.getElementById('block_1').style.borderBottom = " dashed black ";
	document.getElementById('block_2').style.borderBottom = " dashed black";
	document.getElementById('block_3').style.borderBottom = " dashed black";
}
function Arena_click(){
	Glav_none();
	document.getElementById('Arena').style.display = "block";
	document.getElementById('block_1').style.borderBottom = "  dashed white";
}
function Klan_click(){
	Glav_none();
	document.getElementById('Klan').style.display = "block";
	document.getElementById('block_2').style.borderBottom = "  dashed white";
}
function Inventi_click(){
	Glav_none();
	document.getElementById('Inventi').style.display = "block";
	document.getElementById('block_3').style.borderBottom = "  dashed white";
	document.getElementById('nav').style.display = "block";
}

// инвенты
function inv_none(){
	document.getElementById('Master').style.display = "none";
	document.getElementById('Krazbic').style.display = "none";
	document.getElementById('Krafter').style.display = "none";
	document.getElementById('Lamperyj').style.display = "none";
	document.getElementById('otr').style.display = "none";

	document.getElementById('block_Master').style.borderBottom = " dashed black";
	document.getElementById('block_Krazbic').style.borderBottom = " dashed black";
	document.getElementById('block_Krafter').style.borderBottom = " dashed black";
	document.getElementById('block_Lamperyj').style.borderBottom = " dashed black";
	document.getElementById('block_otr').style.borderBottom = " dashed black";
}
function Master_click(){
	inv_none();
	document.getElementById('Master').style.display = "block";
	document.getElementById('block_Master').style.borderBottom = "  dashed white";

}
function Krazbic_click(){
	inv_none();
	document.getElementById('Krazbic').style.display = "block";
	document.getElementById('block_Krazbic').style.borderBottom = "  dashed white";

}
function Krafter_click(){
	inv_none();
	document.getElementById('Krafter').style.display = "block";
	document.getElementById('block_Krafter').style.borderBottom = "  dashed white";

}
function Lamperyj_click(){
	inv_none();
	document.getElementById('Lamperyj').style.display = "block";
	document.getElementById('block_Lamperyj').style.borderBottom = "  dashed white";

}
function otr_click(){
	inv_none();
	document.getElementById('otr').style.display = "block";
	document.getElementById('block_otr').style.borderBottom = "  dashed white";

}