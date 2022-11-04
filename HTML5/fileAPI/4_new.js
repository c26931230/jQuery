function doFirst(){
    document.getElementById("theFile").onchange = fileChange;
}
function fileChange(){
    let file = document.getElementById("theFile").files[0]
    // console.log(file);

    let message = ``
    message += `file name: ${file.name}\n`
    message += `file type: ${file.type}\n`
    message += `file size: ${file.size} byte\n`
    message += `file lastModifiedDate: ${file.lastModifiedDate}\n`

    fileInfo.value = message
    // =========
    // fileContent
    let readFile = new FileReader()
    // readFile.readAsText(file)
    readFile.readAsText(file)
    readFile.addEventListener('load', function(){
        fileContent.value = readFile.result 
    })
    // fileContent.value = readFile.result
    
}
window.addEventListener('load',doFirst)

