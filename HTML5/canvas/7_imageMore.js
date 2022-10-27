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
     
    //  context.stroke();
    //  ============
    pic1 = new Image()
    pic1.src = '../../images/cityscape.jpg'
    pic1.addEventListener('load',loadImage)
    // pic1.addEventListener('load',function(){
    //     context.drawImage(pic1, 0, 0,canvas.width,canvas.height);
    // })

    pic2 = new Image()
    pic2.src = '../../images/Shinnosuke/Shinnosuke9.png'
    pic2.addEventListener('load',loadImage)
    // pic2.addEventListener('load',function(){
    //     // context.drawImage(pic2, 0, 0);
    //     // context.drawImage(pic2, 0, 0,300,300);//左上
    //     // context.drawImage(pic2, 700, 0,300,300);//右上
    //     context.drawImage(pic2, 0, 500,300,300);//左下
    //     // context.drawImage(pic2, 700, 500,300,300);//右下
    // })

    
  
}
function loadImage(){
    //透明度
    // context.globalAlpha=0.5;
    
    // context.drawImage(pic1, 0, 0,canvas.width,canvas.height);
    // context.globalAlpha=1;
    // context.drawImage(pic2, 0, 500,300,300);//左下
    context.globalAlpha=0.5;
    context.drawImage(pic1,0,0,canvas.width,canvas.height)
    context.globalAlpha=1;
    context.drawImage(pic2,0,500,300,300)

    
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
