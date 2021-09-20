var dgbx=op('.dgBx');
var dialog={
	show:()=>{
		dgbx.classList.add("active");
	},
	hide:()=>{
		dgbx.classList.remove("active");
	},
	success:()=>{
		elem.click();
	},
	inside: (txt)=>{
		op('.dgBx .dg p').innerHTML=txt;
	}
}
let elem;
if(mid){
	elem=op(`.movieSubCat .movie[mid="${mid}"] h4`);

	dialog.inside(`Want to watch <span>'${elem.innerText}'</span> for free.`);
	dialog.show();
	document.title=elem.innerText+" : Ai-Player";
}