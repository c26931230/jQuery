function doFirst(){
    myMovie = document.getElementById("myMovie");
    defaultBar = document.getElementById("defaultBar");
    defaultBar = document.getElementById("defaultBar");
    voiceBar = document.getElementById("voiceBar");
    progress = document.getElementById("progress");
    voiceProgress = document.getElementById("voiceProgress");
    barsize = parseInt(window.getComputedStyle(defaultBar).width);
    voiceBarsize = parseInt(window.getComputedStyle(voiceBar).width);
    // alert(voiceBarsize)
    // button
    playButton = document.getElementById("playButton");
    stopButton = document.getElementById("stopButton");
    upButton = document.getElementById("upButton");
    downButton = document.getElementById("downButton");
    mutedButton = document.getElementById("mutedButton");
    playButton.addEventListener('click', playOrPause);
    stopButton.addEventListener('click', stop);
    defaultBar.addEventListener('click', clickBar);
    mutedButton.addEventListener('click', muted);
    upButton.addEventListener('click', volumeUp);
    downButton.addEventListener('click', volumeDown);
    upButton.disabled = true;   
}

// playButton
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){
        myMovie.pause()
        playButton.innerText = 'play'
    }else{
        myMovie.play()
        playButton.innerText='pause'
        setInterval(update,300) 
    }
}
// stopButton
function stop(){
    myMovie.currentTime = 0;
    myMovie.pause();
    playButton.innerText = 'play'
}

// update
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    }else{
        playButton.innerText = "play";
        progress.style.width=`0px`;
        myMovie.currentTime = 0;
    }
}

// clickBar
function clickBar(e){
    let mouseX = e.clientX - defaultBar.offsetLeft;
    progress.style.width = `${mouseX}px`;
    // bar寬度 / 影片時間 = 6.9
    let newTime = mouseX / 6.9;
    myMovie.currentTime = newTime;
}

// muted
function muted(){
    if(myMovie.volume!=0){
        myMovie.volume=0;
        mutedButton.innerText = 'unmuted';
        downButton.disabled = true;
        upButton.disabled = true;
        voiceProgress.style.width = `0px`
    }else{
        myMovie.volume=1;
        mutedButton.innerText = 'muted';
        downButton.disabled = false;
        voiceProgress.style.width = `100px`
    }
}

// volumeUp
function volumeUp(){
    voiceProgress = document.getElementById("voiceProgress");
    let i = myMovie.volume;
    let w = i * 100;
    if(myMovie.volume!=1){
        i = i + 0.1;
        w = w + 10;
        myMovie.volume = i;
        voiceProgress.style.width = `${w}px`
        console.log(i,',',w);
        upButton.disabled = false;
        downButton.disabled = false;
        mutedButton.disabled = false;
    }
    if(myMovie.volume >= 1){
        upButton.disabled = true;
        downButton.disabled = false;
        myMovie.volume = 1;
        mutedButton.disabled = false;
    }
}
// volumeDown
function volumeDown(){
    let i = myMovie.volume;
    let w = i * 100;
    console.log(i,',',w);
    if(myMovie.volume!=0){
        i = i - 0.1;
        myMovie.volume = i;
        w = w - 10;
        myMovie.volume = i;
        voiceProgress.style.width = `${w}px`
        upButton.disabled = false;
        downButton.disabled = false;
        // mutedButton.disabled = false;
    }
    if(myMovie.volume < 0.1){
        voiceProgress.style.width = `${w}px`
        downButton.disabled = true;
        mutedButton.disabled = true;
    }
 
}
window.addEventListener('load',doFirst)
