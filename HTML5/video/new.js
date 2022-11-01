function doFirst(){

    myMovie = document.getElementById("myMovie");
    playButton = document.getElementById("playButton");
    defaultBar = document.getElementById("defaultBar");
    progress = document.getElementById("progress");
    stopButton = document.getElementById("stopButton");

    barsize = parseInt(window.getComputedStyle(defaultBar).width)
    // alert(barsize)
    playButton.addEventListener('click', playOrPause);
    myMovie.addEventListener('click', playOrPause);
    defaultBar.addEventListener('click', clickBar);
    stopButton.addEventListener('click', stop)

    // 全螢幕**
    // full.addEventListener('click', function(){
    //     myMovie.web
    // })

}
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){ //影片正在跑
        myMovie.pause()
        playButton.innerText = "paly"
    }else{
        myMovie.play()
        playButton.innerText = "pause"
        setInterval(update,300) //更新捲軸
    }
}
function update(){
    if(!myMovie.ended){
        let size =barsize / myMovie.duration * myMovie.currentTime
            progress.style.width = `${size}px`
    }else{
        playButton.innerText = "paly"
        progress.style.width = `0px`;
        myMovie.currentTime = 0;
    }
}

function stop(){
    playButton.innerText = "paly"
    progress.style.width = `0px`;
    myMovie.currentTime = 0;
    myMovie.pause()
}

function clickBar(e){
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`
    let newTime = mouseX / 6.9
    myMovie.currentTime = newTime;
}

window.addEventListener('load',doFirst)
// window.onload = doFirst
