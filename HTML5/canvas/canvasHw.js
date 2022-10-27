function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');

    // 格線
    // for(let i=0; i<100; i++){
    //     let interval = i * 50
    //     //水平
    //     context.moveTo(0,interval)
    //     context.lineTo(canvas.width,interval)
    //     context.fillText(interval, 0, interval);
    //     context.fillText(interval, 500, interval);
        
    //     //垂直
    //     context.moveTo(interval,0)
    //     context.lineTo(interval,canvas.height)
    //     context.fillText(interval, interval,10);
    //     context.fillText(interval, interval,410);
    // }
    // context.strokeStyle='rgba(0,0,0,0.3)';
    // context.stroke();

    // 圖片
    let img = new Image()
    // img.src='../../images/emoticon.png'
    // context.globalAlpha=0.5;
    img.addEventListener('load',function(){
        context.drawImage(img,0,0,canvas.width,canvas.height);
    })

    // 喜
    context.strokeStyle='#333';
    context.lineWidth=10;
    // ---face---
    context.beginPath();
    context.moveTo(100,200);
    context.bezierCurveTo(100,150,170,50,250,60)
    context.bezierCurveTo(330,80,380,150,365,200)
    context.bezierCurveTo(350,390,100,350,100,200)
    // ---mouth---
    context.moveTo(150,200);
    context.lineTo(130,220);
    context.moveTo(140,210);
    context.bezierCurveTo(200,310,300,280,320,210);
    context.moveTo(310,205);
    context.lineTo(330,218);
    context.stroke();
    // ---eyes(left)---
    context.beginPath();
    context.moveTo(190,140);
    context.bezierCurveTo(190,150,198,160,206,140);
    context.bezierCurveTo(210,120,182,140,193,140);
    context.fill()
    // ---eyes(right)---
    context.beginPath();
    context.lineWidth=1;
    context.moveTo(260,130);
    context.bezierCurveTo(240,160,280,160,273,140);
    context.bezierCurveTo(275,140,270,130,260,130);
    context.fill();

    // 怒
    context.lineWidth=10;
    // ---face---
    context.beginPath();
    context.moveTo(610,200);
    context.bezierCurveTo(620,150,690,30,830,125)
    context.bezierCurveTo(900,200,900,300,745,345)
    context.bezierCurveTo(650,360,600,250,610,200)
    context.stroke();
    // ---mouth---
    context.moveTo(650,250);
    context.bezierCurveTo(700,200,770,200,807,260);
    context.moveTo(310,205);
    context.lineTo(330,218);
    context.stroke();
    // ---eyes(left)---
    context.moveTo(670,155);
    context.lineTo(710,176);
    context.stroke();
    context.moveTo(700,170);
    context.beginPath();
    context.arc(697,176,7,0,Math.PI*1.3,false);
    context.fill();
    // ---eyes(right)---
    context.moveTo(746,175);
    context.lineTo(792,150);
    context.stroke();
    context.beginPath();
    context.arc(761,178,10,0,Math.PI*2);
    context.fill();

    // 哀
    // ---face---
    context.beginPath();
    context.moveTo(100,600);
    context.bezierCurveTo(60,450,370,380,350,610)
    context.bezierCurveTo(305,750,150,760,100,600)
    context.stroke();
    // ---eyes(left)---
    context.beginPath();
    context.moveTo(180,550);
    context.bezierCurveTo(176,580,198,560,195,540);
    context.bezierCurveTo(190,520,178,550,180,550);
    context.fill();
    //  ---eyes(right)---
    context.beginPath();
    context.moveTo(250,550);
    context.bezierCurveTo(250,580,270,560,273,550);
    context.bezierCurveTo(270,500,250,550,250,550);
    context.fill();
    // ---tear---
    context.beginPath();
    context.moveTo(260,580);
    context.lineWidth=5;
    context.bezierCurveTo(250,630,275,600,265,610);
    context.bezierCurveTo(285,590,260,570,260,580);
    context.stroke();
    // ---mouth---
    context.moveTo(200,640);
    context.lineTo(240,642);
    context.stroke();

    // 樂
     // ---face---
    context.beginPath();
    context.lineWidth=10;
    context.moveTo(625,600);
    context.bezierCurveTo(620,450,895,360,885,625);
    context.bezierCurveTo(855,790,640,736,625,600);
    context.stroke();
    //---eyes(left)---
    context.beginPath();
    context.moveTo(730,500);
    context.bezierCurveTo(715,525,735,525,735,525);
    context.bezierCurveTo(750,520,745,500,730,500);
    context.lineWidth=3;
    context.fill();
    // ---eyes(right)---
    context.beginPath();
    context.moveTo(770,500);
    context.bezierCurveTo(760,520,775,525,775,525);
    context.bezierCurveTo(790,525,790,490,770,500);
    context.fill();
    // ---mouth---
    // 左上
    context.lineWidth=10;
    context.beginPath();
    context.moveTo(685,555);
    context.bezierCurveTo(670,555,670,565,655,568);
    context.stroke();
    // 下
    context.beginPath();
    context.moveTo(675,558);
    context.bezierCurveTo(650,650,720,685,750,680);
    context.bezierCurveTo(710,685,870,680,843,565);
    context.stroke();
    // 右上
    context.beginPath();
    context.moveTo(830,558);
    context.lineTo(858,570)
    context.stroke();
    // 上
    context.beginPath();
    context.moveTo(675,558);
    context.bezierCurveTo(720,600,780,600,843,565);
    context.stroke();
    // teeth 中
    context.beginPath();
    context.moveTo(670,610);
    context.bezierCurveTo(720,634,780,636,840,615);
    context.stroke();
    // teeth-1
    context.beginPath();
    context.moveTo(710,580);
    context.bezierCurveTo(700,600,700,600,710,650);
    context.stroke();
    // teeth-2
    context.beginPath();
    context.moveTo(750,588);
    context.bezierCurveTo(750,600,740,600,752,670);
    context.stroke();
    // teeth-3
    context.beginPath();
    context.moveTo(800,588);
    context.bezierCurveTo(801,600,805,600,800,660);
    context.stroke();
}

window.addEventListener('load',doFirst)