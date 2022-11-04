function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    canvas = document.getElementById("canvas");
    context =  canvas.getContext('2d');
    
    //格線
    for(let i=0; i<100; i++){
        let interval = i * 50
        //水平
        context.moveTo(0,interval)
        context.lineTo(canvas.width,interval)
        context.fillText(interval, 0, interval);
        
        //垂直
        context.moveTo(interval,0)
        context.lineTo(interval,canvas.height)
        context.fillText(interval, interval,10);
    }
    context.strokeStyle="#ccc"
    context.stroke()
    // ====================
    canvas.addEventListener('mousemove', usePen)
    


    
}
// ****
function usePen(e){
    context.fillStyle='red';
    context.strokeStyle='red';
    
    // 矩形畫筆
    context.fillRect(e.pageX,e.pageY,5,5);
    // context.strokeRect(e.pageX, e.pageY, 5, 5);
    // context.stroke();
    
    // 圓形畫筆
    // context.beginPath();
    // context.arc(e.pageX,e.pageY, 5, 0, 2* Math.PI);
    // context.stroke();
    // context.fill();
    
}


window.addEventListener('load',doFirst)

