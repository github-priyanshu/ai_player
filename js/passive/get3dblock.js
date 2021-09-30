let bannerRotated=0,
bannerBox=op(".bannerBox");

var Newly_Added=[
["No One Gets Out Alive","https://dl.dc03.workers.dev/hollywood/NetFlix%20Movies/No.One.Gets.Out.Alive.2021/No.One.Gets.Out.Alive.2021.Hindi-English.720p.WEB-DL.ESub-DudeFilms.in.mkv",25,"https://bit.ly/3ilOOwF"],

["Jungle Cruise","https://dl.dc03.workers.dev/HollyWood/Jungle.Cruise.2021/Jungle.Cruise.2021.Hindi.(CAM).English.480p.WEB-DL.ESub-DudeFilms.in.mkv",24,"./img/na/na (1).png"],

["Bhuj The Pride of India","https://pagalfilm.bar/load/Bollywood New Films/Bhuj The Pride of India 2021 Full Movie/Bhuj The Pride of India Hindi 2021 Hdrip.mkv",1,"./img/na/na (2).png"],

["Shershaah","https://pagalfilm.bar/load/Bollywood New Films/Shershaah 2021 Full Movie/Shershaah 2021 Hindi Hdrip.mkv",2,"./img/na/na (3).png"],

["Bell Bottom","https://dl.dc03.workers.dev/BollyWood/Amazon.Prime/Bell.Bottom.2021/Bell.Bottom.2021.480p.Hindi.WEB-DL.ESub.x264-DudeFilms.co.mkv",20,"./img/na/na (4).png"],
];


let webseries=[
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
    ">${getWsBnr(0)}</div>

    <div id="${cls}-botton" style="transform-origin: center; transform: translateZ(0) rotateY(180deg);
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000003d;
    ">${getBoxBnr(1)}</div>

    <div id="${cls}-left" style="transform-origin: left; transform: rotateY(-90deg);
    left: 0;
    top: 0;
    height: 100%;
    box-shadow: inset ${width}px ${height}px 0 #0000002b;
    width: ${grith}px;
    ">${getBoxBnr(0)}</div>

    <div id="${cls}-right" style="transform-origin: right; transform: rotateY(90deg);
    right: 0;
    top: 0;
    box-shadow: inset ${width}px ${height}px 0 #0000002b;
    height: 100%;
    width: ${grith}px;
    ">${getBoxBnr(2)}</div>

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