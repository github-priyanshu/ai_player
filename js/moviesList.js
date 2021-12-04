var log=console.log,
serverError=true;

let movieListPan=op(".moviesList"),
maxNew=Math.floor(window.innerWidth / 170 * 2 + 2);

let movies={
Newly_Added:[],
Bollywood:[],
South_Indian:[],
English_Movies_hindi_dubbed:[],
};

for(let i=0; i<allMovies.length; i++){
	let key=["Bollywood","South_Indian","English_Movies_hindi_dubbed"],
	cat=allMovies[i][4];
	movies[key[cat-1]].push(allMovies[i]);
	if(i<=maxNew){
		movies.Newly_Added.push(allMovies[i]);
	}
}

let movieHTML=`<div class="realMovieHead center">${serverError ?`<span col='#e73070'>/... Problem</span> <br> <span fs=".8em" col="#111">Movies are currently unavailable. The problem will be resolved very soon.</span>`:"Top <span col='#e73070'>New Movies & Web Series</span> here free."}</div>
	<div class="flex menuBtn frw">
		<a href="#Bollywood"><button class="flex">Bollywood</button></a>
		<a href="#English_Movies_hindi_dubbed"><button class="flex">English Movies</button></a>
		<a href="#WebSeries"><button class="flex">Web Series</button></a>
	</div>
<div class="realMovieList">`;

var mnum=1;
for(let val in movies){
	if(movies[val].length!=0){
		let catName=val.replaceAll("_"," ");
		movieHTML+=`<div class="movieSubCat" id="${val}" style="--i: ${mnum};">
			<div class="subCatHead" ff="glory">${catName}</div>
			<div class="subCatMovieList flex">
				${getsubCatMoviesList(val)}
			</div>
		</div>`;
		mnum++;
	}
}

function getsubCatMoviesList(subCat){
	let htmlXX=``;

	for(let val of movies[subCat]){
		let time=null;
		let onclickAttrxx=`onclick="setMovie('${val[1]}',${val[2]},'${val[0]}')"`;

		htmlXX+=`
		<div class="movie flex ${val[3]!="false"? "poster":''}" ${onclickAttrxx} mid="${val[2]}" mlnk="${val[1]}">
			${val[3]!="false"? `<div class="moviePoster w100p"><img rel="nofollow" alt='${val[0]}' loading="lazy" src="${val[3]}"></div>`: ""}

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
					<a href="${val[1]}" rel="nofollow" download='${val[0]}' onclick="sendDownInfo('${val[0]}')"><span style="display: none;">${val[0]}</span></a>
					${elems.download}
				</button>
			</div>
		</div>`;
		mnum++;
	}
	return htmlXX;
}
movieHTML+="</div>";

movieListPan.innerHTML=movieHTML;
addWebSeries();

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
		src:mlnk.replace("__wsdomain",mainSite)
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
	op("#Newly_Added").insertAdjacentHTML("afterend",`<div id="WebSeries" class="movieSubCat" style="--i: 0;">
		<div class="subCatHead" ff="glory">Web Series</div>
		<div class="subCatMovieList flex">
			${getWebSeriesList()}
		</div>
	</div>`);

	function getWebSeriesList(){
		let htmlxx=``;
		webseries.map((val,num)=>{
		htmlxx+=`
			<div class="poster flex c" ff="glory" onclick="this.children[2].click()">
			  <img rel="nofollow" loading="lazy" class="w100p" src="${val[2]}" alt="${val[0]}">
			  <div class="data flex">
			    <div class="name" fs=".9em">${val[0]}</div>
			  </div>
			  <a href="webseries/index.html?ws='${val[0]}'&lnk='${val[4]}'&episodes='${val[3]}'&imgLnk='${val[2]}'" hidden></a>
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
		dialog.inside(`<div fs="1.2em" col="#ff0059">/...Download App</div><span col="#444" ff="glory">Open in App to enable downloading feature.</span><br><span col="#000">Click on install.</span>`)
		dialog.buttons("Close","Ok");
		dialog.show();
		dialog.hide=()=>{
			dgbx.classList.remove("active");
			if(readyToDownload){
				downBtn1.click();
			}
			dialog.hide=()=>{dgbx.classList.remove("active");}
		}
		dialog.success=()=>{
			if(readyToDownload){
				downBtn1.click();
			}
		}
	}
}

function addShowMore(){
	var newAdded=opp(".subCatMovieList");
	var htmlxx=`<div class="showMoreBtn active flex" onclick="showAll.show()"><span>Show More</span></div>`;
	for(let val of newAdded){
		val.insertAdjacentHTML("beforeend",htmlxx);
	}
}
addShowMore();
