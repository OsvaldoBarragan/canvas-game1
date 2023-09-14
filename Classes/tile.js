import { grass1, walkway1_vertical, walkway1_horizontal, walkway1_empty } from "./../image-tracker.js";

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
        function drawOutTiles(imgName, rows, cols, posX, posY) {
            let imgX = 0;
            let imgY = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    ctx.drawImage(imgName, posX + imgX, posY + imgY);
                    imgX += imgName.width;
                }
                imgY += imgName.height;
                imgX = 0;
            }
        }

        if (this.type === "grass") {
            if (this.number === 1) {
                // let imgX = 0;
                // let imgY = 0;
                // for (let i = 0; i < this.cols; i++) {
                //     for (let j = 0; j < this.rows; j++) {
                //         ctx.drawImage(grass1, this.pos.x + imgX, this.pos.y + imgY);
                //         imgX += grass1.width;
                //     }
                //     imgY += grass1.height;
                //     imgX = 0;
                // }
                drawOutTiles(grass1, this.rows, this.cols, this.pos.x, this.pos.y);
            }
        }
        if (this.type === "walkway") {
            if (this.number === 1) {
                drawOutTiles(walkway1_vertical, this.rows, this.cols, this.pos.x, this.pos.y);
            }
            if (this.number === 2) {
                drawOutTiles(walkway1_horizontal, this.rows, this.cols, this.pos.x, this.pos.y);
            }
            if (this.number === 3) {
                drawOutTiles(walkway1_empty, this.rows, this.cols, this.pos.x, this.pos.y);
            }
        }
    }
    update() {
        this.draw();
    }
}