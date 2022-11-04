function doFirst(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.strokeSyle = "#000";
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius)
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        // ctx.fillStyle = 'skyblue';
        // ctx.fill();

    }

    drawStar(400, 300, 8, 80, 15);
    // drawStar(175, 100, 12, 30, 10);
    // drawStar(75, 200, 6, 30, 15);
    // drawStar(175, 200, 20, 30, 25);

      
}

window.addEventListener('load',doFirst)