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
     context.strokeStyle='rgba(0,0,0,0.3)';
    //  1 / 4線
    context.moveTo(500, 0)
    context.lineTo(canvas.width / 2, canvas.height)
    context.moveTo(0, canvas.height / 2)
    context.lineTo(canvas.width , canvas.height / 2);
     context.stroke();
    //  =====
    context.strokeStyle = 'red'
    context.lineWidth=5;
    // 左上
    context.beginPath();
    context.moveTo(150, 250);
    context.arcTo(275,125,400,300,100);
    context.stroke();
        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(150,250);
        context.lineTo(275, 125);
        context.lineTo(400, 300);
        context.stroke();
    context.strokeStyle = 'red'
    context.lineWidth=5;
    // 右上
    context.translate(750, 200);
    context.beginPath();
    context.arc(0,0,150,0,Math. PI,true);
    context.stroke();
    context.translate(-750, -200);
    // 左下
    context.translate(250, 600);
    context.beginPath();
    context.arc(0,0,150,0.2 * Math. PI ,1.2 * Math. PI,false);
    context.stroke();
    context.translate(-250, -600);
    // 右下
    context.translate(750, 600);
    context.beginPath();
    context.arc(0,0,150,0 ,2 * Math. PI,false);
    context.stroke();
    context.translate(-750, -600);

  
}


window.addEventListener('load',doFirst)
// window.onload = doFirst
