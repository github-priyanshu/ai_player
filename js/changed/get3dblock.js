let bannerRotated=0,
bannerBox=op(".bannerBox"),
mainSite="https://dl.gdc05.workers.dev/0:";


/*
give the next index 47

bollywood=1
southMovies=2
engMovieHindiDubbed=3

*/
var allMovies=[
/*['name',`${mainSite}lnk`,mid,'img',cat],*/
['Waah Zindagi',`${mainSite}/BollyWood/Zee5/Waah.Zindagi.2021/Waah.Zindagi.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,74,'https://bit.ly/32IPreN',1],
['83',`${mainSite}/BollyWood/83.2021.HDCam/83.2021.Hindi.480p.Pre.DVDRip-DudeFilms.in.mkv`,73,'https://bit.ly/3przmmP',1],
['Encanto',`${mainSite}/HollyWood/Encanto.2021/Encanto.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,72,'https://bit.ly/3mxW3nk', 3],
['Minnal Murali',`${mainSite}/SouthMovies/Minnal.Murali.2021/Minnal.Murali.2021.Hindi-Malayalam.480p.WEB-DL.ESub-DudeFilms.in.mkv`,71,'https://bit.ly/3sNMUev', 3],
['Atrangi Re',`${mainSite}/BollyWood/hotstar/Atrangi.Re.2021/Atrangi.Re.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,70,'https://bit.ly/33WZsFR', 1],
['Switchh',`${mainSite}/BollyWood/Switchh.2021/Switchh.2021.Hindi.480p.WEB-DL-DudeFilms.in.mkv`,69,'https://bit.ly/3EtC9jo', 1],
['The Matrix',`${mainSite}/HollyWood/The.Matrix.Resurrections.2021/The.Matrix.Resurrections.2021.480p.WEBRip.Hindi.CAM-English.ESub.x264-DudeFilms.in.mkv`,68,'https://bit.ly/3qli5uv', 3],
['Resident Evil...Raccoon',`${mainSite}/HollyWood/Resident.Evil.Welcome.to.Raccoon.City.2021/Resident.Evil.Welcome.to.Raccoon.City.2021.Hindi(CAM)-English.480p.BluRay.ESub-DudeFilms.in.mkv`,67,'https://bit.ly/3swIsk7', 3],
['Shock Wave',`${mainSite}/HollyWood/Shock.Wave.2.2020/Shock.Wave.2.2020.Hindi.Chinese.480p.BluRay.ESub-DudeFilms.in.mkv`,66,'https://bit.ly/3es8E6V', 3],
['Pushpa',`${mainSite}/South.Movies/Pushpa.The.Rise-Part.1.2021.HDCam/Pushpa.The.Rise-Part.1.2021.480p.Hindi.V2.HDCAMRip.x264-DudeFilms.in.mkv`,65,'https://bit.ly/3IY2pWB',2],
['420 IPC',`${mainSite}/BollyWood/Zee5/420.IPC.2021/420.IPC.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,64,'https://bit.ly/3p3mBhT',1],
['Marakkar Arab Sagar',`${mainSite}/South.Movies/Marakkar.Arab.Sagar.Ka.Sher.2021/Marakkar.Arab.Sagar.Ka.Sher.2021.Hindi.Malayalam.480p.WEB-DL.ESub-DudeFilms.in.mkv`,63,'https://bit.ly/3IWOY9s',2],
['Spider-Man No Way Home',`${mainSite}/HollyWood/Spider-Man.No.Way.Home.2021.CamRip/Spider.Man.No.Way.Home.2021.Hindi.English.480p.CAMRip-DudeFilms.in.mkv`,62,'https://bit.ly/30wVbaR',3],
['Kurup',`${mainSite}/South.Movies/Kurup.2021/Kurup.2021.480p.WEB-DL.Hindi.DD5.1-Malayalam.ESub.x264-DudeFilms.in.mkv`,61,'https://bit.ly/30xggSp',2],
['Chandigarh Kare Aashiqui',`${mainSite}/BollyWood/Chandigarh.Kare.Aashiqui.2021.PreDVD/Chandigarh.Kare.Aashiqui.2021.Hindi.480p.Pre-DVDRip-DudeFilms.in.mkv`,60,'https://bit.ly/3pL0Fr4',1],
['Tadap',`${mainSite}/BollyWood/Tadap.2021.HDcam/Tadap.2021.Hindi.480p.HQ.PreDVD.Rip.x264.AAC-DudeFilms.in.mkv`,59,'https://bit.ly/32SRNYt',1],
['Bom Biswas',`${mainSite}/BollyWood/Zee5/Bob.Biswas.2021/Bob.Biswas.2021.480p.ZEE5.WEB-DL.Esub-DudeFilms.in.mkv`,58,'https://bit.ly/3IfgpLj',1],
['Nothing Is Impossible',`${mainSite}/HollyWood/NetFlix/14.Peaks.Nothing.Is.Impossible.2021/14.Peaks.Nothing.Is.Impossible.2021.480p.WEBRip.Hindi.English.Esubs-DudeFilms.in.mkv`,57,'https://bit.ly/3177A5K',3],
['Night of The Sicario',`${mainSite}/HollyWood/Night.of.The.Sicario.2021/Night.of.The.Sicario.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,56,'https://bit.ly/3d0iuMV',3],
['Chhorii',`${mainSite}/BollyWood/Amazon.Prime/Chhorii.2021/Chhorii.2021.480p.WEB-DL.x264.Hindi.AAC5.1.ESubs%20-DudeFilms.in.mkv`,55,'https://bit.ly/3xqWsMF',1],
['A Castle For Christmas',`${mainSite}/HollyWood/NetFlix/A.Castle.For.Christmas.2021/A.Castle.For.Christmas.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,54,'https://bit.ly/3CW2CW7',3],
['Antim',`${mainSite}/BollyWood/Antim.The.Final.Truth.2021.HDCAMRip/Antim.The.Final.Truth.2021.480p.HDCAMRip.HINDI-DudeFilms.in.mkv`,53,'https://bit.ly/3184Gxb',1],
['Fast and Furios 9',`${mainSite}/HollyWood/F9.Hindi.ORG/Fast-9.2021.480p.BluRay.Hindi-English.DD5.1.ESub.x264-DudeFilms.in.mkv`,52,'https://bit.ly/3nUItLY',3],
['Satyameva Jayate 2',`${mainSite}/BollyWood/Satyameva.Jayate.2.2021.HDcam/Satyameva.Jayate.2.2021.Hindi.720p.HQPreDVDRipx264.AAC-DudeFilms.in.mkv`,51,'https://bit.ly/3HP6bRP',1],
['Annaatthe',`${mainSite}/South.Movies/Annaatthe.2021/Annaatthe.2021.Hindi-Tamil.DD5.1.480p.WEB-DL.x264-DudeFilms.in.mkv`,50,'https://bit.ly/3FQBCcD',2],
['A Boy ... Christmas',`${mainSite}/HollyWood/NetFlix/A.Boy.Called.Christmas.2021/A.Boy.Called.Christmas.2021.480p.WEBRRip.Hindi.English.Esubs-DudeFilms.in.mkv`,49,'https://bit.ly/3cLPEiW',3],
['Bruised',`${mainSite}/HollyWood/NetFlix/Bruised.2021/Bruised.2021.480p.WEBRRip.Hindi.English.Esubs-DudeFilms.in.mkv`,48,'https://bit.ly/311qeew',3],
['Dhummas',`${mainSite}/Gujarati/Dhummas.2021/Dhummas.2021.Gujarati.480p.HDrip.x264.ESubs-DudeFilms.in.mkv`,47,'https://bit.ly/3HSsKoI',1],
['Bunty Aur Babli 2021',`${mainSite}/BollyWood/Bunty.Aur.Babli.2021.HDCamRip/Bunty.Aur.Babli.2021.480p.CAMRip.HINDI-DudeFilms.in.mkv`,46,'https://bit.ly/3DCM9al',1],
['Cash: NOTE-BANDI',`${mainSite}/BollyWood/hotstar/Cash.2021/Cash.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,45,'https://bit.ly/3FB7dPa',1],

['Dhamaka',`${mainSite}/BollyWood/NetFlix/Dhamaka.2021/Dhamaka.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,44,'https://bit.ly/3DOhveB',1],
['Home Sweet Home Alone',`${mainSite}/HollyWood/Disney+/Home.Sweet.Home.Alone.2021/Home.Sweet.Home.Alone.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,43,'https://bit.ly/3CeZfcy',3],
['Red Notice',`${mainSite}/HollyWood/NetFlix/Red.Notice.2021/Red.Notice.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,42,'https://bit.ly/30tkFG2',3],
['Shang-Chi',`${mainSite}/HollyWood/Shang.Chi.2021/Shang.Chi.2021.480p.BluRay.Hindi.Clean-English.ESub.x264-DudeFilms.in.mkv`,41,'https://bit.ly/3c26NVy',3],
['Gully Rowdy',`${mainSite}/South.Movies/Gully.Rowdy.2021/Gully.Rowdy.2021.Hindi-Telugu.480p.HDRip.ESub-DudeFilms.in.mkv`,40,'https://bit.ly/3kt6bwC',2],
['No Time To Die',`${mainSite}/HollyWood/No.Time.To.Die.2021/No.Time.To.Die.2021.Hindi.(CAM).English.480p.HDRip-DudeFilms.in.mkv`,39,'https://bit.ly/3qsxYAZ',3],
['Finch',`${mainSite}/HollyWood/Finch.2021/Finch.2021.720p.WEBRip.HINDI.DUB.MELBET-DudeFilms.in.mkv`,38,'https://bit.ly/3wDqvjV',3],
["Sooryavanshi",`${mainSite}/BollyWood/Sooryavanshi.2021.HQ.PreDVDRip/Sooryavanshi.2021.Hindi.480p.HQ.Pre.DVDRip-DudeFilms.in.mkv`,37,"https://bit.ly/3kacepE",1],
["Marvel Eternals",`${mainSite}/HollyWood/Eternals.2021.HDcam/Eternals.2021.Hindi.English.480p.CAMRip-DudeFilms.in%20-.mkv`,36,"https://bit.ly/3ERerhS",3],
["Jai Bhim",`${mainSite}/South.Movies/Jai.Bhim.2021/Jai.Bhim.2021.480p.WEB-DL.Hindi-Tamil.DD5.1.ESub.x264-DudeFilms.in.mkv`,35,"https://bit.ly/3kcnHoK",2],
["Hum Do Hamare Do",`${mainSite}/BollyWood/hotstar/Hum.Do.Hamare.Do.2021/Hum.Do.Hamare.Do.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,33,"https://bit.ly/31m0Alf",1],

["Sardar Udham","https://dl.gdc03.workers.dev/0:/BollyWood/Amazon.Prime/Sardar.Udham.2021/Sardar.Udham.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv",32,"false",1],
["Rashmi Rocket",`${mainSite}/BollyWood/Zee5/Rashmi.Rocket.2021/Rashmi.Rocket.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,31,"false",1],
["Sanak (2021)",`${mainSite}/BollyWood/hotstar/Sanak.2021/Sanak.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,30,"false",1],
["Shiddat",`${mainSite}/BollyWood/hotstar/Shiddat.2021/Shiddat.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,28,"false",1],
];

let webseries=[
  /*change the episod number to '__e' */
  /*[name,link,imgLink,totalEpisods,fristEpisodeLink],*/
  ["Parampara Season 1","webseries/index.html?ws='Parampara Season 1'","https://bit.ly/3mrvfF5",7,"__wsdomain/WebSeries/hotstar/Parampara.S01/Parampara.S01.E__e.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["The WhistleBlower","webseries/index.html?ws='The WhistleBlower'","https://bit.ly/3oWvbz0",9,"__wsdomain/WebSeries/Sony.Liv/The.WhistleBlower.S01/The.WhistleBlower.S01.E__e.720p.Hindi.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["The Witcher","webseries/index.html?ws='The Witcher'","https://bit.ly/3maR0Jd",8,"__wsdomain/WebSeries/NetFlix/The.Witcher/S01/The.Witcher.S01.E__e.Dual.Audio.Hindi.English.720p.HEVC.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Qatil Haseenaon Ke Naam","webseries/index.html?ws='Qatil Haseenaon Ke Naam'","https://bit.ly/3rWBWD0",6,"__wsdomain/WebSeries/Zee5/Qatil.Haseenaon.Ke.Naam.S01/Qatil.Haseenaon.Ke.Naam.S01.E__e.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Arya Season 2","webseries/index.html?ws='Arya Season 2'","https://bit.ly/31KRxKU",8,"__wsdomain/WebSeries/hotstar/Aarya/S02/720p/Aarya.S02.E__e.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Money Heist Part 1","webseries/index.html?ws='Money Heist Part 1'","https://bit.ly/3y7cko1",5,"__wsdomain/WebSeries/NetFlix/Money.Heist.S05/480p/Money.Heist.S05.E__e.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Hiccups and Hookups","webseries/index.html?ws='Hiccups and Hookups'","https://bit.ly/3I485Ov",8,"__wsdomain/WebSeries/Hiccups.and.Hookups.S01/Hiccups.and.Hookups.S01.E__e.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Dil Bekaraar","webseries/index.html?ws='Dil Bekaraar'","https://bit.ly/3I70XAJ",10,"__wsdomain/WebSeries/hotstar/Dil.Bekaraar.S01/Dil.Bekaraar.S01.E__e.720p.WEB-DL.x264-DudeFilms.in.mkv"],
  ["Illegal","webseries/index.html?ws='Illegal'","https://bit.ly/3r5pMHr",8,"__wsdomain/WebSeries/Voot/Illegal.S02/Illegal.S02.E__e.Hindi.720p.WEB-DL-DudeFilms.in.mkv"],
  ["Hawkeye","webseries/index.html?ws='Hawkeye'","https://bit.ly/3DUs4wm",6,"__wsdomain/WebSeries/hotstar/Hawkeye.S01/480p/Hawkeye.S01.E__e.480p.x264.Hindi.English.Multi.Esubs-DudeFilms.in.mkv"],
  ["The wheel of Time","webseries/index.html?ws='The wheel of Time'","https://bit.ly/32bz1ex",6,"__wsdomain/WebSeries/Amazon.Prime/The.Wheel.of.Time.S01/480p/The.Wheel.of.Time.S01.E__e.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv"],
  ["Your Honor Season 2","webseries/index.html?ws='Your Honor Season 2'","https://bit.ly/30DfgMQ",5,'__wsdomain/WebSeries/Sony.Liv/Your.Honor.S02/Your.Honor.S02.E__e.720p.Web.Dl.Esub-DudeFilms.in.mkv'],
  ["Lost In Space","webseries/index.html?ws='Lost In Space'","https://bit.ly/3ova992",10,'__wsdomain/WebSeries/NetFlix/Lost.in.Space/S02/480p/Lost.in.Space.S02.E__e.480p.Hindi.Eng.WebDL.Esub-DudeFilms.in.mkv'],
  ["Akkad Bakkad Rafu Chakkar","webseries/index.html?ws='Akkad Bakkad Rafu Chakkar'","https://bit.ly/3nZX07X",10,'__wsdomain/WebSeries/Amazon.Prime/Akkad.Bakkad.Rafu.Chakkar.S01/Akkad.Bakkad.Rafu.Chakkar.S01.E__e.720p.x264-DudeFilms.in.mkv'],
  ["Call My Agent","webseries/index.html?ws='Call My Agent'","https://bit.ly/3o75oTf",6,'__wsdomain/WebSeries/NetFlix/Call.My.Agent.Bollywood.S01/Call.My.Agent.Bollywood.S01.E__e.Hindi.720p.WEB-DL.ESub-DudeFilms.in.mkv'],
  ["My Name","webseries/index.html?ws='My Name'","https://bit.ly/3BSziAc",8,'__wsdomain/WebSeries/NetFlix/My.Name.S01/My.Name.S01.E__e.Hindi.Korean.720p.HEVC.WEB-DL.ESub-DudeFilms.in.mkv'],
  ["Tabbar SonyLiv","webseries/index.html?ws='Tabbar SonyLiv'","https://bit.ly/3FWSBdZ",8,'__wsdomain/WebSeries/Sony.Liv/Tabbar.S01/Tabbar.S01.E__e.Hindi.720p.WEB-DL-DudeFilms.in.mkv'],
  ["Kota Factory season 2","webseries/index.html?ws='Kota Factory season 2'","https://bit.ly/3ALcKAB",5,'__wsdomain/WebSeries/NetFlix/Kota.Factory/S02/720p/Kota.Factory.S02.E__e.Hindi.720p.WEB-DL.Esubs-DudeFilms.in.mkv'],
  ["House of Secrets","webseries/index.html?ws='House of Secrets'","https://bit.ly/3v3bYNt",3,'__wsdomain/WebSeries/NetFlix/House.of.Secrets.The.Burari.Deaths.S01/480p/House.of.Secrets.The.Burari.Deaths.S01.E__e.480p.WEB-DL.Hindi.ESub.x264-DudeFilms.in.mkv']

  // ["name","link","img"],
]

setInterval(rotateBannerBox,3000);


function getBoxBnr(id){
  let val=allMovies[id];
  let elem=`
  <div class="poster flex" onclick="setMovie('${val[1]}',${val[2]},'${val[0]}')" mlnk="${val[1]}">
  <img rel="nofollow" src="${val[3]}" alt="${val[0]}">
  <div class="data flex c">
    <div class="name">${val[0]}</div>
    <button>Watch Now</button>
  </div>
</div>
  `;
  return elem;
}


function block(parent,cls,width,height,grith,){
  var elem=`
  <div class="parent-3d ${cls}" style="transform-style: preserve-3d; width: ${width}px; height: ${height}px; transform: translateZ(-${grith/2}px);">
    <div id="${cls}-front" style="transform-origin: center; transform: translateZ(${grith}px);
    left:0;
    top:0;
    width: 100%;
    box-shadow: inset ${width}px ${height}px 0 #00000014;
    height: 100%;
    ">${getBoxBnr(0)}</div>


    <div id="${cls}-left" style="transform-origin: left; transform: rotateY(-90deg);
    left: 0;
    top: 0;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000002b;
    width: ${grith}px;
    ">${getBoxBnr(1)}</div>

    <div id="${cls}-botton" style="transform-origin: center; transform: translateZ(0) rotateY(180deg);
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000003d;
    ">${getBoxBnr(2)}</div>

    <div id="${cls}-right" style="transform-origin: right; transform: rotateY(90deg);
    right: 0;
    top: 0;
    box-shadow: inset ${width}px ${height}px 0 #0000002b;
    height: 100%;
    width: ${grith}px;
    ">${getWsBnr(0)}</div>

    <div id="${cls}-up" style="transform-origin: top; transform: rotateX(90deg);
    left: 0;
    top: 0;
    box-shadow: inset ${width}px ${grith}px 0 #0000002b;
    width: 100%;
    height: ${grith}px;
    "></div>

    <div id="${cls}-down" style="
    transform-origin: bottom;
    border: none;
    filter: blur(40px) opacity(.4);
    transform: scale(0.6) scaleZ(0.6) rotateX(-90deg) translateZ(107px) translate(-100px, -154px) rotate(45deg);
    left: 0;
    bottom: 0;
    box-shadow: inset 300px 300px 0 #00000045;
    width: 100%;
    height: 300px;
    "></div>
  </div>
  `;

  parent.insertAdjacentHTML('beforeend',elem);
}

block(bannerBox,"banner3d",300,250,300);

function getWsBnr(num){
  let ws=webseries[num];
  return `
  <div class="poster flex" onclick="this.children[0].click()">
  <a href="webseries/index.html?ws='${ws[0]}'&lnk='${ws[4]}'&episodes='${ws[3]}'&imgLnk='${ws[2]}'"></a>
  <img rel="nofollow" src="${ws[2]}" alt="${ws[0]}">
  <div class="data flex c">
    <div class="name">${ws[0]}</div>
    <button>Check It</button>
  </div>
</div>
  `;
}

function rotateBannerBox(){
  if(bannerBox.offsetHeight>window.scrollY){
    bannerRotated+=90;
    bannerBox.style.transform=`perspective(2000px) rotateY(${bannerRotated+'deg'})`;
  }
}
