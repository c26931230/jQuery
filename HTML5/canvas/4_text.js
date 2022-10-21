function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    let canvas = document.getElementById("canvas");
    let context =  canvas.getContext('2d');
    context.font='bold 50px Tahoma';
    context.textBaseline='alphabetic';
    //第一個字
    context.fillText('Style', 100, 100);
    // context.strokeText('Style', 100, 100);
    
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.strokeStyle='blue';
    context.shadowOffsetX=5;
    context.shadowOffsetY=3;
    context.shadowBlur=5;
    
    
    context.stroke();
    
    //第二個字
    context.shadowColor='rgba(255,0,0,0.7)';
    context.shadowOffsetX=5;
    context.shadowOffsetY=3;
    context.shadowBlur=5;
    
    context.fillText('Style', 100, 250);
    //第三個字
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=10;
    
    context.filleStyle='white';
    context.fillText('Style', 100, 400);
    //第四個字
    context.fillText('Style', 100, 550);
    
    
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
