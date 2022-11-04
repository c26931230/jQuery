let storage = localStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''
    }
    // --w1
    storage['addItemList'] = ''
    // --w2
    // storage.setItem('addItemList')
    //list is array
   let list = document.querySelectorAll('.addButton')
   for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            // alert(e.target.id)
            // 箭頭函數不能用this
            // alert(this.id)
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            // alert(teddyInfo)
            addItem(e.target.id, teddyInfo)
        })
   }
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    // --- 圖片---
    let image = document.createElement('img')
    image.src='imgs/' + itemValue.split('|')[1]
    // --- 品名---
    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]
    // ---價格---
    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    let newItem = document.getElementById("newItem");

    //先判斷此處是否有物件，如果有要先刪除
    // childNodes 包含空白換行 危險!!
    // alert(newItem.childNodes.length)
    if(newItem.hasChildNodes()){
        while(newItem.childNodes.length >= 1){
            newItem.removeChild(newItem.firstChild)
        }
    }
    

    // 再顯示新物件

    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)

    // 存入 storage
    if(storage[itemId]){
        alert('u have checked.')
    }else{
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

}
window.addEventListener('load', doFirst);