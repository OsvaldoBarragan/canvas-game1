import { world, buttons } from "./../index.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

export class Character {
    constructor({ name, width, height, color }) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.pos = {
            x: (canvas.width / 2) - (this.width / 2),
            y: (canvas.height / 2) - (this.height / 2)
        }
        this.color = color;
        this.move = true;
        this.speed = 3;
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
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.y += 0;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.y += 0;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.y += 0;
                    })
                }
                world.background.pos.y += 0;
                return;
            }
            // Moves everything down
            else {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.y += this.speed;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.y += this.speed;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.y += this.speed;
                    })
                }
                world.background.pos.y += this.speed;
            }
        }
        else if (buttons.s.pressed && this.move) {
            // Prevents everything from moving if player collides with the bottom of the background
            if (this.pos.y + this.height >= world.background.pos.y + world.background.height) {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.y -= 0;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.y -= 0;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.y -= 0;
                    })
                }
                world.background.pos.y -= 0;
                return;
            }
            // Moves everything up
            else {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.y -= this.speed;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.y -= this.speed;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.y -= this.speed;
                    })
                }
                world.background.pos.y -= this.speed;
            }
        }
        else if (buttons.a.pressed && this.move) {
            // Prevents everything from moving if player collides with the left side of the background
            if (this.pos.x <= world.background.pos.x) {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.x += 0;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.x += 0;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.x += 0;
                    })
                }
                world.background.pos.x += 0;
                return;
            }
            // Moves everything to the right
            else {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.x += this.speed;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.x += this.speed;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.x += this.speed;
                    })
                }
                world.background.pos.x += this.speed;
            }
        }
        else if (buttons.d.pressed && this.move) {
            // Prevents everything from moving if player collides with the right side of the background
            if (this.pos.x + this.width >= world.background.pos.x + world.background.width) {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.x -= 0;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.x -= 0;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.x -= 0;
                    })
                }
                world.background.pos.x -= 0;
                return;
            }
            // Moves everything to the left
            else {
                if (world.tiles !== undefined) {
                    world.tiles.forEach(tile => {
                        tile.pos.x -= this.speed;
                    })
                }
                if (world.buildings !== undefined) {
                    world.buildings.forEach(building => {
                        building.pos.x -= this.speed;
                    })
                }
                if (world.doors !== undefined) {
                    world.doors.forEach(door => {
                        door.pos.x -= this.speed;
                    })
                }
                world.background.pos.x -= this.speed;
            }
        }
    }
}