function setInitialStates() {
    hideAll([".road", ".red_car", ".red_car_rear_rim", ".red_car_front_rim", ".black_car", ".black_car_rear_rim", ".black_car_front_rim"
        , ".blue_car", ".blue_car_rear_rim", ".blue_car_front_rim", ".txt_1", ".txt_2", ".txt_3", ".txt_4", ".txt_5", ".bg-exit2"]);
}
// Preload all assets beforehead
// -----------------------------
function preload(preloadPath, preloadImages) {
  console.log("Preloading assets passed by window.onload function...");
  assetsPath = preloadPath;
  var lastLoaded = 0;
  loadNext();
  
  function loadNext() {
    if (lastLoaded >= preloadImages.length) {
      mainInit();
    } else {
      var img = new Image();
      img.src = preloadPath + '/' + preloadImages[lastLoaded];
      img.onload = loadNext;
      console.log("preload image: " + img.src);
    }
    lastLoaded++;
  }
}
// initialize
window.onload = preload('images', ["road.png"]);

function mainInit() {
    eventListeners();
    setInitialStates();
    $('.container').show();
    seq01();
}
var black_car_start = false;
var rad_car_start = false;
var blue_car_start = false;

function rad_car() {
    rad_car_start = true;
    $('.road').show();
    TweenMax.set($('.road'), { x: -736 });
    var twnDelay = 0;
    $('.red_car_rear_rim').show();
    $('.red_car_front_rim').show();
    $('.red_car').show();
    TweenMax.set($('.red_car_rear_rim'), { x: 195, y: 31 });
    TweenMax.set($('.red_car_front_rim'), { x: 50, y: 35 });
    // TweenMax.set($('.red_car'), { x: 23, y: 170 });

    TweenMax.to([$('.txt_1'),$('.txt_2'),$('.blue_car'),$('.black_car')], 0.5, { opacity: 0 ,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.to($('.red_car'), 0.75, { x: 23, y: 170, scale: 1 ,ease: Power1.easeOut,delay: twnDelay });
    TweenMax.from($('.road'), 0.75, {opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 0.75;

    TweenMax.to($('.red_car_rear_rim'), 5, { rotation: -2000, transformOrigin: '48.9% 47.6%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.red_car_front_rim'), 5, { rotation: -2000, transformOrigin: '51% 47.6%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.road'), 5, {x: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 3;
    TweenMax.to($('.red_car'), 1, {x: -600 ,ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.red_car_rear_rim'), 1, { rotation: -4000, transformOrigin: '48.9% 47.6%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.red_car_front_rim'), 1, { rotation: -4000, transformOrigin: '51% 47.6%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.road'), 0.5, {x: 0, opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay +=1;
    TweenMax.delayedCall(twnDelay, endFrame);
}
function black_car() {
    black_car_start = true;
    $('.road').show();
    TweenMax.set($('.road'), { x: -736 });
    var twnDelay = 0;
    $('.black_car_rear_rim').show();
    $('.black_car_front_rim').show();
    $('.black_car').show();
    TweenMax.set($('.black_car_rear_rim'), { x: 172, y: 65 });
    TweenMax.set($('.black_car_front_rim'), { x: 25, y: 65 });

    TweenMax.to([$('.txt_1'),$('.txt_2'),$('.blue_car'),$('.red_car')], 0.5, { opacity: 0 ,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.to($('.black_car'), 0.75, { x: 40, y: 145, scale: 1 ,ease: Power1.easeOut,delay: twnDelay });
    TweenMax.from($('.road'), 0.75, {opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 0.75;
    TweenMax.to($('.black_car_rear_rim'), 5, { rotation: -2000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.black_car_front_rim'), 5, { rotation: -2000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.road'), 5, {x: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 3;
    TweenMax.to($('.road'), 0.5, {x: 0, opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.black_car'), 1, {x: -600 ,ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.black_car_rear_rim'), 1, { rotation: -4000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.black_car_front_rim'), 1, { rotation: -4000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    twnDelay +=1;
    TweenMax.delayedCall(twnDelay, endFrame);
    
}
function blue_car() {
    blue_car_start = true;
    $('.road').show();
    TweenMax.set($('.road'), { x: -736 });
    var twnDelay = 0;
    $('.blue_car_rear_rim').show();
    $('.blue_car_front_rim').show();
    $('.blue_car').show();
    TweenMax.set($('.blue_car_rear_rim'), { x: 188, y: 38 });
    TweenMax.set($('.blue_car_front_rim'), { x: 35, y: 38 });
    // TweenMax.set($('.blue_car'), { x: 20, y: 165 });

    TweenMax.to([$('.txt_1'),$('.txt_2'),$('.red_car'),$('.black_car')], 0.5, { opacity: 0 ,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.to($('.blue_car'), 0.75, { x: 20, y: 165, scale: 1 ,ease: Power1.easeOut,delay: twnDelay });
    TweenMax.from($('.road'), 0.75, {opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 0.75;

    TweenMax.to($('.blue_car_rear_rim'), 5, { rotation: -2000, transformOrigin: '49% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.blue_car_front_rim'), 5, { rotation: -2000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.road'), 5, {x: 0 ,ease: Power0.easeOut,delay: twnDelay });
    twnDelay += 3;
    TweenMax.to($('.road'), 0.5, {x: 0, opacity: 0 ,ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.blue_car'), 1, {x: -600 ,ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.blue_car_rear_rim'), 1, { rotation: -4000, transformOrigin: '49% 49%',ease: Power0.easeOut,delay: twnDelay });
    TweenMax.to($('.blue_car_front_rim'), 1, { rotation: -4000, transformOrigin: '51% 49%',ease: Power0.easeOut,delay: twnDelay });
    twnDelay +=1;
    TweenMax.delayedCall(twnDelay, endFrame);
    
}
function seq01() {
    var twnDelay = 0;
    $('.txt_1').show();
    $('.txt_2').show();
    $('.blue_car').show();
    $('.black_car').show();
    $('.red_car').show();

    TweenMax.set($('.blue_car'), { scale: 0.55362, x: 96, y: 62 });
    TweenMax.set($('.red_car'), { scale: 0.55293, x: 23, y: 118 });
    TweenMax.set($('.black_car'), { scale: 0.55222, x: -42, y: 45 });
    twnDelay += 0.5;
    TweenMax.from($('.txt_1'), 0.75, {scale: 0, opacity: 0,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($('.black_car'), 0.75, {scale: 0,opacity: 0,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($('.red_car'), 0.75, {scale: 0,opacity: 0,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($('.blue_car'), 0.75, {scale: 0,opacity: 0,ease: Power1.easeOut,delay: twnDelay });
    twnDelay += 0.5;
    TweenMax.from($('.txt_2'), 0.75, {scale: 0,opacity: 0,ease: Power1.easeOut,delay: twnDelay });
}
function endFrame() {
    var twnDelay = 0;

    $(".txt_3").show();
    $(".txt_4").show();
    $(".txt_5").show();

    TweenMax.from($('.txt_3'), 0.5, {x: 300 ,ease: Power2.easeOut,delay: twnDelay });
    twnDelay += 0.25;
    TweenMax.from($('.txt_4'), 0.5, {x: 300 ,ease: Power2.easeOut,delay: twnDelay });
    twnDelay += 0.25;
    TweenMax.from($('.txt_5'), 0.5, {x: 300 ,ease: Power2.easeOut,delay: twnDelay });

    
}

function hideAll(whichOnes) {
    for (q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}
function eventListeners() {
    $('.black_car').on('mouseenter', function() {
        if (black_car_start == false){
            TweenMax.to($('.black_car'), 0.25, {scale: 0.6,ease: Power1.easeOut});
        }
    });
    $('.black_car').on('mouseleave', function() {
        if (black_car_start == false){
            TweenMax.to($('.black_car'), 0.25, {scale: 0.55222,ease: Power1.easeOut});
        }
    });
    $('.red_car').on('mouseenter', function() {
        if (rad_car_start == false){
            TweenMax.to($('.red_car'), 0.25, {scale: 0.6,ease: Power1.easeOut});
        }
    });
    $('.red_car').on('mouseleave', function() {
        if (rad_car_start == false){
            TweenMax.to($('.red_car'), 0.25, {scale: 0.55293,ease: Power1.easeOut});
        }
    });
    $('.blue_car').on('mouseenter', function() {
        if (blue_car_start == false){
            TweenMax.to($('.blue_car'), 0.25, {scale: 0.6,ease: Power1.easeOut});
        }
    });
    $('.blue_car').on('mouseleave', function() {
        if (blue_car_start == false){
            TweenMax.to($('.blue_car'), 0.25, {scale: 0.55362,ease: Power1.easeOut});
        }
    });
    $('.black_car').on('click', function() {
        if (black_car_start == false){
            black_car();
            $(".bg-exit2").show();
        }
    });
    $('.red_car').on('click', function() {
        if (rad_car_start == false){
            rad_car();
            $(".bg-exit2").show();
        }
    });
    $('.blue_car').on('click', function() {
        if (blue_car_start == false){
            blue_car();
            $(".bg-exit2").show();
        }
    });
}
// window.onload = mainInit();
