import { Building } from "./Classes/building.js";

export function doorXPos(buildingX, buildingWidth, doorWidth) {
    return (buildingX + buildingWidth) - (buildingWidth / 2) - (doorWidth / 2);
}

export function doorYPos(buildingY, buildingHeight, doorHeight) {
    return (buildingY + buildingHeight) - doorHeight;
}

export function drawBuildings(arr, rows, columns, separationWidth, separationHeight, img) {
    let ID = 1;
    let posX = 0;
    let posY = 0;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            arr.push(new Building({ id: ID, image: img, x: posX, y: posY }));
            posX += (img.width + separationWidth);
            ID++;
        }
        posY += img.height + separationHeight;
        posX = 0;
    }
}