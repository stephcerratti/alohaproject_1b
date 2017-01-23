$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

})
var addToCart =document.getElementById("addToCart");
addToCart.addEventListener("click", changeCartQuantity,false);
function changeCartQuantity() {
            var itemQuantity = 0;
            // console.log("I am in the function");
            // is quantitiy zero?       
                if (itemQuantity == 0) {
                    // if yes, then add one to quantity
                    itemQuantity = itemQuantity + 1;
                } else {
                    // if no, then add one to exisiting quantity
                    itemQuantity = itemQuantity + 1;
                }
                    // then display new quantity
                document.getElementById("item-quantity").innerHTML = itemQuantity;
}