import { world, buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
export let move = true;

export class Building {
    constructor({ color, x, y, width, height }) {
        // The color of the Background
        this.color = color;
        // The Position of the Background
        this.pos = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();

        if (world.character.pos.y <= this.pos.y + this.height - world.character.height &&
            world.character.pos.y + world.character.height > this.pos.y + this.height - world.character.height &&
            world.character.pos.x + world.character.width > this.pos.x &&
            world.character.pos.x < this.pos.x + this.width) {
                if (buttons.w.pressed) {
                    move = false;
                    world.character.pos.y = this.pos.y + this.height - world.character.height;
                }
                else {
                    move = true;
                }
        }
        else if (world.character.pos.y + world.character.height >= this.pos.y &&
            world.character.pos.y < this.pos.y &&
            world.character.pos.x + world.character.width > this.pos.x &&
            world.character.pos.x < this.pos.x + this.width) {
                if (buttons.s.pressed) {
                    move = false;
                    world.character.pos.y = this.pos.y - world.character.height;
                }
                else {
                    move = true;
                }
        }
        else if (world.character.pos.x <= this.pos.x + this.width &&
            world.character.pos.x + world.character.width > this.pos.x + this.width &&
            world.character.pos.y + world.character.height > this.pos.y &&
            world.character.pos.y < this.pos.y + this.height - world.character.height) {
                if (buttons.a.pressed) {
                    move = false;
                    world.character.pos.x = this.pos.x + this.width;
                }
                else {
                    move = true;
                }
        }
        else if (world.character.pos.x + world.character.width >= this.pos.x &&
            world.character.pos.x < this.pos.x &&
            world.character.pos.y + world.character.height > this.pos.y &&
            world.character.pos.y < this.pos.y + this.height - world.character.height) {
                if (buttons.d.pressed) {
                    move = false;
                    world.character.pos.x = this.pos.x - world.character.width;
                }
                else {
                    move = true;
                }
        }
        else {
            move = true;
        }
    }
};