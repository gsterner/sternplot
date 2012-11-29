
function range(start, end, step)
{
    var returnArray = [];
    var tempSum = start;
    while(tempSum <= end) {
        returnArray.push(tempSum);
        tempSum += step;
    }    
    return returnArray;
}


function drawOnCanvas(xArray, yArray) {
    var canvas=document.getElementById("plotCanvas");
    var ctx=canvas.getContext("2d");
    var canvas_width = canvas.width;
    var canvas_height = canvas.height;

    var x_values = transformXArrayToCoord(xArray, canvas_width)
    var y_values = transformYArrayToCoord(yArray, canvas_height)

    ctx.moveTo(x_values[0],y_values[0]);
    for ( i = 1; i < x_values.length; i++) {
        ctx.lineTo(x_values[i],y_values[i]);
    }
    ctx.stroke()    
}

function plot(expr,xsymbol, xmin, xstep, xmax) {
    var fEvaluator = new Evaluator(expr, xsymbol)
    var xArray = range(xmin, xmax, xstep);
    var yArray = evaluateEvaluatorValues(xArray, fEvaluator);
    drawOnCanvas(xArray, yArray);
}