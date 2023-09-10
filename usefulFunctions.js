export function doorXPos(buildingX, buildingWidth, doorWidth) {
    return (buildingX + buildingWidth) - (buildingWidth / 2) - (doorWidth / 2);
}

export function doorYPos(buildingY, buildingHeight, doorHeight) {
    return (buildingY + buildingHeight) - doorHeight;
}