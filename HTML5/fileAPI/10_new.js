function doFirst(){
    document.getElementById("theFile").onchange = fileChange;
}
function fileChange(){
    let files = document.getElementById("theFile").files

    let message = ``

    for(let i=0; i < files.length; i++){
        message += `file name: ${files[i].name}\n`
        message += `file type: ${files[i].type}\n`
        message += `file size: ${files[i].size} byte\n`
        message += `file lastModifiedDate: ${files[i].lastModifiedDate}\n`
    
        fileInfo.value = message
    }
        
   
}
window.addEventListener('load',doFirst)

