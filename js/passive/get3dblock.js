let bannerRotated=0,
bannerBox=op(".bannerBox"),
mainSite="https://dl.gabc01.workers.dev/0:";

/*give the next index 35*/

var Newly_Added=[
["Marvel Eternals",`${mainSite}/HollyWood/Eternals.2021.HDcam/Eternals.2021.Hindi.English.480p.CAMRip-DudeFilms.in%20-.mkv`,36,"https://bit.ly/3ERerhS"],

["Sooryavanshi",`${mainSite}/BollyWood/Sooryavanshi.2021.HQ.PreDVDRip/Sooryavanshi.2021.Hindi.480p.HQ.Pre.DVDRip-DudeFilms.in.mkv`,37,"https://bit.ly/3kacepE"],

["Jai Bhim",`${mainSite}/South.Movies/Jai.Bhim.2021/Jai.Bhim.2021.480p.WEB-DL.Hindi-Tamil.DD5.1.ESub.x264-DudeFilms.in.mkv`,35,"https://bit.ly/3kcnHoK"],

["Hum Do Hamare Do",`${mainSite}/BollyWood/hotstar/Hum.Do.Hamare.Do.2021/Hum.Do.Hamare.Do.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,33,"https://bit.ly/31m0Alf"],

["Army of Thieves",`${mainSite}/HollyWood/NetFlix/Army.of.Thieves.2021/Army.of.Thieves.2021.Dual.Audio.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,34,"https://bit.ly/3CCN36A"],

["Rashmi Rocket",`${mainSite}/BollyWood/Zee5/Rashmi.Rocket.2021/Rashmi.Rocket.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,31,"https://bit.ly/30rkoD0"],

["Sanak (2021)",`${mainSite}/BollyWood/hotstar/Sanak.2021/Sanak.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,30,"https://bit.ly/3j5kDKu"],

["Sardar Udham",`${mainSite}/BollyWood/Amazon.Prime/Sardar.Udham.2021/Sardar.Udham.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,32,"https://bit.ly/2Z47DxZ"],

["There’s Someone Inside Your House",`${mainSite}/HollyWood/NetFlix/There%E2%80%99s.Someone.Inside.Your.House.2021/There%E2%80%99s.Someone.Inside.Your.House.2021.Hindi.English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,29,"https://bit.ly/3ajRJl6"],

["Shiddat",`${mainSite}/BollyWood/hotstar/Shiddat.2021/Shiddat.2021.Hindi.480p.WEB-DL.ESub-DudeFilms.in.mkv`,28,"https://bit.ly/3F6ST1H"],

["Run Hide Fight",`${mainSite}/hollywood/Run.Hide.Fight.2021/Run.Hide.Fight.2021.Hindi-English.480p.WEB-DL.ESub-DudeFilms.in.mkv`,27,"https://bit.ly/3A08hcn"],

["Bhuj The Pride of India","https://pagalfilm.rest/load/Bollywood New Films/Bhuj The Pride of India 2021 Full Movie/Bhuj The Pride of India Hindi 2021 Hdrip.mkv",1,"./img/na/na (2).png"],
];


let webseries=[
  ["Akkad Bakkad Rafu Chakkar","webseries/index.html?ws='Akkad Bakkad Rafu Chakkar'","https://bit.ly/3nZX07X"],
  ["Call My Agent","webseries/index.html?ws='Call My Agent'","https://bit.ly/3o75oTf"],
  ["My Name","webseries/index.html?ws='My Name'","https://bit.ly/3BSziAc"],
  ["Tabbar SonyLiv","webseries/index.html?ws='Tabbar SonyLiv'","https://bit.ly/3FWSBdZ"],
  ["Kota Factory season 2","webseries/index.html?ws='Kota Factory season 2'","https://bit.ly/3ALcKAB"],
  // ["name","link","img"],
]

setInterval(rotateBannerBox,3000);


function getBoxBnr(id){
  let val=Newly_Added[id];
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
    ">${getBoxBnr(1)}</div>


    <div id="${cls}-left" style="transform-origin: left; transform: rotateY(-90deg);
    left: 0;
    top: 0;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000002b;
    width: ${grith}px;
    ">${getBoxBnr(0)}</div>

    <div id="${cls}-botton" style="transform-origin: center; transform: translateZ(0) rotateY(180deg);
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000003d;
    ">${getWsBnr(1)}</div>

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
