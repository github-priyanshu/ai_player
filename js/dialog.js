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
let elem,preVid=localStorage.getItem("aiCurVid");

if(mid){
	elem=op(`.movieSubCat .movie[mid="${mid}"] h4`);

	dialog.inside(`Want to watch <span>'${elem.innerText}'</span> for free.`);
	dialog.show();
	document.title=elem.innerText+" : Ai-Player";

}else if(preVid){
	preVid=JSON.parse(preVid);
	dialog.inside(`Want to continue previous video! <br> <span ff="glory" fc="#e73070">${preVid.name}</span> <div class="flex" style="margin-top: 10px;" onclick="localStorage.removeItem('aiCurVid')"><span fs=".9em" ff="sans-serif" col="#666">Don't ask for this.</span></div>`);
	resetColS();
	dialog.show();
	dialog.success=()=>{
		vidSource=preVid;
		importViaLink();
		video.currentTime=vidSource.time;
	}
}