var btnsToDis=op(".controls > .top > div.center");
var loader=op(".loader");


var load={
	show:()=>{
		btnsToDis.classList.add("disabled");
		loader.classList.add('active');
	},
	hide:()=>{
		btnsToDis.classList.remove("disabled");
		loader.classList.remove('active');
	}
}