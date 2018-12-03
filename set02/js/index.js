(function launchAd() {
 
  // get wrapper width
  var wrapperWidth = document.getElementById("wrapper").parentNode.offsetWidth;
  var wrapperHeight = document.getElementById("wrapper").parentNode.offsetHeight;

  // make ad match iframe size
  document.getElementById("ad").style.width = wrapperWidth + "px";
  document.getElementById("ad").style.height = wrapperHeight + "px";

  // set ad width vars
  var adWidth = document.getElementById("ad").offsetWidth;
  var adHeight = document.getElementById("ad").offsetHeight;

  // set text var
  var txt = wrapperWidth + " x " + wrapperHeight;
  
  // set bg image var model
  var bgImage = "url(img/bg-" + adWidth + "x" + adHeight + "-";
  var imgScreen = "img/screen-" + adWidth + "x" + adHeight + "-";

  // assign background images to image containers and set dimensions
  for (i = 0; i < 1; i++) {    
      var selectBg = document.getElementById("bg" + i);
      var selectImg = document.getElementById("imgScreen")
      selectBg.style.backgroundImage = bgImage + i + ".jpg" + ")";
      selectImg.setAttribute("src", imgScreen + i + ".png");
      selectBg.style.width = adWidth + "px";
      selectBg.style.height = adHeight + "px";
  }

  // generate dots
  for (i = 0; i < 16; i++) {
    // document.getElementById("dots").innerHTML = "<div id=\"dot0\"" + i + "\"";
    var padding = i * 10;
    var node = document.createElement("div");
    node.setAttribute("id", "dot" + i);
    document.getElementById("dots").appendChild(node);
  }

  // adaptive styles and animation sequences
  switch(wrapperWidth + wrapperHeight) {
    // 970+250
    case 1220:
      document.getElementById("dots").style.top = "130px";
      document.getElementById("dots").style.left = "620px";

      document.getElementById("logo").style.display = "block";

      TweenLite.fromTo("#logo", 1, {top: 155, left: 80, opacity: 0, scale: .7, delay: 0}, {top: 155, left: 80, opacity: 1, scale: .7, delay: 0, ease: Power2.easeOut});

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, opacity: 0, delay: 0}, {left: 0, opacity: 1, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 80, right: -50, opacity: 0, textAlign: "center", scale: 1.3, delay: 0}, {top: 80, left: -195, opacity: 1, textAlign: "center", scale: 1.3, delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 80, right: -50, opacity: 0, textAlign: "center", scale: 1.3, delay: 2}, {top: 80, left: -190, opacity: 1, textAlign: "center", scale: 1.3, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 80, right: -50, opacity: 0, textAlign: "center", scale: 1.3, delay: 4}, {top: 80, left: -190, opacity: 1, textAlign: "center", scale: 1.3, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 60, right: -50, opacity: 0, textAlign: "center", scale: 1.3, delay: 6}, {top: 60, left: -195, opacity: 1, textAlign: "center", scale: 1.3, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 100, left: -350, opacity: 0, textAlign: "center", scale: 1.3, delay: 6}, {top: 100, left: -195, opacity: 1, textAlign: "center", scale: 1.3, delay: 6, ease: Power2.easeOut});
      
      TweenLite.fromTo("#dot0", .5, {top: 0, left: 10, scale: 3, opacity: 0}, {top: 0, left: 10, scale: 1, opacity: 1, delay: 7});
      TweenLite.fromTo("#dot1", .5, {top: 0, left: 30, scale: 3, opacity: 0}, {top: 0, left: 30, scale: 1, opacity: 1, delay: 7.1});
      TweenLite.fromTo("#dot2", .5, {top: 0, left: 50, scale: 3, opacity: 0}, {top: 0, left: 50, scale: 1, opacity: 1, delay: 7.2});
      TweenLite.fromTo("#dot3", .5, {top: 0, left: 70, scale: 3, opacity: 0}, {top: 0, left: 70, scale: 1, opacity: 1, delay: 7.3});
      TweenLite.fromTo("#dot4", .5, {top: 0, left: 90, scale: 3, opacity: 0}, {top: 0, left: 90, scale: 1, opacity: 1, delay: 7.4});
      TweenLite.fromTo("#dot5", .5, {top: 20, left: 90, scale: 3, opacity: 0}, {top: 20, left: 90, scale: 1, opacity: 1, delay: 7.6});
      TweenLite.fromTo("#dot6", .5, {top: 40, left: 90, scale: 3, opacity: 0}, {top: 40, left: 90, scale: 1, opacity: 1, delay: 7.7});
      TweenLite.fromTo("#dot7", .5, {top: 60, left: 90, scale: 3, opacity: 0}, {top: 60, left: 90, scale: 1, opacity: 1, delay: 7.8});
      TweenLite.fromTo("#dot8", .5, {top: 60, left: 110, scale: 3, opacity: 0}, {top: 60, left: 110, scale: 1, opacity: 1, delay: 7.9});
      TweenLite.fromTo("#dot9", .5, {top: 60, left: 130, scale: 3, opacity: 0}, {top: 60, left: 130, scale: 1, opacity: 1, delay: 8.0});
      TweenLite.fromTo("#dot10", .5, {top: 60, left: 150, scale: 3, opacity: 0}, {top: 60, left: 150, scale: 1, opacity: 1, delay: 8.1});
      TweenLite.fromTo("#dot11", .5, {top: 60, left: 170, scale: 3, opacity: 0}, {top: 60, left: 170, scale: 1, opacity: 1, delay: 8.2});
      TweenLite.fromTo("#dot12", .5, {top: 60, left: 190, scale: 3, opacity: 0}, {top: 60, left: 190, scale: 1, opacity: 1, delay: 8.3});
      TweenLite.fromTo("#dot13", .5, {top: 40, left: 190, scale: 3, opacity: 0}, {top: 40, left: 190, scale: 1, opacity: 1, delay: 8.4});
      
      TweenLite.fromTo("#imgScreen", .5, {top: 24, left: 750, scale: 1.2, opacity: 0}, {top: 24, left: 750, scale: 1, opacity: 1, delay: 8.4});
      break;

    // 300+600
    case 900:
      document.getElementById("dots").style.top = "180px";
      document.getElementById("dots").style.left = "32px";

      document.getElementById("logo").style.display = "block";

      TweenLite.fromTo("#logo", 1, {top: 550, left: -50, opacity: 0, scale: .65, delay: 0}, {top: 550, left: -50, opacity: 1, scale: .65, delay: 0, ease: Power2.easeOut});

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 20, right: -100, opacity: 0, scale: .9, delay: 0}, {top: 20, left: 0, opacity: 1, scale: .9, delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 20, right: -100, opacity: 0, scale: .9, delay: 2}, {top: 20, left: 0, opacity: 1, scale: .9, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 20, right: -100, opacity: 0, scale: .9, delay: 4}, {top: 20, left: 0, opacity: 1, scale: .9, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 10, right: -100, opacity: 0, scale: .8, scale: .9, delay: 6}, {top: 10, left: 0, opacity: 1, scale: .8, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 35, left: -100, opacity: 0, scale: .8, scale: .9, delay: 6}, {top: 35, left: 0, opacity: 1, scale: .8, delay: 6, ease: Power2.easeOut});
      
      TweenLite.fromTo("#dot0", .5, {top: 160, left: 30, scale: 3, opacity: 0}, {top: 160, left: 30, scale: 1, opacity: 1, delay: 7});
      TweenLite.fromTo("#dot1", .5, {top: 160, left: 10, scale: 3, opacity: 0}, {top: 160, left: 10, scale: 1, opacity: 1, delay: 7.1});
      TweenLite.fromTo("#dot2", .5, {top: 160, left: -10, scale: 3, opacity: 0}, {top: 160, left: -10, scale: 1, opacity: 1, delay: 7.2});
      TweenLite.fromTo("#dot3", .5, {top: 140, left: -10, scale: 3, opacity: 0}, {top: 140, left: -10, scale: 1, opacity: 1, delay: 7.3});
      TweenLite.fromTo("#dot4", .5, {top: 120, left: -10, scale: 3, opacity: 0}, {top: 120, left: -10, scale: 1, opacity: 1, delay: 7.4});
      TweenLite.fromTo("#dot5", .5, {top: 100, left: -10, scale: 3, opacity: 0}, {top: 100, left: -10, scale: 1, opacity: 1, delay: 7.6});
      TweenLite.fromTo("#dot6", .5, {top: 80, left: -10, scale: 3, opacity: 0}, {top: 80, left: -10, scale: 1, opacity: 1, delay: 7.7});
      TweenLite.fromTo("#dot7", .5, {top: 60, left: -10, scale: 3, opacity: 0}, {top: 60, left: -10, scale: 1, opacity: 1, delay: 7.8});
      TweenLite.fromTo("#dot8", .5, {top: 40, left: -10, scale: 3, opacity: 0}, {top: 40, left: -10, scale: 1, opacity: 1, delay: 7.9});
      TweenLite.fromTo("#dot9", .5, {top: 20, left: -10, scale: 3, opacity: 0}, {top: 20, left: -10, scale: 1, opacity: 1, delay: 8.0});
      TweenLite.fromTo("#dot10", .5, {top: 0, left: -10, scale: 3, opacity: 0}, {top: 0, left: -10, scale: 1, opacity: 1, delay: 8.1});
      TweenLite.fromTo("#dot11", .5, {top: 0, left: 10, scale: 3, opacity: 0}, {top: 0, left: 10, scale: 1, opacity: 1, delay: 8.2});
      
      TweenLite.fromTo("#imgScreen", .5, {top: 79, left: 66, opacity: 0}, {top: 79, left: 66, opacity: 1, delay: 8.2});
      break;

    // 300+250
    case 550:
      document.getElementById("dots").style.top = "193px";
      document.getElementById("dots").style.left = "143px";

      document.getElementById("logo").style.display = "block";

      TweenLite.fromTo("#logo", 1, {top: 215, right: -50, opacity: 0, scale: .6, delay: 0}, {top: 215, right: -50, opacity: 1, scale: .6, delay: 0, ease: Power2.easeOut});

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 25, right: -100, textAlign: "center", scale: .8, opacity: 0, delay: 0}, {top: 25, left: 0, opacity: 1, textAlign: "center", delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 25, right: -100, textAlign: "center", scale: .8, opacity: 0, delay: 2}, {top: 25, left: 0, opacity: 1, textAlign: "center", delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 25, right: -100, opacity: 0, textAlign: "center", scale: .8, delay: 4}, {top: 25, left: 0, opacity: 1, textAlign: "center", delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 15, right: -100, lineHeight: 1.2, opacity: 0, width: 300, textAlign: "center", scale: .8, delay: 6}, {top: 15, left: 0, textAlign: "center", lineHeight: 1.3, scale: .8, opacity: 1, width: 300, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 40, left: -100, lineHeight: 1.2, opacity: 0, width: 300, textAlign: "center", scale: .8, delay: 6}, {top: 40, left: 0, textAlign: "center", lineHeight: 1.3, scale: .8, opacity: 1, width: 300, delay: 6, ease: Power2.easeOut});
      
      TweenLite.fromTo("#dot0", .5, {top: 0, left: 0, scale: 2.3, opacity: 0}, {top: 0, left: 0, scale: .7, opacity: 1, delay: 7});
      TweenLite.fromTo("#dot1", .5, {top: 0, left: -15, scale: 2.3, opacity: 0}, {top: 0, left: -15, scale: .7, opacity: 1, delay: 7.2});
      TweenLite.fromTo("#dot2", .5, {top: 0, left: -30, scale: 2.3, opacity: 0}, {top: 0, left: -30, scale: .7, opacity: 1, delay: 7.4});
      TweenLite.fromTo("#dot3", .5, {top: 0, left: -45, scale: 2.3, opacity: 0}, {top: 0, left: -45, scale: .7, opacity: 1, delay: 7.6});
      TweenLite.fromTo("#dot4", .5, {top: 0, left: -60, scale: 2.3, opacity: 0}, {top: 0, left: -60, scale: .7, opacity: 1, delay: 7.8});
      TweenLite.fromTo("#dot5", .5, {top: -15, left: -60, scale: 2.3, opacity: 0}, {top: -15, left: -60, scale: .7, opacity: 1, delay: 8});
      TweenLite.fromTo("#dot6", .5, {top: -30, left: -60, scale: 2.3, opacity: 0}, {top: -30, left: -60, scale: .7, opacity: 1, delay: 8.2});
      
      TweenLite.fromTo("#imgScreen", .5, {top: 80, left: 21, opacity: 0}, {top: 80, left: 21, opacity: 1, delay: 8.4});
      break;

    // 729+90
    case 818:
    document.getElementById("strong").style.display = "inline";
    
    document.getElementById("dots").style.top = "72px";
    document.getElementById("dots").style.left = "508px";

    document.getElementById("logo").style.display = "block";

      TweenLite.fromTo("#logo", 1, {top: 50, left: 25, opacity: 0, scale: .5, delay: 0}, {top: 50, left: 25, opacity: 1, scale: .5, delay: 0, ease: Power2.easeOut});

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 15, right: -100, opacity: 0, scale: .9, delay: 0}, {top: 15, left: -135, opacity: 1, scale: .9, delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 15, right: -100, opacity: 0, scale: .9, delay: 2}, {top: 15, left: -130, opacity: 1, scale: .9, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 15, right: -100, opacity: 0, scale: .9, delay: 4}, {top: 15, left: -125, opacity: 1, scale: .9, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 5, right: -100, lineHeight: 1.2, opacity: 0, scale: .8, delay: 6}, {top: 5, left: -135, lineHeight: 1.2, opacity: 1, scale: .8, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 28, left: -200, lineHeight: 1.2, opacity: 0, scale: .8, delay: 6}, {top: 28, left: -135, lineHeight: 1.2, opacity: 1, scale: .8, delay: 6, ease: Power2.easeOut});
      
      TweenLite.fromTo("#dot0", .5, {top: 0, left: 10, scale: 2.4, opacity: 0}, {top: 0, left: 10, scale: .6, opacity: 1, delay: 7});
      TweenLite.fromTo("#dot1", .5, {top: 0, left: 24, scale: 2.4, opacity: 0}, {top: 0, left: 24, scale: .6, opacity: 1, delay: 7.2});
      TweenLite.fromTo("#dot2", .5, {top: 0, left: 38, scale: 2.4, opacity: 0}, {top: 0, left: 38, scale: .6, opacity: 1, delay: 7.4});
      TweenLite.fromTo("#dot3", .5, {top: 0, left: 52, scale: 2.4, opacity: 0}, {top: 0, left: 52, scale: .6, opacity: 1, delay: 7.6});
      TweenLite.fromTo("#dot4", .5, {top: -15, left: 52, scale: 2.4, opacity: 0}, {top: -15, left: 52, scale: .6, opacity: 1, delay: 7.8});
      TweenLite.fromTo("#dot5", .5, {top: -30, left: 52, scale: 2.4, opacity: 0}, {top: -30, left: 52, scale: .6, opacity: 1, delay: 8});
      TweenLite.fromTo("#dot6", .5, {top: -30, left: 66, scale: 2.4, opacity: 0}, {top: -30, left: 66, scale: .6, opacity: 1, delay: 8.2});
      TweenLite.fromTo("#dot7", .5, {top: -30, left: 80, scale: 2.4, opacity: 0}, {top: -30, left: 80, scale: .6, opacity: 1, delay: 8.4});
      TweenLite.fromTo("#dot8", .5, {top: -30, left: 94, scale: 2.4, opacity: 0}, {top: -30, left: 94, scale: .6, opacity: 1, delay: 8.6});
      
      TweenLite.fromTo("#imgScreen", .5, {top: 3, right: 22, opacity: 0}, {top: 3, right: 22, opacity: 1, delay: 8.8});
      break;

      // 640+480
      case 1120:
        document.getElementById("dots").style.top = "305px";
        document.getElementById("dots").style.left = "262px";
        
        document.getElementById("logo").style.display = "block";

        TweenLite.fromTo("#logo", 1, {top: 425, left: 115, opacity: 0, scale: 1, delay: 0}, {top: 425, left: 115, opacity: 1, scale: 1, delay: 0, ease: Power2.easeOut});

        TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
        TweenLite.fromTo("#headline0", 1, {top: 40, right: -100, opacity: 0, scale: 1.3, delay: 0}, {top: 40, left: 0, opacity: 1, scale: 1.3, delay: 0, ease: Power2.easeOut});
        TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

        TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
        TweenLite.fromTo("#headline1", 1, {top: 40, right: -100, opacity: 0, scale: 1.3, delay: 2}, {top: 40, left: 0, opacity: 1, scale: 1.3, delay: 2, ease: Power2.easeOut});
        TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

        TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
        TweenLite.fromTo("#headline2", 1, {top: 40, right: -100, opacity: 0, scale: 1.3, delay: 4}, {top: 40, left: 0, opacity: 1, scale: 1.3, delay: 4, ease: Power2.easeOut});
        TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

        TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
        TweenLite.fromTo("#headline3", 1, {top: 20, right: -100, opacity: 0, scale: 1.3, delay: 6}, {top: 20, left: 0, opacity: 1, scale: 1.3, delay: 6, ease: Power2.easeOut});
        TweenLite.fromTo("#headline4", 1, {top: 60, left: -100, opacity: 0, scale: 1.3, delay: 6}, {top: 60, left: 0, opacity: 1, scale: 1.3, delay: 6, ease: Power2.easeOut});
        
        TweenLite.fromTo("#dot0", .5, {top: 0, left: 0, scale: 3.6, opacity: 0}, {top: 0, left: 0, scale: 1.4, opacity: 1, delay: 7});
        TweenLite.fromTo("#dot1", .5, {top: -25, left: 0, scale: 3.6, opacity: 0}, {top: -25, left: 0, scale: 1.4, opacity: 1, delay: 7.2});
        TweenLite.fromTo("#dot2", .5, {top: -50, left: 0, scale: 3.6, opacity: 0}, {top: -50, left: 0, scale: 1.4, opacity: 1, delay: 7.4});
        TweenLite.fromTo("#dot3", .5, {top: -75, left: 0, scale: 3.6, opacity: 0}, {top: -75, left: 0, scale: 1.4, opacity: 1, delay: 7.6});
        TweenLite.fromTo("#dot4", .5, {top: -100, left: 0, scale: 3.6, opacity: 0}, {top: -100, left: 0, scale: 1.4, opacity: 1, delay: 7.8});
        TweenLite.fromTo("#dot5", .5, {top: -100, left: -25, scale: 3.6, opacity: 0}, {top: -100, left: -25, scale: 1.4, opacity: 1, delay: 8.0});
      
      TweenLite.fromTo("#imgScreen", .5, {top: 112, left: 28, opacity: 0}, {top: 112, left: 25, opacity: 1, delay: 8});
      break;

      default:
        document.getElementById("error").style.display = "flex";

  }
  
  // inject text
  // document.getElementById("value").innerHTML = txt;
  
  // console.log(adWidth + ":" + adHeight);

})();