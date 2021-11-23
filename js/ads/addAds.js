"use-strict";
let mpans=opp(".movieSubCat"),
adsSuffle=true,
ads={
	adsList:[],
	offerLinks:[],
	timer:'',
	linkAd:false,
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
		if(ads.linkAd){
			ads.head.innerHTML=`<span col="#005aff" fs="1.2em">/...Don't miss this <b>OFFERS</b> on Amazon.</span>`;
			ads.adBox.innerHTML=ads.getRandomOfferLink();
		}else{
			ads.head.innerHTML=`<span col="#005aff" fs="1.2em">/...Some greate <b>Deals</b> on Amazon.</span>`;
			ads.adBox.innerHTML=ads.getRandomBanner();
		}
		resetColS();
		setAdList();
		// ads.linkAd=!ads.linkAd;
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
		html+=getProduct(ads.adsList.splice(rand,1));
	}
	html+="</div></div>";
	return html;
}

function getProduct(lnk){
	return lnk? `<iframe style="width:120px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=${lnk[0]}&show_border=true&link_opens_in_new_window=true"></iframe>`: "";
}

function setAdList(){
	ads.offerLinks=[
	`<a target="_blank" href="https://www.amazon.in/s?k=t-shirt&amp;i=apparel&amp;rh=n%253A1571271031%252Cp_n_pct-off-with-tax%253A27060456031&amp;dc&amp;crid=33MM6ZH9OLQRD&amp;qid=1637482976&amp;rnid=2665398031&amp;sprefix=tshi%252Caps%252C564&amp;ref=sr_nr_p_n_pct-off-with-tax_5&_encoding=UTF8&tag=priyanshu07d2-21&linkCode=ur2&linkId=63dcf8e2c59c6770961456c4d9801d1a&camp=3638&creative=24630">T-Shirt : OFF 70%</a>`,

	`<a target="_blank" href="https://www.amazon.in/s?k=wireless+headphones&amp;i=electronics&amp;rh=n%253A976419031%252Cp_36%253A1318503031%252Cp_n_pct-off-with-tax%253A27060457031&amp;dc&amp;crid=HCD80LG2I85Z&amp;qid=1637483410&amp;rnid=2665398031&amp;sprefix=wireless+head%252Celectronics%252C392&amp;ref=sr_nr_p_n_pct-off-with-tax_6&_encoding=UTF8&tag=priyanshu07d2-21&linkCode=ur2&linkId=a39ee1199ed938320eed82759288018d&camp=3638&creative=24630">Headphones : OFF 50%</a>`,

	`<a target="_blank" href="https://www.amazon.in/s?k=shoes&amp;rh=n%253A1571283031%252Cp_n_pct-off-with-tax%253A27060457031&amp;dc&amp;qid=1637483696&amp;rnid=2665398031&amp;ref=sr_nr_p_n_pct-off-with-tax_6&_encoding=UTF8&tag=priyanshu07d2-21&linkCode=ur2&linkId=5b2eb7f1bcee4f0d9b4ec0c3abebe8d6&camp=3638&creative=24630">Shoes : OFF 70%</a>`,
	`<a target="_blank" href="https://www.amazon.in/s?k=keyboard+and+mouse&amp;i=computers&amp;rh=n%253A976392031%252Cp_n_pct-off-with-tax%253A2665399031&amp;dc&amp;qid=1637483885&amp;rnid=2665398031&amp;ref=sr_nr_p_n_pct-off-with-tax_1&_encoding=UTF8&tag=priyanshu07d2-21&linkCode=ur2&linkId=63272ce8342891bea7edb330a9293f04&camp=3638&creative=24630">Wireless Keyboard and mouse : OFF 40%</a>`,
	`<a target="_blank" href="https://www.amazon.in/s?k=watches&amp;i=watches&amp;rh=n%253A2563504031%252Cp_36%253A3439817031%252Cp_n_pct-off-with-tax%253A27060457031&amp;dc&amp;qid=1637483972&amp;rnid=2665398031&amp;ref=sr_nr_p_n_pct-off-with-tax_6&_encoding=UTF8&tag=priyanshu07d2-21&linkCode=ur2&linkId=885511af33ca269f12bf76190c120653&camp=3638&creative=24630">Watches OFF 70%</a>`,
	];
	ads.adsList=[
	[`B09GVN84H3&asins=B09GVN84H3&linkId=7bb1f25041d3605289ffe00d4dbf3c4b`],
	[`B078HJH76G&asins=B078HJH76G&linkId=7fed4a9ca5cc6e63523ca3936a556e84`],
	[`B08Z45LM7L&asins=B08Z45LM7L&linkId=72be6ae2c7ace4ddaa4571face43a311`],
	[`B095WXPLGC&asins=B095WXPLGC&linkId=ece1cdf0eca194a92dae1e692e4f5481`],
	/* rohit */
	[`B09GMGTGY3&asins=B09GMGTGY3&linkId=35a128994dc1dab90216323d1b9b3ccf`],
	[`B09C8SS7NQ&asins=B09C8SS7NQ&linkId=2e0af8f15c168d28a6d09a9f453de4cd`],

	[`B07F8BCHSL&asins=B07F8BCHSL&linkId=6224126a57cd1b4d46864753dad73d39`],
	[`B07GL4RYMC&asins=B07GL4RYMC&linkId=8ff07d11f7b282fc648c54bf91a817ca`],

	[`B07WVC5SKQ&asins=B07WVC5SKQ&linkId=3d1ab182828a7c835c34ab1731c10933`],
	[`B08D34RWM6&asins=B08D34RWM6&linkId=580af5db12dd46a8e34fad9e5cf175ea`],

	[`B07Z7QDH3D&asins=B07Z7QDH3D&linkId=d6baac625d5f16b8d140a02880e95a7f`],

	[`B09H3LRDN8&asins=B09H3LRDN8&linkId=bd01d7980eed83249e3a8a920a2a7153`],

	[`B07LD783TM&asins=B07LD783TM&linkId=cdcef3619ac7499d2304686706168300`],

	[`B09DLHXSHM&asins=B09DLHXSHM&linkId=31c9e56f3173cf5b671b633583c7775e`],

	[`B072N7YVCM&asins=B072N7YVCM&linkId=1ea1c57d955db89284a981fe9d57200b`],

	[`B089MTR9K7&asins=B089MTR9K7&linkId=f5fc5bfddb5f2f3dccbbbf0d7e08cb1c`],
	[`B084DS51NC&asins=B084DS51NC&linkId=f5c9c8c49a60d27d92903f31e65d1441`],
	[`B08HQL67D6&asins=B08HQL67D6&linkId=ff5c259e6f13f9f2e2bbaf850dfacadf`],
	[`B07XKNS6FF&asins=B07XKNS6FF&linkId=b511755482ed6e57c9e09a8fa9007974`],
	[`B0987BTSDV&asins=B0987BTSDV&linkId=9303c295b970ad0c11049d2202a233e9`],
	[`B07KVZD6XM&asins=B07KVZD6XM&linkId=6f0b777ff6299cfc1a0475829b4f272a`],
	[`B08P8BRWN5&asins=B08P8BRWN5&linkId=8d5c3ea38a4a5b4f1df88bd155b017e8`],
	[`B08P8BRWN5&asins=B08P8BRWN5&linkId=8d5c3ea38a4a5b4f1df88bd155b017e8`],
	]
}

/*
*/
