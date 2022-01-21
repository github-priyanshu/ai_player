// op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
let readyToDownload=false;
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').then(function (registration) { console.log('ServiceWorker registration successful with scope: ', registration.scope); }, function (err) { console.log('ServiceWorker registration failed: ', err); }); });
}
let deferredPrompt;
downBtn1.classList.remove("active");
downBtn2.classList.remove("active");

window.addEventListener('beforeinstallprompt', (e) => {
   e.preventDefault(); deferredPrompt = e;
   downBtn1.classList.add("active");
   downBtn2.classList.add("active");
   readyToDownload=true;
   
   downBtn.forEach(val=>{
      val.addEventListener('click', (e) => {
         deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
               console.log('User accepted the install prompt');
            } else { console.log('User dismissed the install prompt'); }
         });
      });
   });
})