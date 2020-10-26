

$(document).ready(function(){

/* -------menu----------- */
$('.icon').click(function(){
    $('.header .menu ul').slideToggle();

});


  // smooth Scroll 
  $('.menu a').click(function(){
    
    $('body,html').animate({
        scrollTop : $($(this).attr('href')).offset().top - 60
    });
    
  });

//when scroll body  (sticky navbar)
$(window).scroll(function(){
var sc=$(this).scrollTop();
if(sc>50)
{
    $('.header').addClass('sticky');
}
else{

  
  $('.header').removeClass('sticky');
}

      



});

/* services owl carousel---> */
  $('.services .owl-carousel').owlCarousel({
  
  autoplay:true,
  autoplayTimeout:3000,
  loop:true,
  margin:20,
  nav:false,
  

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  });

    // Portfolio 
  $('.buttons button').click(function(){

  $(this).addClass('active_btn').siblings().removeClass('active_btn');
    var cfilter=$(this).attr('id');
    
    if(cfilter==='all'){

      $('.Images  div ').fadeIn();
    }
    else{
      $('.Images  div').fadeOut();
      $('.Images ').contents().filter('.' +cfilter).fadeIn();
    }

});

/* ----------pop */
$('.pop').magnificPopup({
  type:'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
  


});

$(window).scroll(function(){
var scrr=$(this).scrollTop();


//Scroll Top Btn
if ( scrr > 500) { // Fade The Scroll Top Btn
      
  $('.scrollTop').fadeIn();
  
} else {
  
  $('.scrollTop').fadeOut();
  
}


});

// Scroll to Top
$('.scrollTop').click(function(){
$('body,html').animate({
scrollTop : 0
},300);
});



/* stat count */

$(window).scroll(function(){
var scr=$(this).scrollTop();
var scr_sta= $('.sta').offset().top-200;
if( scr> scr_sta  )
{
  
    $('.time').countTo();
    $(window).off('scroll');  
}


});

/* people owl-carousel */


$('.people .owl-carousel').owlCarousel({
autoplay:true,
autoplayTimeout:5000,
loop:true,
margin:20,
nav:false,


responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});

  


$(window).scroll(function(){
  var scr=$(this).scrollTop();


  //Scroll Top Btn
  if ( scr > 500) { // Fade The Scroll Top Btn
        
    $('.scrollTop').fadeIn();
    
} else {
    
    $('.scrollTop').fadeOut();
    
}
  
  
});

// Scroll to Top
$('.scrollTop').click(function(){
$('body,html').animate({
scrollTop : 0
},300);
});

//AOS animation

AOS.init();


    





}); 