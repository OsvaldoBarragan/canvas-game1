import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Building } from "./../Classes/building.js";
import { Door } from "./../Classes/door.js";
import { Tile } from "./../Classes/tile.js";
import { home1 } from "./../image-tracker.js";
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

export const tiles = [
    new Tile({ type: "grass", number: 1, x: 0, y: 0, rows: 23, cols: 23 }),
    new Tile({ type: "walkway", number: 1, x: 1152, y: 64, rows: 8, cols: 1 }),
    new Tile({ type: "walkway", number: 2, x: 256, y: 512, rows: 1, cols: 7 }),
    new Tile({ type: "walkway", number: 2, x: 128, y: 768, rows: 1, cols: 8 }),
    new Tile({ type: "walkway", number: 3, x: 1152, y: 512, rows: 1, cols: 1 }),
    new Tile({ type: "walkway", number: 3, x: 1152, y: 768, rows: 1, cols: 1 }),
    new Tile({ type: "walkway", number: 1, x: 64, y: 768, rows: 3, cols: 1 }),
    new Tile({ type: "walkway", number: 3, x: 64, y: 768, rows: 1, cols: 1 }),
]

export const character = new Character({
    name: "Box", width: 64, height: 64, color: "red"
});

export const buildings = [
    new Building({ id: 1, image: home1, x: 0, y: 0}),
    new Building({ id: 2, image: home1, x: 320, y: 0 }),
    new Building({ id: 3, image: home1, x: 640, y: 0 }),
    new Building({ id: 4, image: home1, x: 64, y: 1088 }),
    new Building({ id: 5, image: home1, x: 768, y: 1088 }),
    new Building({ id: 6, image: home1, x: 1088, y: 1088 }),
];


// To find positions for the doors on each building, follow these calculations. It works 100% of the time!
// To find door's x position: (building.x + building.width) - (building.width/2) - (door.width/2)
// To find door's y position: (building.y + building.height) - door.height
// Instead of doing the work by yourself, you can use the the necessary functions from the usefulFunctions file (Currently Not Ready For Use)

// If inside a building, the door's x and y position is the same as the characters
// This means the door's x and y position are both 288
export const doors = [
    new Door({ id: 1, color: "yellow", x: 128, y: 256, width: 64, height: 64, goesTo: world2 }),
    new Door({ id: 2, color: "yellow", x: 192, y: 1344, width: 64, height: 64, goesTo: world2 }),
];
