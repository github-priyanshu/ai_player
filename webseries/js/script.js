var log=console.log;
let ws;

var search=decodeURI(location.search.replace("?",''));
search=search.split('&');
for(let a=0; a<search.length; a++){
	eval(search[a])
}
log(ws);

fetch(`webseries/webseriesdata/${ws}`).then(res=>{return res.json()}).then(applyLoad);

function applyLoad(ret){
	log(ret)
	loadImg(ret.imglink);
	showLink(ret.episode);
}

function showLink(link){
	var htmlxx="";
	link.map((val,num)=>{
		htmlxx+=`<div class="flex episode">
			<a href="?mlnk='${val}'">Episode ${num+1}</a>
		</div>`;
	})

	op('#Lister').innerHTML=htmlxx;
}

function resetColS(){
	opp("*[col]").forEach(val=>{
		val.style.color=val.getAttribute("col");
		val.removeAttribute("col");
	})

	opp("*[fs]").forEach(val=>{
		val.style.fontSize=val.getAttribute("fs")
		val.removeAttribute("fs");
	})
	opp("*[ff]").forEach(val=>{
		val.style.fontFamily=val.getAttribute("ff")
		val.removeAttribute("ff");
	})
}

function loadImg(src){
	op("#bnrImg").src=src;
	op("#bnrImg").onload=(e)=>{
		op(".img").classList.add('load');
	}
}

resetColS();

function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}