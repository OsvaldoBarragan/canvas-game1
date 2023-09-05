import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { Building } from "./../Classes/building.js";
import { world } from "../index.js";

export const backgrounds = [
    new Background({ color: "#F0F8FF", x: 0, y: 0, width: 1000, height: 500 }),
]

export const character = new Character({
    name: "Box", width: 64 , height: 64, x: 350, y: 250, color: "red"
});

export const buildings = [
    new Building({ color: "blue", x: 100, y: 100, width: 200, height: 300 }),
]
