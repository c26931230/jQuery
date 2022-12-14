function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    let canvas = document.getElementById("canvas");
    let context =  canvas.getContext('2d');
    
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
     
     context.stroke();
    //  ============
    // let pic = new Image()
    // pic.src = '../../images/cityscape.jpg'
    // pic.addEventListener('load',function(){
    //     context.drawImage(pic, 0, 0,canvas.width,canvas.height);
    // })

    let img = new Image()
    img.src='../../images/cityscape.jpg'
    img.addEventListener('load',function(){
        context.drawImage(img,0,0,canvas.width,canvas.height);
    })
    
  
}
window.addEventListener('load',doFirst)
// window.onload = doFirst
