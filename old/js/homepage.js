$("p").mouseenter(function() {
  clearInterval(anim);
});

$("p").mouseleave(function() {
 anim = setInterval(menuanim, 40);
});

//Left - Right
var speed = [(Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1)];
var playstate = ["forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards"];

function menuanim(){
for(var i = 0; i < $(".item").length; i++){
var left = parseInt($($(".item").get(i)).css("padding-left"));
if(playstate[i] == "forwards"){
  if(left < Math.round(window.innerWidth - (parseInt($($(".item p").get(i)).css("width")) + 10))){
  left += speed[i];
  $($(".item").get(i)).css("padding-left",  left + "px");
}else{
    playstate[i] = "backwards";}}
else{
  if(left != 0){
  left -= speed[i];
    $($(".item").get(i)).css("padding-left",  left + "px");}
    else{
    playstate[i] = "forwards";
  }}}}

var anim = setInterval(menuanim, 40);

//Up - Down

//Rotating

