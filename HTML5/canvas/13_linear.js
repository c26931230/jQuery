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
    // =====
    // 斜線漸層
    // let gradient = context.createLinearGradient(100, 100, 600, 500);
    // 垂直漸層
    let gradient = context.createLinearGradient(100, 300, 600, 300);
    gradient.addColorStop(0,'#9BA17B')
    gradient.addColorStop(0.5,'#FAD6A5')
    gradient.addColorStop(1,'#FA0')
    // context.fillStyle='#61764B';
    context.fillStyle=gradient;
    
    context.fillRect(100,100,500,400);
    
    
}


window.addEventListener('load',doFirst)

