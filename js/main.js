(async()=>{if("loading"in HTMLImageElement.prototype){const a=document.querySelectorAll("img.lazyload");a.forEach(a=>{a.src=a.dataset.src})}else{await import("https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js");lazySizes.init()}})();
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'uk',autoDisplay:false},'google_translate')}
