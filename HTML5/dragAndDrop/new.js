function doFirst(){
 image = document.getElementById("image");
 image.addEventListener('dragstart', startDrag)
 image.addEventListener('dragend', endDrag)

 rightbox = document.getElementById("rightbox");
//  可以不用寫
//  rightbox.addEventListener('dragenter', function(e){e.preventDefault()})
 rightbox.addEventListener('dragover',  function(e){e.preventDefault()})
 rightbox.addEventListener('drop', dropped)

    
}

function startDrag(e){
    // let data = ` <img src="../../images/Shinnosuke/Shinnosuke3.png" alt="小新">`
    let data = `<img src="${image.src}">`
    
    e.dataTransfer.setData('shinnosuke',data)
}
function endDrag(){
    image.style.visibility = "hidden"
}
function dropped(e){
    e.preventDefault()
    rightbox.innerHTML = e.dataTransfer.getData('shinnosuke')
}
window.addEventListener('load',doFirst)

