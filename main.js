$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});



var cartQuantity = 0;

$(".addToCart").on("click", function (){
    cartQuantity += 1;
    console.log("i work");
    $(".cart-count").html(cartQuantity);                   
    $("#cart-quantity").show(); 
 });

});


