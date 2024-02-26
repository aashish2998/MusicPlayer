
var arr=[ {
  songName:"Magic", url:"./songs/Magic (DjPunjab.Farm).mp3", img:"./images/cocacola1.jpg",time:"4:04"},
  { songName:"Kho Gaye Hum Kahan", url:"./songs/Kho Gaye Hum Kahan_192(Ghantalele.com).mp3", img:"./images/ishqnachawe.jpg",time:"2:41"},
  { songName:"Kaha Jaoon", url:"./songs/Kahan Jaoon Song By Bayaan.mp3", img:"./images/kahajaoon.jpg",time:"5:26"},
  { songName:"Khel", url:"./songs/Khel - Praagya 320 Kbps.mp3", img:"./images/khel.jpg",time:"3:05"},
  { songName:"Pehle Bhi Main ", url:"./songs/Pehle Bhi Main Animal 320 Kbps.mp3", img:"./images/PehlebhiMain.jpg",time:"4:09"}
]


var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector('#play');

var forward = document.querySelector('#forward');
var backward = document.querySelector('#backward');

var audio = new Audio()

var selectedSong =0;

function mainFunction(){

        var clutter ="";

      arr.forEach(function(elem , index){
        clutter +=`<div class="song-card" id=${index}>
        <div class="part1">
          <img src=${elem.img} alt="">
          <h2>${elem.songName}</h2>

        </div>
        <h6>${elem.time}</h6>
      </div>`
      


      })
      
      audio.src = arr[selectedSong].url

      poster.style.backgroundImage = `url(${arr[selectedSong].img})`
      allsongs.innerHTML = clutter;
        
      }

  
   mainFunction()



allsongs.addEventListener('click',function(dets){

  selectedSong = dets.target.id ;
  mainFunction();
  play.innerHTML =`<i class="ri-pause-line"></i>` 
  flag =1
  audio.play()
})

var flag =0

play.addEventListener("click",function(){
  if(flag == 0){
    play.innerHTML =`<i class="ri-pause-line"></i>` 
    mainFunction()
    audio.play()
    flag =1
  }
  else{
    play.innerHTML =`<i class="ri-play-line"></i>` 
    mainFunction()
    audio.pause()
    flag =0
  }
})

forward.addEventListener("click",function(){
  if(selectedSong < arr.length-1){
    selectedSong++;
    mainFunction();
    audio.play()
  }
  else{
    forward.style.opacity =0.45;
  }
})


backward.addEventListener("click",function(){
  if(selectedSong >0){
    selectedSong--;
    mainFunction();
    audio.play()
  }
  else{
    backward.style.opacity =0.45;
  }
})