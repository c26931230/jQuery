let storage = localStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''   // storage.setItem('addItemList','')
    }

    // 幫每個 Add Cart 建立事件聆聽
    let list = document.querySelectorAll('.addButton')   // list 是陣列

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            // alert(e.target.id)
            // alert(teddyInfo)
            addItem(e.target.id, teddyInfo)
        })
    }
}
function addItem(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let image = document.createElement('img')
    image.src = 'imgs/' + itemValue.split('|')[1]

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    let newItem = document.getElementById('newItem')

    // 先判斷此處是否已有物件，如果有要先刪除
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
        alert('You have checked.')
    }else{
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

    // 計算購買數量及小計
    // let itemString = storage.getItem('addItemList') //way2
    let itemString = storage['addItemList'] //way1
    let items = itemString.substr(0,itemString.length - 2).split(', ') //-2 減 '- '
    console.log(items);
    document.getElementById("itemCount").innerText = items.length;
    subtotal = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])
        let itemPrice = parseInt(itemInfo.split('|')[2])
        subtotal += itemPrice
    }
        
    document.getElementById("subtotal").innerText= subtotal;
}
window.addEventListener('load', doFirst);