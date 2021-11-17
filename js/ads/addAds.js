"use-strict";
let mpans=opp(".movieSubCat"),
adsList=[];

setAdList();

for(let a=0; a<mpans.length -1; a++){
	var pan=getPan(a+1);
	mpans[a].insertAdjacentHTML("afterend",pan);
}

function getPan(cat){
	var html=`<div class="movieSubCat adPan"><div class="subCatMovieList flex">`;
	for(let i=1; i<=2; i++){
		let rand=Math.floor(Math.random()*adsList.length);
		html+=getProduct(adsList.splice(rand,1));
	}
	html+="</div></div>";
	return html;
}

function getProduct(lnk){
	return lnk? `<iframe style="width:120px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="${lnk[0]}"></iframe>`: "";
}

function setAdList(){
	adsList=[
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B09H3LRDN8&asins=B09H3LRDN8&linkId=bd01d7980eed83249e3a8a920a2a7153&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B07LD783TM&asins=B07LD783TM&linkId=cdcef3619ac7499d2304686706168300&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B09DLHXSHM&asins=B09DLHXSHM&linkId=31c9e56f3173cf5b671b633583c7775e&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B09DXKRWNB&asins=B09DXKRWNB&linkId=02e104de43370d678997330f87ba53fe&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B072N7YVCM&asins=B072N7YVCM&linkId=1ea1c57d955db89284a981fe9d57200b&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B072N7YVCM&asins=B072N7YVCM&linkId=1ea1c57d955db89284a981fe9d57200b&show_border=true&link_opens_in_new_window=true`],

	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B089MTR9K7&asins=B089MTR9K7&linkId=f5fc5bfddb5f2f3dccbbbf0d7e08cb1c&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B084DS51NC&asins=B084DS51NC&linkId=f5c9c8c49a60d27d92903f31e65d1441&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B08HQL67D6&asins=B08HQL67D6&linkId=ff5c259e6f13f9f2e2bbaf850dfacadf&show_border=true&link_opens_in_new_window=true`],/*
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B07XKNS6FF&asins=B07XKNS6FF&linkId=b511755482ed6e57c9e09a8fa9007974&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B0987BTSDV&asins=B0987BTSDV&linkId=9303c295b970ad0c11049d2202a233e9&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B07KVZD6XM&asins=B07KVZD6XM&linkId=6f0b777ff6299cfc1a0475829b4f272a&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B08P8BRWN5&asins=B08P8BRWN5&linkId=8d5c3ea38a4a5b4f1df88bd155b017e8&show_border=true&link_opens_in_new_window=true`],
	[`//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu07d2-21&language=en_IN&marketplace=amazon&region=IN&placement=B08P8BRWN5&asins=B08P8BRWN5&linkId=8d5c3ea38a4a5b4f1df88bd155b017e8&show_border=true&link_opens_in_new_window=true`],*/
	]
}

/*
*/
