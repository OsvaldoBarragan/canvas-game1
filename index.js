'use strict';
import * as one from "./Worlds/world1.js";

export const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export let world = one;

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    world.background.draw();
};

animate();