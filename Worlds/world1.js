import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Building } from "./../Classes/building.js";
import { world } from "../index.js";

export const background = new Background({ 
    color: "#F0F8FF", x: 0, y: 0, width: 1280, height: 1280
});

export const character = new Character({
    name: "Box", width: 64 , height: 64, color: "red"
});

export const buildings = [
    new Building({ color: "blue", x: 100, y: 600, width: 200, height: 300 }),
];
