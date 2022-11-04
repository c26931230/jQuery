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
        context.strokeStyle="#ccc"
        context.stroke()
    }
    
    // lineCap
    context.strokeStyle='red';
    context.lineWidth=15;
    // 預設
    context.lineCap='butt';
    context.beginPath();
    context.moveTo(150,150);
    context.lineTo(300,150);
    context.stroke();

    context.lineCap='round';
    context.beginPath();
    context.moveTo(150,200);
    context.lineTo(300,200);
    context.stroke();
    context.lineCap='square';
    context.beginPath();
    context.moveTo(150,250);
    context.lineTo(300,250);
    context.stroke();
    
    // lineJoin
    context.lineJoin='miter';
    context.strokeRect(150, 350, 100, 200);
    context.lineJoin='bevel';
    context.strokeRect(300, 350, 100, 200);
    context.lineJoin='round';
    context.strokeRect(450, 350, 100, 200);
    
    
    
}


window.addEventListener('load',doFirst)

