function doFirst(){
    document.getElementById("dropzone").ondragover = dragOver;
    document.getElementById("dropzone").ondrop = dropped;
}
function dragOver(e){
    e.preventDefault()
}
function dropped(e){
    e.preventDefault()
    let files = e.dataTransfer.files
    let readFile = new FileReader()
    
    for(let i=0; i<files.length; i++){
        readFile.readAsDataURL(files[i]);
        readFile.addEventListener('load',function(){
            let image = document.createElement('img');
            image.src = readFile.result;
            let dropzone = document.getElementById("dropzone");
            // 加後面
            // dropzone.appendChild(image);
            // 加前面
            dropzone.insertBefore(image,dropzone.firstChild)
        })
    }
    
    
}

window.addEventListener('load',doFirst)

