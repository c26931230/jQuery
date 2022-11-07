function doFirst(){
    let image = document.getElementById("image");
    image.addEventListener('dragstart',startdrag)
    image.addEventListener('dragend',enddrag)
    // imagea = document.getElementById("imagea");
    card = document.getElementById("card");
    card.addEventListener('dragover',function(e){
        e.preventDefault()
    })
    card.addEventListener('drop',dropped)
    let enlarge = document.getElementById("enlarge");
    enlarge.addEventListener('click',large)
}   

function startdrag(e){
    let data = `<img src="${image.src}" id="imagea">`
    e.dataTransfer.setData('img',data)
}
function enddrag(){
    image.style.visibility="hidden"
}
function dropped(e){
    e.preventDefault();
    card.innerHTML = e.dataTransfer.getData('img')
}
function large(){
    // e.preventDefault()
    document.getElementById("imagea").style.width = "20px";
    // imagea.style.width = "20px";
}
window.addEventListener('load',doFirst)
