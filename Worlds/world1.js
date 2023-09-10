import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
// import { Building } from "./../Classes/building.js";
import { Door } from "./../Classes/door.js";
import { home1_image } from "./../image-tracker.js";
import { doorXPos, doorYPos, drawBuildings } from "./../usefulFunctions.js";
import * as world2 from "./world2.js";

export const name = "World 1";

// To find positions for the background in each building, follow these calculations.
// Before looking at the calculations, it's important to know that both x and y positions of character are 288.
// To get the x position of the character: (canvas.width / 2) - (character.width / 2)
// To get the y position of the character: (canvas.height / 2) - (character.height / 2)
// To find the background's x position: (canvas.width / 2) - (background.width / 2)
// To find the background's y position: (character.y.pos - background.height) + character.height

export const background = new Background({ 
    color: "#F0F8FF", x: 0, y: 0, width: 1472, height: 1472
});

export const character = new Character({
    name: "Box", width: 64, height: 64, color: "red"
});

export const buildings = [
];

// If there is a certain pattern you are going for when placing buildings, you can use the drawBuildings function
// Here, you choose the array you will be pushing the buildings to, how many rows and columns it will use, the separation in width and height, and the image of the building
drawBuildings(buildings, 4,1, 64, 64, home1_image);


// To find positions for the doors on each building, follow these calculations. It works 100% of the time!
// To find door's x position: (building.x + building.width) - (building.width/2) - (door.width/2)
// To find door's y position: (building.y + building.height) - door.height
// Instead of doing the work by yourself, you can use the the necessary functions from the usefulFunctions file

// If inside a building, the door's x and y position is the same as the characters
// This means the door's x and y position are both 288
export const doors = [
    new Door({ id: 1, color: "yellow", x: doorXPos(0, home1_image.width, 64), y: doorYPos(0, home1_image.height, 64), width: 64, height: 64, goesTo: world2 }),
    new Door({ id: 2, color: "yellow", x: doorXPos(384, home1_image.width, 64), y: doorYPos(0, home1_image.height, 64), width: 64, height: 64, goesTo: world2 }),
    new Door({ id: 3, color: "yellow", x: doorXPos(768, home1_image.width, 64), y: doorYPos(0, home1_image.height, 64), width: 64, height: 64, goesTo: world2 }),
    new Door({ id: 4, color: "yellow", x: doorXPos(1152, home1_image.width, 64), y: doorYPos(0, home1_image.height, 64), width: 64, height: 64, goesTo: world2 }),
];
