import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Building } from "./../Classes/building.js";
import { Door } from "./../Classes/door.js";
import * as world2 from "./world2.js";

export const name = "World 1";

export const background = new Background({ 
    color: "#F0F8FF", x: 0, y: 0, width: 1280, height: 1280
});

export const character = new Character({
    name: "Box", width: 64, height: 64, color: "red"
});

export const buildings = [
    new Building({ id: 1, color: "blue", x: 50, y: 600, width: 320, height: 300 }),
    new Building({ id: 2, color: "blue", x: 500, y: 600, width: 200, height: 300 }),
    new Building({ id: 3, color: "blue", x: 800, y: 600, width: 100, height: 300 })
];


// To find positions for the doors in each building, follow these calculations. It works 100% of the time!
// To find door's x position: (building.x + building.width) - (building.width/2) - (door.width/2)
// To find door's y position: (building.y + building.height) - door.height

// If inside a building, the door's x and y position is the same as the characters
// This means the door's x and y position are both 288
export const doors = [
    new Door({ id: 1, color: "yellow", x: 102, y: 836, width: 96, height: 64, goesTo: world2 }),
    new Door({ id: 2, color: "yellow", x: 552, y: 836, width: 96, height: 64, goesTo: world2 }),
    new Door({ id: 3, color: "yellow", x: 818, y: 836, width: 64, height: 64, goesTo: world2 }),
];
