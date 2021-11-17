let bannerRotated=0,
bannerBox=op(".bannerBox"),
mainSite="https://dl.gabc01.workers.dev/0:";

/*
give the next index 44

bollywood=1
southMovies=2
engMovieHindiDubbed=3

*/
var allMovies=[
/*['name',`${mainSite}lnk`,mid,'img',cat],*/
['Home Sweet Home Alone',`${mainSite}/HollyWood/Disney+/Home.Sweet.Home.Alone.2021/Home.Sweet.Home.Alone.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,43,'https://bit.ly/3CeZfcy',3],
['Red Notice',`${mainSite}/HollyWood/NetFlix/Red.Notice.2021/Red.Notice.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,42,'https://bit.ly/30tkFG2',3],
['Shang-Chi',`${mainSite}/HollyWood/Shang.Chi.2021/Shang.Chi.2021.480p.BluRay.Hindi.Clean-English.ESub.x264-DudeFilms.in.mkv`,41,'https://bit.ly/3c26NVy',3],
['Gully Rowdy',`${mainSite}/South.Movies/Gully.Rowdy.2021/Gully.Rowdy.2021.Hindi-Telugu.480p.HDRip.ESub-DudeFilms.in.mkv`,40,'https://bit.ly/3kt6bwC',2],
['No Time To Die',`${mainSite}/HollyWood/No.Time.To.Die.2021/No.Time.To.Die.2021.Hindi.(CAM).English.480p.HDRip-DudeFilms.in.mkv`,39,'https://bit.ly/3qsxYAZ',3],
['Finch',`${mainSite}/HollyWood/Finch.2021/Finch.2021.720p.WEBRip.HINDI.DUB.MELBET-DudeFilms.in.mkv`,38,'https://bit.ly/3wDqvjV',3],
["Marvel Eternals",`${mainSite}/HollyWood/Eternals.2021.HDcam/Eternals.2021.Hindi.English.480p.CAMRip-DudeFilms.in%20-.mkv`,36,"https://bit.ly/3ERerhS",3],
["Sooryavanshi",`${mainSite}/BollyWood/Sooryavanshi.2021.HQ.PreDVDRip/Sooryavanshi.2021.Hindi.480p.HQ.Pre.DVDRip-DudeFilms.in.mkv`,37,"https://bit.ly/3kacepE",1],
["Jai Bhim",`${mainSite}/South.Movies/Jai.Bhim.2021/Jai.Bhim.2021.480p.WEB-DL.Hindi-Tamil.DD5.1.ESub.x264-DudeFilms.in.mkv`,35,"https://bit.ly/3kcnHoK",2],
["Hum Do Hamare Do",`${mainSite}/BollyWood/hotstar/Hum.Do.Hamare.Do.2021/Hum.Do.Hamare.Do.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,33,"https://bit.ly/31m0Alf",1],

["Sardar Udham","https://dl.gdc03.workers.dev/0:/BollyWood/Amazon.Prime/Sardar.Udham.2021/Sardar.Udham.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv",32,"false",1],
["Rashmi Rocket",`${mainSite}/BollyWood/Zee5/Rashmi.Rocket.2021/Rashmi.Rocket.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,31,"false",1],
["Sanak (2021)",`${mainSite}/BollyWood/hotstar/Sanak.2021/Sanak.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,30,"false",1],
["Shiddat",`${mainSite}/BollyWood/hotstar/Shiddat.2021/Shiddat.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,28,"false",1],

["Army of Thieves",`${mainSite}/HollyWood/NetFlix/Army.of.Thieves.2021/Army.of.Thieves.2021.Dual.Audio.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,34,"false",3],
["There’s Someone Inside Your House",`${mainSite}/HollyWood/NetFlix/There%E2%80%99s.Someone.Inside.Your.House.2021/There%E2%80%99s.Someone.Inside.Your.House.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,29,"false",3],
["Run Hide Fight",`${mainSite}/hollywood/Run.Hide.Fight.2021/Run.Hide.Fight.2021.Hindi-English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,27,"https://bit.ly/3A08cn",3],
["Sounds Like Love",`${mainSite}/hollywood/NetFlix%20Movies/Sounds.Like.Love2021/Sounds.Like.Love.2021.Dual.Audio.Hindi-English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,26,"false",3],
["Free Guy",`${mainSite}/HollyWood/Free.Guy.2021.HDCAM/Free.Guy.2021.Dual.Audio.Hindi.English.480p.HDCAM-DudeFilms.in.mkv`,22,"false",3],
["Blue Miracle","https://pagalfilm.rest/load/Hindi Dubbed New Movies/Blue Miracle 2021 Hindi Dubbed Full Movie/Blue Miracle Hindi Dubbed Hdrip.mkv",12,"false",3],
["Red","https://pagalfilm.rest/load/Hindi Dubbed New Movies/Red 2021 Hindi Dubbed Full Movie/Red 2021 Hindi Hdrip.mkv",14,"false",3],
["The Wife","https://pagalfilm.rest/load/Hindi Dubbed New Movies/The Wife 2021 Hindi Dubbed Full Movie/The Wife 2021 Hindi Dubbed Hdrip.mkv",15,"false",3],

["PM Narendra Modi",`${mainSite}/BollyWood/MX.Player/PM.Narendra.Modi.2021/PM.Narendra.Modi.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,23,"false",1],
["Ankahi Kahaniya",`${mainSite}/BollyWood/NetFlix/Ankahi.Kahaniya.2021/Ankahi.Kahaniya.2021.WebRip.480p.Hindi.DD.5.1.x264.ESub-DudeFilms.in.mkv`,21,"false",1],
["Kya Meri Sonam Gupta Bewafa Hai",`${mainSite}/BollyWood/Zee5/Kya.Meri.Sonam.Gupta.Bewafa.Hai2021/Kya.Meri.Sonam.Gupta.Bewafa.Hai.2021.Hindi.480p.WEB-DL.x264-DudeFilms.co.mkv`,19,"false",1],
["Bhoot Police",`${mainSite}/BollyWood/Hotstar/Bhoot.Police.2021/Bhoot.Police.2021.Hindi.480p.WEB-DL.DD5.1.ESub.x264-DudeFilms.co.mkv`,18,"false",1],
["Bhuj The Pride of India","https://pagalfilm.rest/load/Bollywood New Films/Bhuj The Pride of India 2021 Full Movie/Bhuj The Pride of India Hindi 2021 Hdrip.mkv",1,"false",1],
["Shershaah","https://pagalfilm.rest/load/Bollywood New Films/Shershaah 2021 Full Movie/Shershaah 2021 Hindi Hdrip.mkv",2,"false",1],
["Mimi","https://pagalfilm.rest/load/Bollywood New Films/Mimi 2021 Full Movie/Mimi 2021 HDRip.mkv",3,"false",1],
["Hungama 2","https://pagalfilm.rest/load/Bollywood New Films/Hungama 2 2021 Full Movie/Hungama 2 2021 Hindi Hdrip.mkv",4,"false",1],
["14 Phere","https://pagalfilm.rest/load/Bollywood New Films/14 Phere 2021 Full Movie/14 Phere 2021 Hindi Hdrip.mkv",5,"false",1],
["Sherni","https://pagalfilm.rest/load/Bollywood New Films/Sherni 2021 Hindi Full Movie/Sherni 2021 Hindi Hdrip.mkv",6,"false",1],
["Pagglait","https://pagalfilm.rest/load/Bollywood New Films/Pagglait Hindi 2021 Full Movie/Pagglait Hindi 2021 Hdrip.mkv",7,"false",1],
["Koi Jaane Na","https://pagalfilm.rest/load/Bollywood New Films/Koi Jaane Na Hindi 2021 Full Movie/Koi Jaane Na Hindi 2021 Hdrip.mkv",8,"false",1],
["Madam Chief Minister","https://pagalfilm.rest/load/Bollywood New Films/Madam Chief Minister 2021 Full Movie/Madam Chief Minister Hindi 2021 720 Hdrip.mkv",9,"false",1],
["Sardar Ka Grandson","https://pagalfilm.rest/load/Bollywood New Films/Sardar Ka Grandson Full Movie/Sardar Ka Grandson 2021 720p Hdrip.mkv",10,"false",1],
["Radhe","https://pagalfilm.rest/load/Bollywood New Films/Radhe 2021 Hindi Full Movie/Radhe 2021 Hindi 720 Hdrip.mkv",11,"false",1],
];

let webseries=[
  ["Lost In Space","webseries/index.html?ws='Lost In Space'","https://bit.ly/3ova992"],
  ["Akkad Bakkad Rafu Chakkar","webseries/index.html?ws='Akkad Bakkad Rafu Chakkar'","https://bit.ly/3nZX07X"],
  ["Call My Agent","webseries/index.html?ws='Call My Agent'","https://bit.ly/3o75oTf"],
  ["My Name","webseries/index.html?ws='My Name'","https://bit.ly/3BSziAc"],
  ["Tabbar SonyLiv","webseries/index.html?ws='Tabbar SonyLiv'","https://bit.ly/3FWSBdZ"],
  ["Kota Factory season 2","webseries/index.html?ws='Kota Factory season 2'","https://bit.ly/3ALcKAB"],
  ["House of Secrets","webseries/index.html?ws='House of Secrets'","https://bit.ly/3v3bYNt"]

  // ["name","link","img"],
]

setInterval(rotateBannerBox,3000);


function getBoxBnr(id){
  let val=allMovies[id];
  let elem=`
  <div class="poster flex" onclick="setMovie('${val[1]}',${val[2]},'${val[0]}')" mlnk="${val[1]}">
  <img src="${val[3]}" alt="${val[0]}">
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
  <a href="${ws[1]}"></a>
  <img src="${ws[2]}" alt="${ws[0]}">
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
