$("p").mouseenter(function() {
  clearInterval(anim);
});

$("p").mouseleave(function() {
 anim = setInterval(menuanim, 40);
});

function isLess(width, padding){
if(window.innerWidth - width > padding){
return true;}
else{
return false;	
}}



//Left - Right
var speed = [(Math.random() * 4.65) + 1, (Math.random() * 2.565) + 1, (Math.random() * 4.765) + 1, (Math.random() * 3.9323432) + 1, (Math.random() * 2.7) + 1, (Math.random() * 4.88) + 1, (Math.random() * 2.65) + 1, (Math.random() * 4.65) + 1, (Math.random() * 4.65) + 1, (Math.random() * 3.65) + 1];
var playstate = ["forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards"];

function menuanim(){
for(var i = 0; i < $(".item").length; i++){
	
if(playstate[i] == "forwards"){

  if(isLess($($(".item").get(i)).css("width"), $($(".item").get(i)).css("padding-left"))){
  $($(".item").get(i)).css("padding-left") += (speed[i] + "px");
}

else{
    playstate[i] = "backwards";}}


else{

  if($($(".item").get(i)).css("padding-left") != 0){
    $($(".item").get(i)).css("padding-left")  -= (speed[i] + "px");}

    else{
    playstate[i] = "forwards";
  }}}}

var anim = setInterval(menuanim, 40);

//Up - Down

//Rotating
