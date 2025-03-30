let yellow = document.getElementById("yellow");
let red = document.getElementById("red");
let green = document.getElementById("green");
let trafficLightState = 0;
document.getElementById("button").addEventListener("click", ()=>{
    trafficLightState = (trafficLightState + 1) % 3;
    changeState();
});
function changeState() {
  switch (trafficLightState) {
    case 0:
    yellow.className = "light light-off";
    red.className = "light red-light";    
      break;
    case 1:

        red.className = "light light-off";
        green.className = "light green-light";

      break;
    case 2:
        green.className = "light light-off";
        yellow.className = "light yellow-light";
      break;
   
  }
}
