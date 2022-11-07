function doFirst(){
    document.getElementById("dropzone").ondrop = dropped;
    
    // 可以不寫??
    document.getElementById("dropzone").ondragover = function(e){
        e.preventDefault();
    };
}
function dropped(e){
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    fileName.innerText = file.name;

    let readFile = new FileReader();
    readFile.readAsText(file);
    readFile.addEventListener('load',function(){
        fileContent.value = readFile.result;
    })
}


window.addEventListener('load',doFirst)

