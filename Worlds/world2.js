import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Door } from "./../Classes/door.js";
import * as world1 from "./world1.js";

export const name = "World 2";

// To find positions for the background in each building, follow these calculations.
// Before looking at the calculations, it's important to know that both x and y positions of character are currently 288.
// To get the x position of the character: (canvas.width / 2) - (character.width / 2)
// To get the y position of the character: (canvas.height / 2) - (character.height / 2)
// To find the background's x position: (canvas.width / 2) - (background.width / 2)
// To find the background's y position: (character.y.pos - background.height) + character.height

export const background = new Background({ 
    color: "#F0F8FF", x: 128, y: -96, width: 384, height: 448
});

export const character = new Character({
    name: "Box", width: 64 , height: 64, color: "red"
});

// To find positions for the doors on each building, follow these calculations. It works 100% of the time!
// To find the door's x position: (building.x + building.width) - (building.width/2) - (door.width/2)
// To find the door's y position: (building.y + building.height) - door.height

// If inside a building, the door's x and y position is the same as the characters
// This means the door's x and y position are both 288
export const doors = [
    new Door({ id: 1, color: "yellow", x: 288, y: 288, width: 64, height: 64, goesTo: world1 }),
];