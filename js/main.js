console.log("JS file is connected");

// variables
const blueberry = document.querySelector("#BlueberryStem", "#LeftBlueberry", "#RightBlueberry", "#TopBlueberry");
console.log(blueberry);

const melon = document.querySelector("#WatermelonSlice");
console.log(melon);

const orange = document.querySelector("#Orange");
console.log(orange);

// functions
function logId() {
    console.log("User Clicked On:", this.id)
}

// EventListener
blueberry.addEventListener("click", logId)
melon.addEventListener("click", logId)
orange.addEventListener("click", logId)