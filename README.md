
# 탬버린즈 리디자인 - 김송희 (https://solsong.github.io/newtam/)

## 제작기간 일주일

## 사용언어 : HTML CSS Jacascript

## 사용기술 

### 1. 사용 폰트 마루부리
```css
@font-face {
    font-family: MaruBuri-Regular;
    src: url(../font/MaruBuri-Regular.ttf);
    src: url(../font/MaruBuri-Regular.otf);
}

```
### 2. 메뉴 효과
```js
//meun
$('.menubtn').click(function(){
    $('.menu').show();
});
$('.manu-bg').click(function(){
    $('.menu').hide();
});
$('nav ul li').hover(function(){
    $(this).find('.sub').stop().slideDown(600);
},function(){
    $(this).find('.sub').stop().slideUp(300);
});

```
### 3. 뱃지 효과
```js
//slide badge 이미지 회전
window.onscroll = function(){
    scrollRotate(); 
    };
    function scrollRotate() {
    let image = document.getElementById("logobadgeimg");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
    }

// cnadle 부유효과
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(0.5, 2.5), {
    y : size,
    repeat : -1,
    yoyo : true,
    ease : Power1.easeInOut,
    delay : random(0, delay)
    });
}
floatingObject('.candle', 1, 15);

```
### 4. fade in/out slide
```js
$('.slide-box ul li img').hide();
$('.slide-box ul li img:first').fadeIn();

let img = 2;
let now = 0;
setInterval(function(){
    now =(img === now) ? 0 : now += 1;
    $('.slide-box ul li img').eq(now - 1).fadeOut();
    $('.slide-box ul li img').eq(now).fadeIn();
},3000);
```

### 5. youtube
```js
$(window).on("resize load", function() {
    $(".site-header iframe").each(function() {
        var self = $(this);
        var container = self.parent();

        self.css({
            width: container.width() + "px",
            height: container.width() * (9 / 16) + "px",
            position: "absolute",
            marginTop: -container.width() * (9 / 32) + "px",
            top: "50%"
        });
    });
});

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player("yt-player", {
        autoplay: 1,
        videoId: "yZM5VAKi5vU",
        playerVars: {
            autoplay: 1,
            rel: 0,
            showinfo: 0,
            showsearch: 0,
            controls: 0,
            loop: 1,
            enablejsapi: 1,
            playlist: "yZM5VAKi5vU"
        },
        events: {
            onReady: onPlayerReady
            //"onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo(); 
}

function onPlayerStateChange(event) {
    var id = "yZM5VAKi5vU";

    if (event.data === YT.PlayerState.ENDED) {
        player.loadVideoById(id);
    }
}
```

