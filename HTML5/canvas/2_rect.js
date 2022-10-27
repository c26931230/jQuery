function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    //可直接用id 但不能當變數名稱
    let canvas = document.getElementById("canvas");
    let context =  canvas.getContext('2d');
    // 抓css屬性 window可以省略
    // alert(window.getComputedStyle(canvas).border)
    // alert(window.getComputedStyle('物件','::before').border)
    context.fillRect(100,100,300,200)
    // context.strokeRect(100,100,300,200)
    // context.rect(700,600,300,200)
    // context.fill()
    context.fillStyle='red';
    context.strokeStyle='green';
    context.lineWidth=10;
    
    context.strokeRect(100,100,300,200)
    context.rect(700, 600, 300, 200);
    context.fill();
    context.clearRect(150,150,50,50)
    context.strokeStyle='blue';
    context.strokeRect(300,300,100,200)
    context.beginPath();
    context.arc(500,300,150,0,1.5*Math. PI)
    context.stroke();
    context.closePath();
    context.moveTo(600,300);
    context.lineTo(600,700);    
    context.closePath();
    context.fillStyle='#fa0'
    context.strokeStyle='#153462';;
    context.stroke();
    // context.fill();
    //橡皮擦
    // context.clearRect(0,0,canvas.width,canvas.height)
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
