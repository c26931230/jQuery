function doFirst(){

    myMovie = document.getElementById("myMovie");
    playButton = document.getElementById("playButton");
    defaultBar = document.getElementById("defaultBar");
    progress = document.getElementById("progress");
    stopButton = document.getElementById("stopButton");
    fullButton = document.getElementById("fullButton");

    barsize = parseInt(window.getComputedStyle(defaultBar).width)
    playButton.addEventListener('click', playOrPause);
    myMovie.addEventListener('click', playOrPause);
    defaultBar.addEventListener('click', clickBar);
    stopButton.addEventListener('click', stop)
    // 全螢幕
    fullButton.addEventListener('click',function(){
        myMovie.webkitEnterFullScreen()
    })
}
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){ //影片正在跑
        myMovie.pause()
        playButton.innerText = "play"
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
        playButton.innerText = "play"
        progress.style.width = `0px`;
        myMovie.currentTime = 0;
    }
}

function stop(){
    playButton.innerText = "play"
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
