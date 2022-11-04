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
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function(){
        let image = document.getElementById('image')
        image.src = readFile.result 
        image.style.maxWidth = '200px'
        image.style.maxHeight = '200px'
    })
    // fileContent.value = readFile.result
    
}
window.addEventListener('load',doFirst)

