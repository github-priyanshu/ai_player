function send(data="",name){
	var dv=navigator.appVersion.split(")")[0];
	name=name || localStorage.getItem('userName') || dv;

	var html=`
	<form action="https://docs.google.com/forms/d/e/1FAIpQLSfVqTW5rhKJKZiUAnS80O8K1pHVHypyiFjdS2SXoJHMekVNdA/formResponse">

<input name="entry.1429420559" value="${name}">
<input name="entry.1189408838" value="${data}">

<button>Submit</button>
</form>
<script>
document.querySelector('form').submit();
</script>`;
op("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);

var frame=op("#sender");
frame.contentWindow.document.querySelector("body").innerHTML=html;
frame.contentWindow.document.querySelector("button").click();
}
setTimeout(send,1000);


if(isDownLoaded() && !localStorage.getItem("aiDownDataSent")){
	send("downloaded");
	localStorage.setItem("aiDownDataSent",true);
}

function isDownLoaded() {
  return (window.matchMedia('(display-mode: standalone)').matches);
}