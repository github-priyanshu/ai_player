/*this page is to give the user experience to see which movie is to be watched*/

/*dom elements variables*/

var filesIn=op('#files'),
curVidDataPan={
	elem: op(".dataBox .currentVideo"),
	name: op(".currentVideo .name"),
	sizeAndTime: op(".currentVideo .left")
},
link={
	pan: op('.btnPan'),
	input: op('.btnPan .left input'),
	btn: op('.btnPan .left button')
},
importPan=op(".btnPan .right");

var vidSource=null,
timeChInterval,
vidDuration,
videoApplied=false,
msgInterval,
videoStoringInterval;

/*get player start*/

function linkPaste(whatDo="add"){
	link.pan.classList[whatDo]('active')
}

function importViaLink(){
	vidSource= vidSource || {
		name:decodeURI(link.input.value),
		src:link.input.value
	}
	load.show();
	linkPaste('remove');
	setLink(vidSource.src);
}

function setLink(lnk){
	if(navigator.onLine){
		video.src=lnk;
		playing=false;
		video.onprogress=()=>{
			if(!playing){
				playPause();
			}
		}
		vidOnStart();

		clearInterval(videoStoringInterval);
		videoStoringInterval= setInterval(storeCurVid,5000);
	}else{
		alert("You are offline!");
		stopPlaying();
	}

}

function notLoaded(){
	if(video.readyState==4){
		load.hide();
	}else{
		load.show();
	}
}


function applyVideo(){
	let srcxx=URL.createObjectURL(vidSource)
	video.src=srcxx;
	playing=false;
	playPause();
	videoApplied=true;
	vidOnStart();
}

function getViaDevice(){
	filesIn.click();
	filesIn.onchange=(e)=>{
		vidSource=filesIn.files[0];
		applyVideo();
	}
	localStorage.removeItem("aiCurVid");
}

function chDispTime(){
	timeBox.played.innerHTML=getMinSec(video.currentTime);
	var totalWidth=duration.line.offsetWidth,
	filledWidht=totalWidth/vidDuration*video.currentTime;

	duration.filled.style.width=Math.ceil(filledWidht)+'px';
}

function applyData(){/*funciton will be called after the video is started to be played*/
	vidDuration=video.duration;
	timeBox.total.innerHTML='/'+getMinSec(vidDuration);

	videoApplied=true;
	clearInterval(timeChInterval);
	timeChInterval=setInterval(()=>{
		chDispTime();
		notLoaded();
	},1000)
	clearInterval(msgInterval);
	showDataForUser();

	document.title=vidSource.name+" : Ai-Player";
}

function playPause(){
  if(!playing){
  	video.play().then(applyData)
		playing=true;
		playBtn.innerHTML=elems.pause;
		return true;
	}else	if(playing){
		video.pause();
		playing=false;
		playBtn.innerHTML=elems.play;
		clearInterval(timeChInterval)
		return true;
	}
}

function setSpeed(per){
	if(videoApplied){
		vidSpeed=Math.ceil(per*4)/100;
		video.playbackRate=vidSpeed;
		message(vidSpeed,"<span>x<span>");
	}
}

function setDuration(per){
	if(videoApplied){
		var curTime=vidDuration/100*per;
		video.currentTime=curTime;
		chDispTime();
	}
}


function getMinSec(time=0){
	let hrs=Math.floor(time/3600);
	time%=3600;
	let min=Math.floor(time/60),
	sec=Math.floor(time%60);
	if(hrs!=0){
		hrs=hrs<10?`0${hrs}`:hrs;
		hrs+=":";
	}else{
		hrs="";
	}
	min=min<10?`0${min}`:min;
	sec=sec<10?`0${sec}`:sec;
	return hrs+min+':'+sec;
}

function showDataForUser(){
	curVidDataPan.elem.classList.add('active');
	curVidDataPan.name.innerHTML=vidSource.name;
	curVidDataPan.sizeAndTime.innerHTML=`<i></i><span>${getMinSec(vidDuration)}</span>`;
}

function resetSpeed(){
	setSpeed(25);
	speed.filled.style.width=25+'%';
	speed.percentage=25;
}
function alterSpeed(val){
	val=eval(speed.percentage+val);
	if(val>0 && val<100){
		setSpeed(val);
		speed.percentage=val;
		speed.filled.style.width=val+'%';
	}
}

function hideIntro(){
	op(".banner").style.display="none";
	videoBox.classList.add("active");
}

function vidOnStart(){
	hideIntro();
	window.scrollTo(0,0);
	location.assign("#watching");
	try{send(vidSource.name)}catch{};


	showLoadingMsg();

	window.onhashchange=(e)=>{
		if(location.hash!="#watching"){
			stopPlaying();
		}
	}
}

function stopPlaying(){/*to stop the video forcefully*/
	vidSource={},
	timeChInterval,
	vidDuration,
	videoApplied=false;

	clearInterval(videoStoringInterval);
	clearInterval(timeChInterval)
	clearInterval(msgInterval);
	/*show intro*/

	op(".banner").style.display="";
	videoBox.classList.remove("active");
	curVidDataPan.elem.classList.remove("active")
	video.src='';
}

/*screen rotate for get full screen*/
screen.orientation.addEventListener('change', function(e) { autoFullScr(); })

function autoFullScr(){
	if(screen.orientation.angle%180==0 && videoApplied && fullScr){
		fullScrPan.click();
	}else if(screen.orientation.angle%180!=0 && videoApplied && !fullScr){
		fullScrPan.click();
	}
}


function storeCurVid(){
	let data={
		name: vidSource.name,
		src: vidSource.src,
		time: video.currentTime,
	}
	data=JSON.stringify(data);
	localStorage.setItem("aiCurVid",data);
}

function showLoadingMsg(){
	curVidDataPan.elem.classList.add('active');
	let msg=["/...Please wait while loading.","/...It will be there in seconds.","/...Almost there!","/...Unfortunately It is taking longer than expected.","/...Fetching"];

	let num=0;
	funXXX();
	clearInterval(msgInterval);
	msgInterval= setInterval(funXXX,4000)
	function funXXX(){
		curVidDataPan.name.innerHTML=msg[num] || msg[4];
		curVidDataPan.sizeAndTime.innerHTML=``;
		num++;
	}
}

video.onended=()=>{
	clearInterval(videoStoringInterval);
	localStorage.removeItem("aiCurVid");
}