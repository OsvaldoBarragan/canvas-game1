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
    // Load the objects from the world here
    // Before it loads, it checks if any of these class objects are missing
    // If a class is moving, it skips over it
    if (world.background !== undefined) {
        world.background.update();
    }
    if (world.buildings !== undefined) {
        world.buildings.forEach(building => {
            building.update();
        })
    }
    if (world.doors !== undefined) {
        world.doors.forEach(door => {
            door.update();
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
            // The rest of the buttons are set to false to allow player to change direction swiftly
            buttons.s.pressed = false;
            buttons.a.pressed = false;
            buttons.d.pressed = false;
            break;
    }
    switch (keyCode) {
        case 83:
            buttons.s.pressed = true;
            // The rest of the buttons are set to false to allow player to change direction swiftly
            buttons.w.pressed = false;
            buttons.a.pressed = false;
            buttons.d.pressed = false;
            break;
    }
    switch (keyCode) {
        case 65:
            buttons.a.pressed = true;
            // The rest of the buttons are set to false to allow player to change direction swiftly
            buttons.d.pressed = false;
            buttons.w.pressed = false;
            buttons.s.pressed = false;
            break;
    }
    switch (keyCode) {
        case 68:
            buttons.d.pressed = true;
            // The rest of the buttons are set to false to allow player to change direction swiftly
            buttons.a.pressed = false;
            buttons.w.pressed = false;
            buttons.s.pressed = false;
            break;
    }
});

addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
        case 87: 
            buttons.w.pressed = false;
            // Character.move is set to true when button is released to prevent player from getting stuck
            world.character.move = true;
            break;
    }
    switch (keyCode) {
        case 83:
            buttons.s.pressed = false;
            // character.move is set to true when button is released to prevent player from getting stuck
            world.character.move = true;
            break;
    }
    switch (keyCode) {
        case 65:
            buttons.a.pressed = false;
            // Character.move is set to true when button is released to prevent player from getting stuck
            world.character.move = true;
            break;
    }
    switch (keyCode) {
        case 68:
            buttons.d.pressed = false;
            // Character.move is set to true when button is released to prevent player from getting stuck
            world.character.move = true;
            break;
    }
    switch (keyCode) {
        case 32:
            buttons.space.pressed = true;
            // If the player is within a door's vicinity, pressing space will take them to the building's respective area
            if (world.doors !== undefined) {
                world.doors.forEach(door => {
                    const character = world.character;
                    if (character.pos.x + character.width >= door.pos.x &&
                        character.pos.x <= door.pos.x + door.width &&
                        character.pos.y <= door.pos.y + door.height &&
                        character.pos.y + character.height >= door.pos.y) {
                            if (buttons.space.pressed) {
                                world = door.goesTo;
                            }
                        }
                })
            }
            buttons.space.pressed = false;
            break;
    }
});