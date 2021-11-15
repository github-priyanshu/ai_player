let shareName=["Team of fun","Awesome Code","Chahat","Telegram"],
aiSharedBy;

setInterval(()=>{
/*send at rebular interval of 10 minutes*/	
	let data
	if(vidSource.name){
		data=vidSource.name+":"+vidSource.currentTime;
	}else{
		data="spent10Mins";
	}
	log(data)
	send(data);
},1000*60*10)

function send(data="",name){
	var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","and");
	name=name || localStorage.getItem('userName') || ((aiSharedBy || "") + ":"+ dv);

	var html=makeForm("https://docs.google.com/forms/d/e/1FAIpQLSfVqTW5rhKJKZiUAnS80O8K1pHVHypyiFjdS2SXoJHMekVNdA/formResponse",{
		"entry.1429420559":name,
		"entry.1189408838":data
	});
	op("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);

	var frame=op("#sender");
	frame.contentWindow.document.querySelector("body").innerHTML=html;
	frame.contentWindow.document.querySelector("button").click();
}

if(isDownLoaded() && !localStorage.getItem("aiDownDataSent")){
	send("downloaded");
	localStorage.setItem("aiDownDataSent",true);
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches);
}

if(sh){
	localStorage.setItem("aiSharedBy",shareName[sh-1]);
}
aiSharedBy=localStorage.getItem("aiSharedBy");

/*at last*/
setTimeout(send,2000);

function makeForm(action,data){
	let html=`<form action="${action}">`
	for(val in data){
		html+=`<input name="${val}" value="${data[val]}">`;
	}
	html+=`<button>Submit</button></form><script>document.querySelector('form').submit();</script>`

return html;
}