var log=console.log;

let movieListPan=op(".moviesList");
/*give the next index 29*/
let movies={
Newly_Added,
Bollywood:[
/*["name","link",1],*/

["Shiddat",`${mainSite}/BollyWood/hotstar/Shiddat.2021/Shiddat.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,28],

["PM Narendra Modi",`${mainSite}/BollyWood/MX.Player/PM.Narendra.Modi.2021/PM.Narendra.Modi.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,23],

["Ankahi Kahaniya",`${mainSite}/BollyWood/NetFlix/Ankahi.Kahaniya.2021/Ankahi.Kahaniya.2021.WebRip.480p.Hindi.DD.5.1.x264.ESub-DudeFilms.in.mkv`,21],

// ["Bell Bottom",`${mainSite}/BollyWood/Amazon.Prime/Bell.Bottom.2021/Bell.Bottom.2021.480p.Hindi.WEB-DL.ESub.x264-DudeFilms.co.mkv`,20],

["Kya Meri Sonam Gupta Bewafa Hai",`${mainSite}/BollyWood/Zee5/Kya.Meri.Sonam.Gupta.Bewafa.Hai2021/Kya.Meri.Sonam.Gupta.Bewafa.Hai.2021.Hindi.480p.WEB-DL.x264-DudeFilms.co.mkv`,19],

["Bhoot Police",`${mainSite}/BollyWood/Hotstar/Bhoot.Police.2021/Bhoot.Police.2021.Hindi.480p.WEB-DL.DD5.1.ESub.x264-DudeFilms.co.mkv`,18],

	["Bhuj The Pride of India","https://pagalfilm.rest/load/Bollywood New Films/Bhuj The Pride of India 2021 Full Movie/Bhuj The Pride of India Hindi 2021 Hdrip.mkv",1],

	["Shershaah","https://pagalfilm.rest/load/Bollywood New Films/Shershaah 2021 Full Movie/Shershaah 2021 Hindi Hdrip.mkv",2],

	["Mimi","https://pagalfilm.rest/load/Bollywood New Films/Mimi 2021 Full Movie/Mimi 2021 HDRip.mkv",3],

	["Hungama 2","https://pagalfilm.rest/load/Bollywood New Films/Hungama 2 2021 Full Movie/Hungama 2 2021 Hindi Hdrip.mkv",4],

	["14 Phere","https://pagalfilm.rest/load/Bollywood New Films/14 Phere 2021 Full Movie/14 Phere 2021 Hindi Hdrip.mkv",5],

	["Sherni","https://pagalfilm.rest/load/Bollywood New Films/Sherni 2021 Hindi Full Movie/Sherni 2021 Hindi Hdrip.mkv",6],

	["Pagglait","https://pagalfilm.rest/load/Bollywood New Films/Pagglait Hindi 2021 Full Movie/Pagglait Hindi 2021 Hdrip.mkv",7],

	["Koi Jaane Na","https://pagalfilm.rest/load/Bollywood New Films/Koi Jaane Na Hindi 2021 Full Movie/Koi Jaane Na Hindi 2021 Hdrip.mkv",8],

	["Madam Chief Minister","https://pagalfilm.rest/load/Bollywood New Films/Madam Chief Minister 2021 Full Movie/Madam Chief Minister Hindi 2021 720 Hdrip.mkv",9],

	["Sardar Ka Grandson","https://pagalfilm.rest/load/Bollywood New Films/Sardar Ka Grandson Full Movie/Sardar Ka Grandson 2021 720p Hdrip.mkv",10],

	["Radhe","https://pagalfilm.rest/load/Bollywood New Films/Radhe 2021 Hindi Full Movie/Radhe 2021 Hindi 720 Hdrip.mkv",11],

],
/*
South_Indian:[
	["Koi Jaane Na","https://pagalfilm.rest/load/Bollywood New Films/Koi Jaane Na Hindi 2021 Full Movie/Koi Jaane Na Hindi 2021 Hdrip.mkv",1],

	["Madam Chief Minister","https://pagalfilm.rest/load/Bollywood New Films/Madam Chief Minister 2021 Full Movie/Madam Chief Minister Hindi 2021 720 Hdrip.mkv",1],

	["Sardar Ka Grandson","https://pagalfilm.rest/load/Bollywood New Films/Sardar Ka Grandson Full Movie/Sardar Ka Grandson 2021 720p Hdrip.mkv",1],

	["Radhe","https://pagalfilm.rest/load/Bollywood New Films/Radhe 2021 Hindi Full Movie/Radhe 2021 Hindi 720 Hdrip.mkv",1],
],*/
English_Movies_hindi_dubbed:[
/*["name","link",1],*/

["There’s Someone Inside Your House",`${mainSite}/HollyWood/NetFlix/There%E2%80%99s.Someone.Inside.Your.House.2021/There%E2%80%99s.Someone.Inside.Your.House.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,29],

["Run Hide Fight",`${mainSite}/hollywood/Run.Hide.Fight.2021/Run.Hide.Fight.2021.Hindi-English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,27,"https://bit.ly/3A08cn"],

["Sounds Like Love",`${mainSite}/hollywood/NetFlix%20Movies/Sounds.Like.Love2021/Sounds.Like.Love.2021.Dual.Audio.Hindi-English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,26],

["Free Guy",`${mainSite}/HollyWood/Free.Guy.2021.HDCAM/Free.Guy.2021.Dual.Audio.Hindi.English.480p.HDCAM-DudeFilms.in.mkv`,22],

	["Blue Miracle","https://pagalfilm.rest/load/Hindi Dubbed New Movies/Blue Miracle 2021 Hindi Dubbed Full Movie/Blue Miracle Hindi Dubbed Hdrip.mkv",12],

	["Red","https://pagalfilm.rest/load/Hindi Dubbed New Movies/Red 2021 Hindi Dubbed Full Movie/Red 2021 Hindi Hdrip.mkv",14],

	["The Wife","https://pagalfilm.rest/load/Hindi Dubbed New Movies/The Wife 2021 Hindi Dubbed Full Movie/The Wife 2021 Hindi Dubbed Hdrip.mkv",15],
],
};

let movieHTML=`<div class="realMovieHead center">Top <span col='#e73070'>New Movies & Web Series</span> here free.</div>
	<div class="flex menuBtn">
		<a href="#Bollywood"><button class="flex">Bollywood</button></a>
		<a href="#English_Movies_hindi_dubbed"><button class="flex">English Movies</button></a>
		<a href="#WebSeries"><button class="flex">Web Series</button></a>
	</div>
<div class="realMovieList">`;

var mnum=1;
for(let val in movies){
	let catName=val.replaceAll("_"," ");
	movieHTML+=`<div class="movieSubCat" id="${val}" style="--i: ${mnum};">
		<div class="subCatHead" ff="glory">${catName}</div>
		<div class="subCatMovieList flex">
			${getsubCatMoviesList(val)}
		</div>
	</div>`;
	mnum++;
}

function getsubCatMoviesList(subCat){
	let htmlXX=``;

	for(let val of movies[subCat]){
		let time=null;
		let onclickAttrxx=`onclick="setMovie('${val[1]}',${val[2]},'${val[0]}')"`;

		htmlXX+=`
		<div class="movie flex" ${onclickAttrxx} mid="${val[2]}" mlnk="${val[1]}">
			<div class="nameSize">
				<h4>${val[0]}</h4>

				<div class="curData flex">
					<div class="left flex">
						${time?`<i></i><span>${getMinSec(time)}</span>`:''}
					</div>
				</div>
			</div>
			<div class="btns">
				<button title="copy link" class="flex getLink">${elems.share}<span style="display: none;">${val[0]}</span></button>
				<button class="flex" ${onclickAttrxx} title="play">${elems.play}<span style="display: none;">${val[0]}</span></button>
				<button onclick="checkDownTrue(this.children[0]);">
					<a href="${val[1]}" download='${val[0]}' onclick="sendDownInfo('${val[0]}')"><span style="display: none;">${val[0]}</span></a>
					${elems.download}
				</button>
			</div>
		</div>`;
		mnum++;
	}
	return htmlXX;
}
addWebSeries();
movieHTML+="</div>";

movieListPan.innerHTML=movieHTML;

opp(".movie .btns").forEach(val=>{
	val.addEventListener("click",e=>{
		e.stopPropagation();
	})
})

movieListPan=op(".realMovieList");

resetColS();

opp(".getLink").forEach(val=>{
	val.addEventListener("click",e=>{
		e.stopPropagation();
		let link=val.closest(".movie").getAttribute("mid");
		copy(getURI()+`?mid=${link}`);
	})
})

function setMovie(lnk,mid,name){
	let src=lnk;
	vidSource={
		name,
		src
	}

	load.show();
	linkPaste('remove');
	setLink(vidSource.src);
	window.scrollTo(0,0);
}

let mid='',mlnk,sh,ws,mname;
var search=decodeURI(location.search.replace("?",''));
search=search.split('&');
for(let a=0; a<search.length; a++){
	eval(search[a])
}

try{history.replaceState('/','/','/');}catch{}


var vidSource={};
if(ws){
	vidSource={
		name:mname,
		src:mlnk
	}
	log(vidSource);

	load.show();
	// linkPaste('remove');
	setLink(vidSource.src);
}
else if(mlnk){
	setTimeout(()=>{
		link.input.value=mlnk;link.btn.click();
	},500)
}
localStorage.removeItem("aiCurVid");


function copy(txt) {
	let elem=document.createElement("input");
	document.body.insertAdjacentElement("beforeend",elem)
	elem.value=txt;
  elem.select();
  elem.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  navigator.clipboard.writeText(elem.value);
  elem.remove();
  alert("Link copied successfully!")
}
function sendDownInfo(data){
	try{send("DOWN:"+data)}catch{}
}

function addWebSeries(){
	let seriesList=[
		// ["Midnight Mass","https://bit.ly/3EUO9Mk"],
		["Kota Factory season 2","https://bit.ly/3ALcKAB"],
		["House of Secrets","https://bit.ly/3v3bYNt"]
		/*["Web Series 3","imglink"],*/
	]

	movieHTML+=`<div id="WebSeries" class="movieSubCat" style="--i: 0;">
		<div class="subCatHead" ff="glory">Web Series</div>
		<div class="subCatMovieList flex">
			${getWebSeriesList()}
		</div>
	</div>`;

	function getWebSeriesList(){
		let htmlxx=``;
		seriesList.map((val,num)=>{
		htmlxx+=`
			<div class="poster flex c" ff="glory" onclick="this.children[2].click()">
			  <img class="w100p" src="${val[1]}" alt="${val[0]}">
			  <div class="data flex">
			    <div class="name" fs=".9em">${val[0]}</div>
			  </div>
			  <a href="webseries/index.html?ws='${val[0]}'" hidden></a>
			</div>`;
		});
		return htmlxx;
	}

}

function getURI(){
	return document.URL.split('#')[0];
}

function checkDownTrue(elem){
	if(isDownLoaded()){
		elem.click();
	}else{
		dialog.inside(`<span col="#444" ff="glory">Open in App to enable downloading feature.</span>`)
		dialog.buttons("Close","Ok");
		dialog.show();
		dialog.success=()=>{
			if(readyToDownload){
				downBtn1.click();
			}
		}
	}
}
