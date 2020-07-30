//Manuanim 2.0 By Harrison Steed

//Pause The Animation when the mouse is hovering over an item
$("p").mouseenter(function() {
//  clearInterval(anim);
});

//Resume the animation
$("p").mouseleave(function() {
// anim = setInterval(menuanim, 40);
});


//Left - Right

const menuanim = () => {
//loop through the menu items and move them 1px to the left
$(".item p").css("left", "20px");
}
//var anim = setInterval(menuanim, 40);

//Up - Down

//Rotating
