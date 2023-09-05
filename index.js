'use strict';
import * as one from "./Worlds/world1.js";

export const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export let world = one;

export const buttons = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
};

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (world.backgrounds !== undefined) {
        world.backgrounds.forEach(background => {
            background.update();
        })
    }
    if (world.buildings !== undefined) {
        world.buildings.forEach(building => {
            building.update();
        })
    }
    if (world.character !== undefined) {
        world.character.update();
    }
};

animate();

addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
        case 87: 
            buttons.w.pressed = true;
            break;
    }
    switch (keyCode) {
        case 83:
            buttons.s.pressed = true;
            break;
    }
    switch (keyCode) {
        case 65:
            buttons.a.pressed = true;
            break;
    }
    switch (keyCode) {
        case 68:
            buttons.d.pressed = true;
            break;
    }
});

addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
        case 87: 
            buttons.w.pressed = false;
            break;
    }
    switch (keyCode) {
        case 83:
            buttons.s.pressed = false;
            break;
    }
    switch (keyCode) {
        case 65:
            buttons.a.pressed = false;
            break;
    }
    switch (keyCode) {
        case 68:
            buttons.d.pressed = false;
            break;
    }
});