function doFirst(){
    document.getElementById("dropzone").ondragover = dragOver;
    document.getElementById("dropzone").ondrop = dropped;
}
function dragOver(e){
    e.preventDefault()
    console.log(e);
}
function dropped(e){
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    fileName.innerText = file.name
    let readFile = new FileReader()
    readFile.readAsText(file)
    readFile.addEventListener('load', function(){
        fileContent.value = readFile.result 
    })
}

window.addEventListener('load',doFirst)

