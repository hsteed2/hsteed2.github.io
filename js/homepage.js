$("p").click(function() {
  alert("test!!");
});
var speed = [(Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1), (Math.floor(Math.random() * 3) + 1)];
var playstate = ["forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards", "forwards"];

function menuanim(){
for(var i = 0; i < $(".item").length; i++){
var left = parseInt($($(".item").get(i)).css("padding-left"));
if(playstate[i] == "forwards"){
  if(left < Math.round(window.innerWidth - (parseInt($($(".item p").get(i)).css("width")) + 10))){
  left += speed[i];
  $($(".item").get(i)).css("padding-left",  left);
}else{
    playstate[i] = "backwards";}}
else{
  if(left != 0){
  left -= speed[i];
    $($(".item").get(i)).css("padding-left",  left);}
    else{
    playstate[i] = "forwards";
  }}}}

setInterval(menuanim, 10);

/*
const items = document.getElementsByClassName("item");
var playstate = "forwards";

function menuanim() {
  for (var i = 0; i < (items.length + 1); i++) {
    var lpadding = parseInt($($(".item").get(i)).css("padding-left"));
    if (playstate == "forwards") {
      if (lpadding < (window.innerWidth - parseInt($($(".item p").get(i)).css("width")))) {
        var padding = lpadding;
        padding++;
        $($(".item").get(i)).css("padding-left", padding);
      } else {
        playstate = "backwards";
      }
    } else {
      if (padding >= (window.innerWidth - parseInt($($(".item p").get(i)).css("width")))) {
        var padding = lpadding;
        padding--;
        $($(".item").get(i)).css("padding-left", padding);
      } else {
        playstate = "forwards";
      }
    }
  }
}
*/
