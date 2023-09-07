import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Door } from "./../Classes/door.js";
import * as world1 from "./world1.js";

export const name = "World 2";

export const background = new Background({ 
    color: "#F0F8FF", x: 220, y: -248, width: 400, height: 600
});

export const character = new Character({
    name: "Box", width: 64 , height: 64, color: "red"
});

// To find positions for the doors on each building, follow these calculations. It works 100% of the time!
// To find the door's x position: (building.x + building.width) - (building.width/2) - (door.width/2)
// To find the door's y position: (building.y + building.height) - door.height

export const doors = [
    new Door({ id: 1, color: "yellow", x: 288, y: 288, width: 64, height: 64, goesTo: world1 }),
];