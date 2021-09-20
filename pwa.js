// op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').then(function (registration) { console.log('ServiceWorker registration successful with scope: ', registration.scope); }, function (err) { console.log('ServiceWorker registration failed: ', err); }); });
}
let deferredPrompt;
downBtn1.style.display = "none"; 
downBtn2.style.display = "none"; 
log('came')
window.addEventListener('beforeinstallprompt', (e) => {
log('came here')
   e.preventDefault(); deferredPrompt = e;
   downBtn1.style.display = "";
   downBtn2.style.display = "";
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