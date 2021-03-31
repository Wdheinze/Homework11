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
<<<<<<< HEAD
    get mainImage() {
=======
    get mainImage(){
>>>>>>> bf37cd335686a146bbf2b3e17384ae1f45ca15b0
        return this.image;
    }
}