import { world, buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export class Door {
    constructor({ id, color, x, y, width, height, goesTo }) {
        this.id = id;
        this.color = color;
        this.pos = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
        this.goesTo = goesTo;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();
    }
}