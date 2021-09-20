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

var vidSource={},
timeChInterval,
vidDuration,
videoApplied=false;

/*get player start*/
function checkBuffering(){
	log(video.buffered.end(0))
}

function linkPaste(whatDo="add"){
	link.pan.classList[whatDo]('active')
}

function importViaLink(){
	vidSource={
		name:decodeURI(link.input.value),
		src:link.input.value
	}
	load.show();
	linkPaste('remove');
	setLink(vidSource.src)
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
	}else{
		alert("You are offline!");
		stopPlaying();
	}

}

function notLoaded(){
	if(video.readyState==4){
		load.hide();
		// loded stop loading animation
	}else{
		load.show();
		// not loded start loading animaiton
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
		applyVideo()	
	}
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
		checkBuffering();
	},1000)
	showDataForUser();

	document.title=vidSource.name+" : Ai-Player"
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

	window.onhashchange=(e)=>{
		if(location.hash!="#watching"){
			stopPlaying();
		}
	}
}

function stopPlaying(){
	vidSource={},
	timeChInterval,
	vidDuration,
	videoApplied=false;

	clearInterval(timeChInterval)
	/*show intro*/

	op(".banner").style.display="";
	videoBox.classList.remove("active");
	curVidDataPan.elem.classList.remove("active")
	video.src='';
}

/*screen rotate for get full screen*/
window.onresize=autoFullScr;
document.onresize=autoFullScr;
function autoFullScr(){
	log(window.innerWidth> window.innerHeight && videoApplied)
	if(window.innerWidth> window.innerHeight && videoApplied && !fullScr){
		fullScrPan.click();
	}
	if(window.innerWidth< window.innerHeight && videoApplied && fullScr){
		fullScrPan.click();
	}
}