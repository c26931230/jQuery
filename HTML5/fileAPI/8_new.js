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
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load', function(){
        let myMovie = document.getElementById('myMovie')
        myMovie.src = readFile.result 
        // 顯示控制按鈕
        myMovie.controls = true
        myMovie.width = 535
    })
}
window.addEventListener('load',doFirst)

