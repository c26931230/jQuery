function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    //可直接用id 但不能當變數名稱
    let canvas = document.getElementById("canvas");
    let context =  canvas.getContext('2d');
    context.strokeStyle='green';
    context.lineWidth=10;
    
    
    // context.moveTo(100, 100);
    // context.lineTo(250, 250);
    // context.lineTo(400, 50);
    // context.lineTo(50, 200);
    // context.closePath();
    
    context.stroke();
    context.fill();

    // house
    context.moveTo(500,100);
    context.lineTo(700,300);
    context.lineTo(600,300);
    context.lineTo(600,500);
    context.lineTo(400,500);
    context.lineTo(400,300);
    context.lineTo(300,300);
    context.closePath();
    context.lineTo(500,100);


    context.stroke();
    

    
    
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
