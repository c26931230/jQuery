function doFirst(){
    let image = document.getElementById("image");
    image.addEventListener('dragstart',startdrag)
    image.addEventListener('dragend',enddrag)
    rightbox = document.getElementById("rightbox");
    rightbox.addEventListener('dragover',function(e){
        e.preventDefault()
    })
    rightbox.addEventListener('drop',dropped)
}

function startdrag(e){
    let data = `<img src="${image.src}">`
    e.dataTransfer.setData('img',data)
}
function enddrag(){
    image.style.visibility="hidden"
}
function dropped(e){
    e.preventDefault();
    rightbox.innerHTML = e.dataTransfer.getData('img')
}
window.addEventListener('load',doFirst)

