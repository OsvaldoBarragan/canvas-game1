'use strict';
import * as one from "./Worlds/world1.js";

export const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export const infoCanvas = document.getElementById("info");
const infoCtx = infoCanvas.getContext("2d");

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

// Shout out to the FJOLT website for this function
// If you want to find out more stuff like this, it is part of their HTML Canvas series
export const wrapText = function(ctx, text, x, y, maxWidth, lineHeight) {
    // First, start by splitting all of our text into words, but splitting it into an array split by spaces
    let words = text.split(' ');
    let line = ''; // This will store the text of the current line
    let testLine = ''; // This will store the text when we add a word, to test if it's too long
    let lineArray = []; // This is an array of lines, which the function will return

    // Lets iterate over each word
    for(var n = 0; n < words.length; n++) {
        // Create a test line, and measure it..
        testLine += `${words[n]} `;
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        // If the width of this test line is more than the max width
        if (testWidth > maxWidth && n > 0) {
            // Then the line is finished, push the current line into "lineArray"
            lineArray.push([line, x, y]);
            // Increase the line height, so a new line is started
            y += lineHeight;
            // Update line and test line to use this word as the first word on the next line
            line = `${words[n]} `;
            testLine = `${words[n]} `;
        }
        else {
            // If the test line is still less than the max width, then add the word to the current line
            line += `${words[n]} `;
        }
        // If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
        if(n === words.length - 1) {
            lineArray.push([line, x, y]);
        }
    }
    // Return the line array
    return lineArray;
}

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

function animateInfo() {
    requestAnimationFrame(animateInfo);
    infoCtx.fillStyle = "white";
    infoCtx.fillRect(0, 0, infoCanvas.width, infoCanvas.height);

    const info = () => {
        if (world.doors !== undefined) {
            world.doors.forEach(door => {
                const character = world.character;
                if (character.pos.x + character.width >= door.pos.x &&
                    character.pos.x <= door.pos.x + door.width &&
                    character.pos.y <= door.pos.y + door.height &&
                    character.pos.y + character.height >= door.pos.y) {
                        infoCtx.font = "30px Georgia";
                        infoCtx.fillStyle = "black";
                        // infoCtx.fillText("Click (Space) to Enter " + door.goesTo.name, 0, 20);
                        let wrappedText = wrapText(infoCtx, "Click (Space) to Enter " + door.goesTo.name, 0, 30, 576, 30);
                        wrappedText.forEach(function(item) {
                            // item[0] is the text, item[1] is the x coordinate, and item[2] is the y coordinate
                            infoCtx.fillText(item[0], item[1], item[2]);
                        })
                }
            })
        }
    }
    info()

}

animate();
animateInfo();

if (world.buildings !== undefined) {
    world.buildings.forEach(building => {
        console.log(building);
    })
}

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