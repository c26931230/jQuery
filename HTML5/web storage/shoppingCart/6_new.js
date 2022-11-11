let storage = localStorage;
function doFirst(){
	let itemString = storage['addItemList'] //way1
    let items = itemString.substr(0,itemString.length - 2).split(', ')
    console.log(items);
    newDiv = document.createElement('div')
    newTable = document.createElement('table')

    // 將 table 放進 div 裡面，再將 div 放進 cartList
    newDiv.appendChild(newTable)
    cartList.appendChild(newDiv)
    total = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])

        createCartList(items[i],itemInfo)
        let itemPrice = parseInt(itemInfo.split('|')[2])
        total += itemPrice
        
    }
    document.getElementById("total").innerText = total;
}
function createCartList(itemId, itemValue){
    // alert(`${itemId}: ${itemValue}`)
    let itemTitle = itemValue.split('|')[0]
    let itemImage = 'imgs/'+ itemValue.split('|')[1]
    let itemPrice = parseInt(itemValue.split('|')[2])

    // 建立每個品項的清單區域 -- tr
    let trItemList = document.createElement('tr')
    trItemList.className = 'item'
    newTable.appendChild(trItemList)

    // 建立商品圖片 -- 第一個 td
    let tdImage = document.createElement('td')
    tdImage.style.width = '200px'
    let image = document.createElement('img')
    image.src = itemImage
    image.width = 80

    tdImage.appendChild(image)
    trItemList.append(tdImage)

    // 建立商品名稱和刪除按鈕 -- 第二個 td
    let tdTitle = document.createElement('td')
    tdTitle.style.width = '280px'
    tdTitle.id = itemId

    let pTitle = document.createElement('p')
    pTitle.innerText = itemTitle

    let delButton = document.createElement('button')
    delButton.innerText = "Delete"
    delButton.addEventListener('click',deleteItem)

    tdTitle.appendChild(pTitle)
    tdTitle.appendChild(delButton)
    trItemList.appendChild(tdTitle)
    // 建立商品價格 -- 第三個 td
    let tdPrice = document.createElement('td')
    tdPrice.style.width = '170px'

    let pPrice = document.createElement('p')
    pPrice.innerText = itemPrice

    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)
    // 建立商品數量 -- 第四個 td
    let tdCount = document.createElement('td')
    tdCount.style.width = '60px'

    let inputCount = document.createElement('input')
    inputCount.type = "number"
    inputCount.value = 1
    inputCount.min = 1
    // inputCount.addEventListener('input',changeItemCount)
    tdCount.appendChild(inputCount)
    trItemList.appendChild(tdCount)
}
function deleteItem(e){
    // console.log(e.target.parentNode.id);
    let itemId = e.target.parentNode.id
    // 1.先扣掉錢
    // ===way1===
    let itemValue = storage.getItem(itemId)
    total = total - parseInt(itemValue.split('|')[2])
    document.getElementById("total").innerText = total;
    // ===way2===
    // total -= parseInt(storage[itemId].split('|')[2])
    // document.getElementById("total").innerText = total;

    // 2.清除 storage
    storage.removeItem(itemId)
    storage['addItemList'].replace(`${itemId}, `,``)
    // 3.刪除該筆 tr
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    // e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    newTable.removeChild(e.target.parentNode.parentNode)
}
window.addEventListener('load', doFirst);