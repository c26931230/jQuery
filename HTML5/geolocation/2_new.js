function doFirst(){
    navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
        enableHighAccuracy: false,
        // timeout:10, //***** */
        maximumAge:0,

    })

    
    
}
function succCallback(e){
    let accuracy = e.coords.accuracy
    if(accuracy >1000){
        document.getElementById("position").innerHTML = "超過偵測範圍";
    }else{
        document.getElementById("position").innerHTML =
         `緯度: ${e.coords.latitude}<br>
          經度: ${e.coords.longitude}<br>
           準確度: ${accuracy} 公尺`;

    }
}
function errorCallback(e){
    document.getElementById("position").innerHTML = 
    `錯誤碼: ${e.code}<br> 
     訊息: ${e.message} `;
}
window.addEventListener('load',doFirst)

