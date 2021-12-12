"use-strict";
let mpans=opp(".movieSubCat"),
adsSuffle=true,
ads={
	adsList:[],
	timer:'',
	vidInPan: op(".vidInAds"),
	head: op(".vidInAds .head"),
	adBox: op(".vidInAds .ads"),
	adSkiper: op("#adSkiper"),

	start: ()=>{
		setTimeout(()=>{ads.addAdsInVid();},8*60*1000)

		ads.timer=setTimeout(()=>{
			ads.showAdInVid();
		},(10+Math.ceil(Math.random()*5))*60*1000)
	},
	close: ()=>{
		clearTimeout(ads.timer);
	},
	showAdInVid: ()=>{
		ads.setSkipper();
		ads.vidInPan.classList.add("active");
		playing?playPause():'';
		send("Shown ad in video: "+opp(".ads iframe").length);
	},
	hideAdInVid: ()=>{
		ads.vidInPan.classList.remove("active");
		playing?'':playPause();
		ads.start();
	},
	addAdsInVid: ()=>{
		setAdList();
		ads.head.innerHTML=`<span col="#005aff" fs="1.2em">/...Some great <b>Deals</b> on Amazon.</span>`;
		ads.adBox.innerHTML=ads.getRandomBanner();
		resetColS();
	},

	getRandomOfferLink:()=>{
		let html="<ol>";
		for(let i=0; i<5; i++){
			let amalnk=ads.offerLinks.splice(Math.floor(Math.random()*(5-i)),1);
			html+=`<li>${amalnk}</li>`;
		}
		html+="</ol>";
		return html;
	},
	getRandomBanner:()=>{
		let html='<div>',
		space=Math.floor(video.offsetWidth * 90/100);
		for(let i=0; i< space; i+=250){
			let amalnk=ads.adsList.splice(Math.floor(Math.random()*(ads.adsList.length)),1)[0];
			html+=getProduct(amalnk);
		}
		html+="</div>";
		return html;
	},
	setSkipper:()=>{
		function funxx(){
			ads.adSkiper.innerHTML=`Skip in ${timerxx}s`;
			timerxx--;
			if(timerxx==0){
				clearInterval(intxx);
				ads.adSkiper.classList.add("active");
				ads.adSkiper.innerHTML=`Skip Ad`;
			}
		}
		ads.adSkiper.classList.remove("active");
		let timerxx=4+Math.ceil(Math.random()*4),
		intxx;
		funxx();
		intxx=setInterval(funxx,1000);
	}
};
setAdList();

/*for below movie ads*/
for(let a=0; a<mpans.length -1; a++){
	var pan=getPan(a+1);
	mpans[a].insertAdjacentHTML("afterend",pan);
}


function getPan(cat){
	var html=`<div class="movieSubCat adPan"><div class="subCatMovieList flex">`;
	for(let i=1; i<=5; i++){
		let rand=adsSuffle?Math.floor(Math.random()*ads.adsList.length) : 0;
		html+=getProduct(ads.adsList.splice(rand,1)[0]);
	}
	html+="</div></div>";
	return html;
}

function getProduct(lnk){
	log(lnk);
	return lnk? `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu002b-21&language=en_IN&marketplace=amazon&region=IN&placement=${lnk}&show_border=true&link_opens_in_new_window=true"></iframe>`: "";
}


function setAdList(){
	ads.offerLinks=[];
	ads.adsList=[
	/*bags*/
	`B07Q7CNPMV&asins=B07Q7CNPMV&linkId=ce4a741e41ff5cd8edfef85366f00134`,
	`B088XH1BP7&asins=B088XH1BP7&linkId=7abf18a365221a3acb34524c3302cc2a`,

	/*heaters*/
	`B00ABMASXG&asins=B00ABMASXG&linkId=f030d3a2896fabe7bfc131c8c427afef`,
	`B07WMS7TWB&asins=B07WMS7TWB&linkId=7a96fbce9c018b153411ba7e6c5d50a2`,
	`B097R45BH8&asins=B097R45BH8&linkId=b073cf44b2fdf97101cd82f2e960adae`,

	/*blankets*/
	`B098YPMXT9&asins=B098YPMXT9&linkId=2abb379adb376a02694deb662d905622`,
	`B081RNP84H&asins=B081RNP84H&linkId=e9c9a217b78f604372fe33794260b0f1`,

	/*watches*/
	`B08FTFYTN8&asins=B08FTFYTN8&linkId=13e51a897276465cf32d712c22f64659`,
	`B07Q17WT6M&asins=B07Q17WT6M&linkId=2070b54221e50dd2f449b747aa6ff737`,
	`B09KPQNF6Q&asins=B09KPQNF6Q&linkId=7c314c9898f56a4f70bf04bd75f5af05`,
	`B07WTHFBQS&asins=B07WTHFBQS&linkId=f82896b50a1d5643e1b667b891aecc70`,

	/*shoes*/
	`B074WBRN4X&asins=B074WBRN4X&linkId=8c8900ea4c617ae77f97428ea66d9e40`,
	`B089QK4BTR&asins=B089QK4BTR&linkId=ddbf14c5f6aa965158f01e67ab3cc706`,

	/*earphones*/
	`B09JCFSD4Z&asins=B09JCFSD4Z&linkId=424f4242d888c2d41cf795bdd2c619d3`,
	`B09BNZLTDZ&asins=B09BNZLTDZ&linkId=4bcaa7276f5413e1894d607e7ec9b77f`,
	`B09K5HBWVL&asins=B09K5HBWVL&linkId=8b9c8a9184e44ac974d71ee5271a724e`,
	`B08XQQ1GM1&asins=B08XQQ1GM1&linkId=b3b4695ad1fb8be3e03879be1a632667`,

	/*hoodie*/
	`B08M47B44S&asins=B08M47B44S&linkId=8c10a67ba490abf56d8c2005d779a3fc`,
	`B08263JLMQ&asins=B08263JLMQ&linkId=6ac605aa0cc70a40a5958a15fa780c7c`,
	`B07ZVH9Z9X&asins=B07ZVH9Z9X&linkId=f9b827b09358a1b2b9d7198d38b54990`,

/*gloves*/
	`B08L6QPD8N&asins=B08L6QPD8N&linkId=3d7db260bd675a49d5ff95fd7ec315b9`,
	]
}

/*
*/
