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
	/*Jeans*/
	`B099FCRKN6&asins=B099FCRKN6&linkId=4f74c5c6f447cb8eda6428ba37f7c5bf`,
	`B0821RYFYH&asins=B0821RYFYH&linkId=a85a981cb6f0226e7db923fd658d00bd`,
	`B0839JYY7C&asins=B0839JYY7C&linkId=a5e7808ee377e391b3024b5c59ab8eff`,

	/*toys*/
	`B0917LG43Z&asins=B0917LG43Z&linkId=a9bdc0b9277983442556b57cbfd6d08e`,
	`B07T4VDWRD&asins=B07T4VDWRD&linkId=009762b0141234d08bb8a0d7cf3bb426`,

	/*hoodie*/
	`B08T7M259Y&asins=B08T7M259Y&linkId=6b13420d041acb4c506e3ffd0dde2a5d`,
	`B08SCD1V6G&asins=B08SCD1V6G&linkId=fda65ec5a19319fad13ce965819d1a4b`,
	`B091J1ZK77&asins=B091J1ZK77&linkId=8867cc870acf384bbe534d7d42b82d24`,
	`B08XKGRCC1&asins=B08XKGRCC1&linkId=cbafd18749e897f324a612c6e4c4c3f4`,
	`B08BLQKSJZ&asins=B08BLQKSJZ&linkId=8d2383b7f51e67b9ab8ac3fb1c440a74`,
	`B08JM7TGK8&asins=B08JM7TGK8&linkId=6b79f0a4ab81f61e09aad7beefde543c`,
	
	/*Mobile*/
	`B09MKPTK2Y&asins=B09MKPTK2Y&linkId=869edf141aad5c971bfb5dcccb554f38`,
	`B09FKDH6FS&asins=B09FKDH6FS&linkId=ad31c52354666960fb81005ffda84c38`,
	`B089MTJVLD&asins=B089MTJVLD&linkId=c366f10a4285ebf5192dde62b6e928e8`,

	/*free fire & pubg*/
	`B09HL5R4SG&asins=B09HL5R4SG&linkId=85cdd31243189ef82bb0de1d1e1c8629`,
	`B09LR11YBK&asins=B09LR11YBK&linkId=8584d44c6c4fb40422f8f282bd666f06`,
	`B08DLZYNWY&asins=B08DLZYNWY&linkId=4b2109db4dcf16f16d3b0660e4e546bd`,

	/*heaters*/
	`B00ABMASXG&asins=B00ABMASXG&linkId=f030d3a2896fabe7bfc131c8c427afef`,
	`B07WMS7TWB&asins=B07WMS7TWB&linkId=7a96fbce9c018b153411ba7e6c5d50a2`,
	`B097R45BH8&asins=B097R45BH8&linkId=b073cf44b2fdf97101cd82f2e960adae`,

	/*watches*/
	`B08GSRCGRG&asins=B08GSRCGRG&linkId=7603316b9b3ec422a78b7b6068657550`,
	`B08FTFYTN8&asins=B08FTFYTN8&linkId=13e51a897276465cf32d712c22f64659`,
	`B07Q17WT6M&asins=B07Q17WT6M&linkId=2070b54221e50dd2f449b747aa6ff737`,

	/*shoes*/
	`B074WBRN4X&asins=B074WBRN4X&linkId=8c8900ea4c617ae77f97428ea66d9e40`,
	`B089QK4BTR&asins=B089QK4BTR&linkId=ddbf14c5f6aa965158f01e67ab3cc706`,

	/*earphones*/
	`B09JCFSD4Z&asins=B09JCFSD4Z&linkId=424f4242d888c2d41cf795bdd2c619d3`,
	`B09BNZLTDZ&asins=B09BNZLTDZ&linkId=4bcaa7276f5413e1894d607e7ec9b77f`,
	`B09K5HBWVL&asins=B09K5HBWVL&linkId=8b9c8a9184e44ac974d71ee5271a724e`,
	`B08XQQ1GM1&asins=B08XQQ1GM1&linkId=b3b4695ad1fb8be3e03879be1a632667`,

/*gloves*/
	`B08L6QPD8N&asins=B08L6QPD8N&linkId=3d7db260bd675a49d5ff95fd7ec315b9`,
	]
}

/*
*/
