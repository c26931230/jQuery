function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    let canvas = document.getElementById("canvas");
    let context =  canvas.getContext('2d');
    
    //格線
    for(let i=0; i<100; i++){
        let interval = i * 50
        //水平
        // context.moveTo(0,interval)
        // context.lineTo(canvas.width,interval)
        // context.fillText(interval, 0, interval);

        context.moveTo(0,interval);
        context.lineTo(canvas.width,interval)
        context.fillText(interval,interval,10)
        
        //垂直
        // context.moveTo(interval,0)
        // context.lineTo(interval,canvas.height)
        // context.fillText(interval, interval,10);
        context.moveTo(interval,0);
        context.lineTo(interval,canvas.height);
        context.fillText(interval,0,interval)
    }
     context.strokeStyle='rgba(0,0,0,0.3)';
     
     context.stroke();
    //  ============
  
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
