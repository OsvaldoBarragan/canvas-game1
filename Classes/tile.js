import { grass1 } from "./../image-tracker.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export class Tile {
    constructor({ type, number, x, y, rows, cols }) {
        this.type = type;
        this.number = number;
        this.pos = {
            x: x,
            y: y
        }
        this.rows = rows;
        this.cols = cols;
    }
    draw() {
        if (this.type === "grass") {
            if (this.number === 1) {
                let imgX = 0;
                let imgY = 0;
                for (let i = 0; i < this.cols; i++) {
                    for (let j = 0; j < this.rows; j++) {
                        ctx.drawImage(grass1, this.pos.x + imgX, this.pos.y + imgY);
                        imgX += grass1.width;
                    }
                    imgY += grass1.height;
                    imgX = 0;
                }
            }
        }
    }
    update() {
        this.draw();
    }
}