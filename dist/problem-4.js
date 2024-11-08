"use strict";
{
    const calculateShapeArea = (givenShape) => {
        if (givenShape.shape === 'circle') {
            return (3.1416 * givenShape.radius * givenShape.radius);
        }
        else if (givenShape.shape === 'rectangle') {
            return givenShape.height * givenShape.width;
        }
        else {
            return -1;
        }
    };
    const circleArea = calculateShapeArea({
        shape: "circle",
        radius: 5
    });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea);
    console.log(rectangleArea);
    //
}
