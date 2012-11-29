/*
 * Created By Gustaf Sterner 2012-11-29
 */


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


function transformToPlotCoordinates(plotLength, realLength, translation ) {
    return plotLength / realLength * translation;
}


function transformX(width, xmax, xmin, xval ) {
    return transformToPlotCoordinates (width, xmax - xmin, xval - xmin); 
}

function transformY(height, ymax, ymin, yval ) {
    return transformToPlotCoordinates (height, ymax - ymin, ymax - yval); 
}

function transformXArrayToCoord(xRealArray, canvasWidth) {
    var xmin = getMinOfArray(xRealArray);
    var xmax = getMaxOfArray(xRealArray);
    var xCoordArray = [];
    for (i in xRealArray) {
        xCoordArray.push(transformX(canvasWidth, xmax, xmin, xRealArray[i]));
    }
    return xCoordArray
}

function transformYArrayToCoord(yRealArray, canvasHeight) {
    var ymin = getMinOfArray(yRealArray);
    var ymax = getMaxOfArray(yRealArray);
    var yCoordArray = [];
    for (i in yRealArray) {
        yCoordArray.push(transformY(canvasHeight, ymax, ymin, yRealArray[i]));
    }
    return yCoordArray
}
