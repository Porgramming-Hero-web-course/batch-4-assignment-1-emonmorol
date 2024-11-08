{
    //

    type Circle = {
        shape:'circle';
        radius: number
    }
    type Rectangle = {
        shape:'rectangle';
        width:number;
        height:number;
    }
    
    type Shape = Circle | Rectangle;

    const calculateShapeArea = (givenShape:Shape):number =>{
        if(givenShape.shape === 'circle'){
            return (3.1416*givenShape.radius*givenShape.radius);
        }else if(givenShape.shape==='rectangle'){
            return givenShape.height*givenShape.width;
        }
        else{
            return -1;
        }
    }


    const circleArea:number = calculateShapeArea({ 
        shape: "circle", 
        radius: 5 
    });

    const rectangleArea:number = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea);
    console.log(rectangleArea);
    

    //
}