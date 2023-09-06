import { world, buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

export class Building {
    constructor({ id, color, x, y, width, height }) {
        this.id = id;
        this.color = color;
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

        // Bottom of Building Collision Tracker
        // Prevents the player from going through the bottom of the building
        if (buttons.w.pressed) {
            if (world.character.pos.y <= this.pos.y + this.height - world.character.height &&
                world.character.pos.y + world.character.height > this.pos.y + this.height - world.character.height &&
                world.character.pos.x + world.character.width > this.pos.x &&
                world.character.pos.x < this.pos.x + this.width) {
                    world.character.move = false;
                    world.character.pos.y = this.pos.y + this.height - world.character.height;
                    return;
            }
        }
        // Top of Building Collision Tracker
        // Prevents the player from going through the top of the building
        else if (buttons.s.pressed) {
            if (world.character.pos.y + world.character.height >= this.pos.y &&
                world.character.pos.y < this.pos.y &&
                world.character.pos.x + world.character.width > this.pos.x &&
                world.character.pos.x < this.pos.x + this.width) {
                    world.character.move = false;
                    world.character.pos.y = this.pos.y - world.character.height;
                    return;
            }
        }
        // Right Side of Building Collision Tracker
        // Prevents the player from going through the right side of the building
        else if (buttons.a.pressed) {
            if (world.character.pos.x <= this.pos.x + this.width &&
                world.character.pos.x + world.character.width > this.pos.x + this.width &&
                world.character.pos.y + world.character.height > this.pos.y &&
                world.character.pos.y < this.pos.y + this.height - world.character.height) {
                    world.character.move = false;
                    world.character.pos.x = this.pos.x + this.width;
                    return;
            }
        }
        // Left Side of Building Collision Tracker
        // Prevents the player from going through the left side of the building
        else if (buttons.d.pressed) {
            if (world.character.pos.x + world.character.width >= this.pos.x &&
                world.character.pos.x < this.pos.x &&
                world.character.pos.y + world.character.height > this.pos.y &&
                world.character.pos.y < this.pos.y + this.height - world.character.height) {
                    world.character.move = false;
                    world.character.pos.x = this.pos.x - world.character.width;
                    return;
            }
        }
        // If there is no collision, allow the player to move around freely
        else {
            world.character.move = true;
        }
    }
};