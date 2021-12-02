var closeIco=op(".closeIco"),
allMvPan=op(".allMv"),
srhIco= op(".srhIco"),
allSrPan=op(".allSr"),
srhBtn=op("#srhBtn");

srhBtn.innerHTML=elems.search+" Search";
closeIco.innerHTML=elems.cut;

var showAll={
	pan: op(".showAllPan"),
	search:()=>{
		showAll.show();
		search.in.focus();
	},
	show:()=>{
		location.assign("#search");
		setTimeout(()=>{showAll.pan.classList.add("active");},100);
	},
	close:()=>{
		try{send(search.in.value)}catch{};
		location.assign("#");
		if(location.hash!="search"){
			showAll.pan.classList.remove("active");
		}
	},
	hide:()=>{
		search.resetSearch();
		showAll.pan.classList.remove("active");
	},

	set:()=>{
		let allMovieHtml="";
		for(let val of allMovies){
			let onclickAttrxx=`onclick="setMovie('${val[1]}',${val[2]},'${val[0]}');showAll.close()"`;

				allMovieHtml+=`
				<div class="movie flex poster" ${onclickAttrxx} mid="${val[2]}" mlnk="${val[1]}">
					<div class="nameSize">
						<h4>${val[0]}</h4>
					</div>
				</div>`;
		}
		allMvPan.innerHTML=allMovieHtml;

		allMovieHtml="";
		for(let val of webseries){
			let onclickAttrxx=`onclick="setMovie('${val[1]}',${val[2]},'${val[0]}');showAll.close()"`;

				allMovieHtml+=`
				<div class="movie flex poster" onclick="this.children[1].click()">
					  <div class="nameSize">
					    <h4>${val[0]}</h4>
					  </div>
					  <a href="webseries/index.html?ws='${val[0]}'&lnk='${val[4]}'&episodes='${val[3]}'&imgLnk='${val[2]}'" hidden></a>
					</div>`;
		}
		allSrPan.innerHTML=allMovieHtml;
	},
}

var search={
	in: op("#srh"),
	srhTime:"",
	resetSearch:()=>{
		search.in.value="";
		search.doSearch();
		search.makeSrhIco();
	},
	makeSrhIco:()=>{
		srhIco.innerHTML=elems[search.in.value==""? "search": "cut"];
	},
	init:()=>{
		search.in.addEventListener('input',()=>{
			clearTimeout(search.srhTimer);
			search.srhTimer=setTimeout(search.doSearch,200);
			search.makeSrhIco();
		});
	},
	doSearch: ()=>{
		var term=search.in.value,
		allVals=opp(".showAllPan .nameSize h4");

		for(let val of allVals){
			if(val.innerText.toLocaleLowerCase().includes(term)){
				val.parentElement.parentElement.style.display="";
			}else{
				val.parentElement.parentElement.style.display="none";
			}
		}

	}
}



showAll.set();
search.init();
search.makeSrhIco();
