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

/*slide*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-slide',
      prevEl: '.swiper-slide',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });