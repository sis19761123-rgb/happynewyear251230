let i=0, imgArr=new Array();
imgArr[0] = "https://website.ncyu.edu.tw/secretary/ServerFile/Get/635a7635-c6ad-444a-bf35-4c224a4b39a8?nodeId=1762&sId=98821";
imgArr[1] = "https://website.ncyu.edu.tw/secretary/ServerFile/Get/f925c8a7-7c97-4b72-9207-5024f3238338?nodeId=1762&sId=98820";
imgArr[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDz_jdr1d-DKgNxYwaVpqEgFAIDIL4KTDcw&s";

function showImg(){
  document.getElementById("ico").src = imgArr[i];
  i = (i+1) % 3;
 }

function show(){
  setInterval(showImg, 2000)
}
let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class="news">
     <h2>${title.value}</h2>
     <p>${content.value}</p>
  </div>
  `
}