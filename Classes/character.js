import { world, buttons } from "./../index.js";
import { move } from "./building.js";

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
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();
        if (buttons.w.pressed) {         
            if (this.pos.y <= world.background.pos.y) {
                return;
            }
            else {
                if (move === false) {
                    world.background.pos.y += 0;
                    world.buildings.forEach(building => {
                        building.pos.y += 0;
                    })
                    return;
                }
                world.background.pos.y += 1;
                world.buildings.forEach(building => {
                    building.pos.y += 1;
                })
            }
        }
        else if (buttons.s.pressed) {
            if (this.pos.y + this.height >= world.background.pos.y + world.background.height) {
                return;
            }
            else {
                if (move === false) {
                    world.background.pos.y -= 0;
                    world.buildings.forEach(building => {
                        building.pos.y -= 0;
                    })
                    return;
                }
                world.background.pos.y -= 1;
                world.buildings.forEach(building => {
                    building.pos.y -= 1;
                })
            }
        }
        else if (buttons.a.pressed) {
            if (this.pos.x <= world.background.pos.x) {
                return;
            }
            else {
                if (move === false) {
                    world.background.pos.x += 0;
                    world.buildings.forEach(building => {
                        building.pos.x += 0;
                    })
                    return;
                }
                world.background.pos.x += 1;
                world.buildings.forEach(building => {
                    building.pos.x += 1;
                })
            }
        }
        else if (buttons.d.pressed) {
            if (this.pos.x + this.width >= world.background.pos.x + world.background.width) {
                return;
            }
            else {
                if (move === false) {
                    world.background.pos.x -= 0;
                    world.buildings.forEach(building => {
                        building.pos.x -= 0;
                    })
                    return;
                }
                world.background.pos.x -= 1;
                world.buildings.forEach(building => {
                    building.pos.x -= 1;
                })
            }
        }
    }
}