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
    // ====================
    // 垂直漸層
    let gradient = context.createRadialGradient(350,225,50,350,225,150);
    gradient.addColorStop(0,'#9BA17B')
    gradient.addColorStop(1,'#FA0')
    context.fillStyle=gradient;
    
    context.fillRect(100,100,500,250);


    // ======
    context.translate(300, 600);
    let r = 180;
    context.lineWidth= r * 0.1;
    let circle = context.createRadialGradient(0,0,r * 0.95,0,0,r * 1.05)
    context.strokeStyle='yellow';
    circle.addColorStop(0,'#666');
    circle.addColorStop(0.5,'#FFF');
    circle.addColorStop(1,'#666');
    context.beginPath();
    
    context.arc(0, 0, r, 0, 2 * Math.PI);
    context.strokeStyle=circle;
    context.stroke();
    
    context.translate(-300, -600);
    
}


window.addEventListener('load',doFirst)

