
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

function drawFrame(ctx, canvas_width, canvas_height, framex, framey) {
    ctx.strokeStyle = '#708090';
    ctx.strokeRect(framex,
	           framey,
                   canvas_width - 2 * framex,
		   canvas_height - 2 * framey) 	
}

function addExpression(ctx, expr, texty) {
    ctx.font="14px Arial";
    ctx.fillText(expr,10,texty);
}

function drawLine(ctx, x_values, y_values) {
    ctx.strokeStyle = '#00f';
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(x_values[0],y_values[0]);
    for ( i = 1; i < x_values.length; i++) {
        ctx.lineTo(x_values[i],y_values[i]);
    }
    ctx.stroke();
}

function drawOnCanvas(xArray, yArray, expr) {
    var canvas=document.getElementById("plotCanvas");
    var ctx=canvas.getContext("2d");
    var canvas_width = canvas.width;
    var canvas_height = canvas.height;
    var frame_width = canvas.width * 0.1;
    var frame_height = canvas.height * 0.1;

    var x_values = transformArrayToCoord(xArray, canvas_width, transformX, frame_width, frame_width)
    var y_values = transformArrayToCoord(yArray, canvas_height, transformY, frame_height, frame_height)

    ctx.clearRect(0, 0, canvas_width, canvas_width);	
    addExpression(ctx, expr, canvas_height * 0.05)	
    drawFrame(ctx, canvas_width, canvas_height, canvas_width * 0.1, canvas_height * 0.1)
    drawLine(ctx, x_values, y_values)
}

function plot(expr,xsymbol, xmin, xstep, xmax) {
    var fEvaluator = new Evaluator(expr, xsymbol)
    var xArray = range(xmin, xmax, xstep);
    var yArray = evaluateEvaluatorValues(xArray, fEvaluator);
    drawOnCanvas(xArray, yArray, expr);
}
