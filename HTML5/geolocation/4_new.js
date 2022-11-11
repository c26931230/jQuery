function doFirst(){  
    let area = document.getElementById("map");  
    let position = new google.maps.LatLng(24.9576256,121.2251188)
    let options = {
        zoom: 14,
        center:position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    let map = new google.maps.Map(area, options)
    let marker = new google.maps.Marker({
        position, // position: position,
        map, // map: map,
        
        // title:"where",
        // icon:'../../images/foot.gif',
    })
    marker.setTitle('tibame')
    marker.setIcon('../../images/number/dgt1.gif')

}

    

window.addEventListener('load',doFirst)

// layers
// controls
// services


// 緯度: 24.9576256
// 經度: 121.2251188
// 準確度: 14.196 公尺

