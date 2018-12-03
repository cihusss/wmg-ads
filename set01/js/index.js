(function launchAd(event) {
 
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
  console.log(bgImage);

  // assign background images to image containers and set dimensions
  for (i = 0; i < 4; i++) {    
      var select = document.getElementById("bg" + i)
      select.style.backgroundImage = bgImage + i + ".jpg" + ")"; 
      select.style.width = adWidth + "px";
      select.style.height = adHeight + "px";
  }

  // adaptive styles and animation sequences
  switch(wrapperWidth + wrapperHeight) {
    // 970+250
    case 1220:
      document.getElementById("button").style.display = "block";
      document.getElementById("button").style.right = "60px";
      document.getElementById("button").style.top = "105px";

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo").style.right = "140px";
      document.getElementById("logo").style.top = "108px";

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 100, right: -100, opacity: 0, delay: 0}, {top: 100, left: 0, opacity: 1 , delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 100, right: -100, opacity: 0, delay: 2}, {top: 100, left: 0, opacity: 1, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 100, right: -100, opacity: 0,  delay: 4}, {top: 100, left: 0, opacity: 1, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 85, right: -100, opacity: 0, delay: 6}, {top: 85, left: 0, opacity: 1, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 115, left: -50, opacity: 0, delay: 6.5}, {top: 115, left: 0, opacity: 1, delay: 6.5, ease: Power2.easeOut});
      break;

    // 300+600
    case 900:
      document.getElementById("button").style.display = "block";
      document.getElementById("button").style.right = "130px";
      document.getElementById("button").style.top = "205px";
      document.getElementById("button").style.scale = ".6";

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo").style.right = "105px";
      document.getElementById("logo").style.top = "140px";

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 50, right: -100, opacity: 0, delay: 0}, {top: 50, left: 0, opacity: 1, delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 50, right: -100, opacity: 0, delay: 2}, {top: 50, left: 0, opacity: 1, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 50, right: -100, opacity: 0,  delay: 4}, {top: 50, left: 0, opacity: 1, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 35, right: -100, opacity: 0, scale: .9, delay: 6}, {top: 35, left: 0, opacity: 1, scale: .9, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 65, left: -50, opacity: 0, delay: 6.5}, {top: 65, left: 0, opacity: 1, delay: 6.5, ease: Power2.easeOut});
      break;

    // 300+250
    case 550:
      document.getElementById("button").style.display = "block";
      document.getElementById("button").style.right = "22px";
      document.getElementById("button").style.top = "190px";

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo").style.right = "25px";
      document.getElementById("logo").style.top = "150px";

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 50, right: -100, textAlign: "right", scale: .8, opacity: 0, delay: 0}, {top: 50, left: 10, opacity: 1, textAlign: "right", delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 50, right: -100, textAlign: "right", scale: .8, opacity: 0, delay: 2}, {top: 50, left: 10, opacity: 1, textAlign: "right", delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 50, right: -100, opacity: 0, textAlign: "right", scale: .8, delay: 4}, {top: 50, left: 10, opacity: 1, textAlign: "right", delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 35, right: -100, lineHeight: 1.2, opacity: 0, width: 180, textAlign: "right", scale: .8, delay: 6}, {top: 35, left: 115, textAlign: "right", lineHeight: 1.2, scale: .8, opacity: 1, width: 180, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 90, left: 30, opacity: 0, scale: .8, delay: 6.5}, {top: 90, left: 69, opacity: 1, scale: .8, delay: 6.5, ease: Power2.easeOut});
      break;

    // 729+90
    case 818:
      document.getElementById("button").style.display = "block";
      document.getElementById("button").style.right = "30px";
      document.getElementById("button").style.top = "28px";

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo").style.right = "90px";
      document.getElementById("logo").style.top = "32px";

      TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
      TweenLite.fromTo("#headline0", 1, {top: 25, right: -100, opacity: 0, delay: 0}, {top: 25, left: 0, opacity: 1, delay: 0, ease: Power2.easeOut});
      TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

      TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
      TweenLite.fromTo("#headline1", 1, {top: 25, right: -100, opacity: 0, delay: 2}, {top: 25, left: 0, opacity: 1, delay: 2, ease: Power2.easeOut});
      TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

      TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
      TweenLite.fromTo("#headline2", 1, {top: 25, right: -100, opacity: 0,  delay: 4}, {top: 25, left: 0, opacity: 1, delay: 4, ease: Power2.easeOut});
      TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

      TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline3", 1, {top: 15, right: -100, lineHeight: 1.2, opacity: 0, delay: 6}, {top: 15, left: 0, lineHeight: 1.2, opacity: 1, delay: 6, ease: Power2.easeOut});
      TweenLite.fromTo("#headline4", 1, {top: 38, left: -50, opacity: 0, delay: 6.5}, {top: 38, left: 0, opacity: 1, delay: 6.5, ease: Power2.easeOut});
      break;

      // 640+480
      case 1120:
        document.getElementById("button").style.display = "block";
        document.getElementById("button").style.right = "240px";
        document.getElementById("button").style.top = "116px";

        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.right = "305px";
        document.getElementById("logo").style.top = "120px";

        // document.getElementById("strong").style.display = "inline";

        TweenLite.fromTo("#bg0", 1, {left: -adWidth, delay: 0}, {left: 0, delay: 0, ease: Power2.easeOut});
        TweenLite.fromTo("#headline0", 1, {top: 40, right: -100, opacity: 0, delay: 0}, {top: 40, left: 0, opacity: 1, delay: 0, ease: Power2.easeOut});
        TweenLite.to("#headline0", .3, {delay: 2, opacity: 0});

        TweenLite.fromTo("#bg1", 1, {left: -adWidth, delay: 2}, {left: 0, delay: 2, ease: Power2.easeOut});
        TweenLite.fromTo("#headline1", 1, {top: 40, right: -100, opacity: 0, delay: 2}, {top: 40, left: 0, opacity: 1, delay: 2, ease: Power2.easeOut});
        TweenLite.to("#headline1", .3, {delay: 4, opacity: 0});

        TweenLite.fromTo("#bg2", 1, {left: -adWidth, delay: 4}, {left: 0, delay: 4, ease: Power2.easeOut});
        TweenLite.fromTo("#headline2", 1, {top: 40, right: -100, opacity: 0,  delay: 4}, {top: 40, left: 0, opacity: 1, delay: 4, ease: Power2.easeOut});
        TweenLite.to("#headline2", .3, {delay: 6, opacity: 0});

        TweenLite.fromTo("#bg3", 1, {left: -adWidth, delay: 6}, {left: 0, delay: 6, ease: Power2.easeOut});
        TweenLite.fromTo("#headline3", 1, {top: 30, right: -100, opacity: 0, delay: 6}, {top: 30, left: 0, opacity: 1, delay: 6, ease: Power2.easeOut});
        TweenLite.fromTo("#headline4", 1, {top: 60, left: -50, opacity: 0, delay: 6.5}, {top: 60, left: 0, opacity: 1, delay: 6.5, ease: Power2.easeOut});

        break;

      default:
        document.getElementById("error").style.display = "flex";
  }
  
  // inject text
  // document.getElementById("value").innerHTML = txt;
  
  // console.log(adWidth + ":" + adHeight);

})();