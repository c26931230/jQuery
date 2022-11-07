function doFirst(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
     //格線
    //  for(let i=0; i<100; i++){
    //     let interval = i * 50
    //     //水平
    //     context.moveTo(0,interval)
    //     context.lineTo(canvas.width,interval)
    //     context.fillText(interval, 0, interval);
        
    //     //垂直
    //     context.moveTo(interval,0)
    //     context.lineTo(interval,canvas.height)
    //     context.fillText(interval, interval,10);
    //     context.strokeStyle="#ccc"
    //     context.stroke()
    // }
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        // var rot = Math.PI / 2 * 3;
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;
        context.beginPath();
        context.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            context.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            context.lineTo(x, y)
            rot += step
        }
        context.lineTo(cx, cy - outerRadius)
        context.closePath();
        context.lineWidth = 5;
        context.stroke();
    }
    drawStar(250, 250, 8, 200, 100);
}

window.addEventListener('load',doFirst)