class Square {

    constructor(xCoord, yCoord, objectHeight, objectWidth, color, image) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;

    }

    get x() {
        return this.xCoord;
    }

    setX(value) {
        this.xCoord = value;
    }
    get y() {
        return this.yCoord;
    }
    setY(value) {
        this.yCoord = value;
    }

    get height() {
        return this.objectHeight;
    }

    get width() {
        return this.objectWidth;
    }
    get mainColor() {
        return this.color;
    }
}