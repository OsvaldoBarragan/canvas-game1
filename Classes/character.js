import { buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

export class Character {
    constructor({ name, width, height, x, y, color }) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.pos = {
            x: x,
            y: y
        }
        this.color = color;
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        if (buttons.w.pressed) {
            this.velocity.y = -1;
            this.velocity.x = 0;
        }
        else if (buttons.s.pressed) {
            this.velocity.y = 1;
            this.velocity.x = 0;
        }
        else if (buttons.a.pressed) {
            this.velocity.x = -1;
            this.velocity.y = 0;
        }
        else if (buttons.d.pressed) {
            this.velocity.x = 1;
            this.velocity.y = 0;
        }
        else {
            this.velocity.y = 0;
            this.velocity.x = 0;
        }
    }
}