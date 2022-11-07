let storage = localStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = '';
    }
    let list = document.querySelectorAll('.addButton')
    for(let i = 0; i<list.length; i++){
        list[i].addEventListener('click',function(e){
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value;
            // alert(teddyInfo)
            // alert(e.target.id)
            addItem(e.target.id, teddyInfo);
        })
    }
}
function addItem(itemId, itemValue){
    let image = document.createElement('img');
    image.src= `imgs/${itemValue.split('|')[1]}`;

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0];

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2];

    let newItem = document.getElementById("newItem");

    while(newItem.childNodes.length >= 1){
        newItem.removeChild(newItem.firstChild);
    }
    // if(newItem.hasChildNodes()){
    //     while(newItem.childNodes.length >= 1){
    //         newItem.removeChild(newItem.firstChild);
    //     }
    // }

    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);

    if(storage[itemId]){
        alert('u have checked.')
    }else{
        storage['addItemList'] += `${itemId},`
        storage.setItem(itemId, itemValue)
    }
}
window.addEventListener('load', doFirst);