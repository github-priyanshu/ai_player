document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="css/addUrlAnim.css">`);
document.body.insertAdjacentHTML("beforeend",`<div id="urlLoader"></div>`);
var al=opp("a");

var urlLoader=op("#urlLoader");
log(urlLoader)

al.forEach(val=>{
	if(!val.hasAttribute("download") && !val.getAttribute("href").startsWith("#")){
			// log(val)
			val.addEventListener("click",()=>{
				urlLoader.classList.add("active");
			})
		}
})
