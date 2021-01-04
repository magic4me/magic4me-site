(async()=>{if("loading"in HTMLImageElement.prototype){const a=document.querySelectorAll("img.lazyload");a.forEach(a=>{a.src=a.dataset.src})}else{await import("https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js");lazySizes.init()}})();
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'uk',autoDisplay:false},'google_translate')}
document.addEventListener("DOMContentLoaded", ()=>{
let img = [];
document.querySelectorAll("img").forEach((e)=>{
let src,title,desc
if(e.dataset.src){
src = e.dataset.src 
}else{
src = e.src 
}
if(e.alt){
title = e.alt
}else{
title = document.querySelector("title").innerText
}
desc = document.querySelector("meta[name='description']").content
img.push({img:src,title:title,desc:desc})
});

img=img.filter((e)=>{
i =new URL(e.img)
if(i.pathname != "/img/logo.svg" && i.host!="www.gstatic.com"){
return true
}})
ldS = '{"@context": "http://schema.org","@graph":['
for (var ii=0;ii<img.length;ii++){
ldS += '{ "@type": "ImageObject", "contentUrl": "'+img[ii].img+'", "description": "'+img[ii].desc+'", "name": "'+img[ii].title+'" }'
if(1+ii<img.length){ldS +=","}
}
ldS += "]}"


const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = ldS;
  document.head.appendChild(script);


});