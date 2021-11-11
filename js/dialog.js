var dgbx=op('.dgBx');
var dialog={
	show:()=>{
		dgbx.classList.add("active");
		resetColS();
	},
	hide:()=>{
		dgbx.classList.remove("active");
	},
	success:()=>{
		elem.click();
	},
	inside: (txt)=>{
		op('.dgBx .dg p').innerHTML=txt;
	},
	buttons:(no="No",yes="Yes")=>{
		op(".dgBx .btp button span").innerText=no;
		op(".dgBx .btp .yes span").innerText=yes;
	},
	activateYesBtn: ()=>{
		op(".dgBx .btp .yes span").classList.toggle("notWorking");
	}
}
op(".dg").onclick=(e)=>{e.stopPropagation();}
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
	log(preVid)
	dialog.show();
	dialog.success=()=>{
		vidSource=preVid;
		
		load.show();
		linkPaste('remove');
		setLink(vidSource.src);

		video.currentTime=Math.floor(vidSource.time);
	}
}
/*
var lastTimeLoad=localStorage.getItem("aiLastTime");

localStorage.setItem("aiLastTime",new Date().getTime());


if(((new Date().getTime() - lastTimeLoad) < 20000) && !localStorage.getItem("aiFeedbacksent")){
	getFeedbackHTML();
}

function getFeedbackHTML(){

	log('feeding ');
	dialog.inside(`
			<h2 class="txtCen">Found any problem!</h2>
			<p fs=" .9em">Report a file here.</p>

			<div>
			  <label>input</label>
			</div>	
		`)
	// localStorage.setItem("aiFeedbacksent",true);
}*/