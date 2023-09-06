import { world, buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

export class Character {
    constructor({ name, width, height, color }) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.pos = {
            x: 288,
            y: 288
        }
        this.color = color;
        this.move = true;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();

        if (buttons.w.pressed && this.move) {
            // Prevents everything from moving if player collides with the top of the background         
            if (this.pos.y <= world.background.pos.y) {
                world.buildings.forEach(building => {
                    building.pos.y += 0;
                })
                world.background.pos.y += 0;
                return;
            }
            // Moves everything down
            else {
                world.buildings.forEach(building => {
                    building.pos.y += 1;
                })
                world.background.pos.y += 1;
            }
        }
        else if (buttons.s.pressed && this.move) {
            // Prevents everything from moving if player collides with the bottom of the background
            if (this.pos.y + this.height >= world.background.pos.y + world.background.height) {
                world.buildings.forEach(building => {
                    building.pos.y -= 0;
                })
                world.background.pos.y -= 0;
                return;
            }
            // Moves everything up
            else {
                world.buildings.forEach(building => {
                    building.pos.y -= 1;
                })
                world.background.pos.y -= 1;
            }
        }
        else if (buttons.a.pressed && this.move) {
            // Prevents everything from moving if player collides with the left side of the background
            if (this.pos.x <= world.background.pos.x) {
                world.buildings.forEach(building => {
                    building.pos.x += 0;
                })
                world.background.pos.x += 0;
                return;
            }
            // Moves everything to the right
            else {
                world.buildings.forEach(building => {
                    building.pos.x += 1;
                })
                world.background.pos.x += 1;
            }
        }
        else if (buttons.d.pressed && this.move) {
            // Prevents everything from moving if player collides with the right side of the background
            if (this.pos.x + this.width >= world.background.pos.x + world.background.width) {
                world.buildings.forEach(building => {
                    building.pos.x -= 0;
                })
                world.background.pos.x -= 0;
                return;
            }
            // Moves everything to the left
            else {
                world.buildings.forEach(building => {
                    building.pos.x -= 1;
                })
                world.background.pos.x -= 1;
            }
        }
    }
}