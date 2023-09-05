import { Background } from "./../Classes/background.js";
import { Character } from "./../Classes/character.js";
import { world } from "../index.js";

export const backgrounds = [
    new Background({ color: "#F0F8FF", x: 0, y: 0, width: 750, height: 500 }),
]

export const character = new Character({
    name: "Box", width: 64 , height: 64, x: 0, y: 0, color: "red"
});
