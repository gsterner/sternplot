/*
 * Created By Gustaf Sterner 2012-11-29
 */


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


function transformToPlotCoordinates(plotLength, realLength, translation, frameStart ) {
    return plotLength / realLength * translation + frameStart;
}


function transformX(width, xmax, xmin, xval, frameStart, frameEnd ) {
    return transformToPlotCoordinates (width - frameStart - frameEnd, xmax - xmin, xval - xmin, frameStart); 
}

function transformY(height, ymax, ymin, yval , frameStart, frameEnd ) {
    return transformToPlotCoordinates (height - frameStart - frameEnd, ymax - ymin, ymax - yval,  frameStart); 
}

function transformArrayToCoord(array, canvasWidth, transform, frameStart, frameEnd) {
    var vmin = getMinOfArray(array);
    var vmax = getMaxOfArray(array);
    var coordArray = [];
    for (i in array) {
        coordArray.push(transform(canvasWidth, vmax, vmin, array[i], frameStart, frameEnd));
    }
    return coordArray
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
