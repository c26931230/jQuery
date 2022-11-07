function doFirst(){
   document.getElementById("theFile").onchange = fileChange;
}

function fileChange(){
    let file = document.getElementById("theFile").files[0];

    let msg = ``;
    msg += `file name: ${file.name}\n`
    msg += `file type: ${file.type}\n`
    msg += `file size: ${file.size} byte\n`
    msg += `file lastModifiedDate: ${file.lastModifiedDate}\n`

    document.getElementById("fileInfo").value = msg;
}



window.addEventListener('load',doFirst)

