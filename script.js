function otomatis() {
     fthilang();ftganti=3;setTimeout(ftmuncul,400);
     fungsi=2;setTimeout(tombol,2200);
     setInterval(createHeart,200);
     wallpaper.style="transform: scale(1);";
     kalimatd.style="display:none";kolombaru.style="display:none";
     if(rnkado==1){}
     if(rnkado==2){kado1.innerHTML = kado2.innerHTML;}
     if(rnkado==3){kado1.innerHTML = kado3.innerHTML;}
     befanimkata();setTimeout(animkata,300);
  } 
  function befanimkata(){kado1.style="position:relative;opacity:1;transform:scale(.3);";} 
  function animkata() {kado1.style="position:relative;opacity:1;transform:scale(1);";}
  
  async function lanjut(){
      fthilang();ftganti=2;fungsi=2;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(2);";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      kalimat.style="display:none";
      kalimatb.style="display:none";
      kalimatb2.style="display:none";
      kalimatc.style="display:none";
      kalimatd.style="position:relative;opacity:1;transform:scale(1);";
      kolombaru.style="position:relative;opacity:1;transform:scale(1);";
   }
   
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + kal1], startDelay: 1, speed: 60, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = kal1;
    setTimeout(mulaiketik2,500);
  },}).go();
  }
  function mulaiketik2(){
  new TypeIt("#kalimatb", {
  strings: ["" + kal2], startDelay: 1, speed: 50, waitUntilVisible: true,
  afterComplete: function(){
    kalimatb.innerHTML = kal2;
    setTimeout(mulaiketik22,700);
  },}).go();
  }
  function mulaiketik22(){
  wallpaper.style="transform: scale(2);";
  fotoakhir.src = fotoakhir2.src;
  kalimatb.style="display:none";
  new TypeIt("#kalimatb2", {
  strings: ["" + kal22], startDelay: 1, speed: 70, waitUntilVisible: true,
  afterComplete: function(){
    kalimatb2.innerHTML = kal22;
    setTimeout(mulaiketik3,700);
  },}).go();
  }
  function mulaiketik3(){
  wallpaper.style="transform: scale(1);";
  kalimatb.style="display:none";
  new TypeIt("#kalimatc", {
  strings: ["" + kal3], startDelay: 1, speed: 70, waitUntilVisible: true,
  afterComplete: function(){
    kalimatc.innerHTML = kal3;
    setTimeout(tombol,500);
  },}).go();
  }
