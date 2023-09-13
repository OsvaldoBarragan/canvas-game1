const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export class Tile {
    constructor({ type, number, x, y, width, height }) {
        this.type = type;
        this.number = number;
        this.pos = {
            x: x,
            y: y
        }
        this.width = width;
        this.height = height;
    }
    draw() {
        if (this.type === "grass") {
            if (this.number === 1) {
                ctx.fillStyle = "#7CFC00";
            }
            if (this.number === 2) {
                ctx.fillStyle = "#228B22";
            }
            if (this.number === 3) {
                ctx.fillStyle = "#00FF7F";
            }
        }
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
    update() {
        this.draw();
    }
}