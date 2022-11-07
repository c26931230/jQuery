function doFirst(){
    document.getElementById("theFile").onchange = fileChange;
}
function fileChange(){
    let file = document.getElementById("theFile").files[0]

    let message = ``
    message += `file name: ${file.name}\n`
    message += `file type: ${file.type}\n`
    message += `file size: ${file.size} byte\n`
    message += `file lastModifiedDate: ${file.lastModifiedDate}\n`

    fileInfo.value = message
    // =========

    readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
        let image = document.getElementById("image");
        image.src = readFile.result
        image.style.maxWidth = '300px'
    })
}
window.addEventListener('load',doFirst)

