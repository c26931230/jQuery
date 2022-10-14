$(function () {
    $('#shrink').click(function(){
        changeSize('small')
    })
    $('#enlarge').click(function(){
        changeSize('big')
    })

    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'))
        // alert(currentSize)

        if(size == 'small'){
            newSize = currentSize - 2
        }else if(size == 'big'){
            newSize = currentSize + 2
        }

        $('div').css('fontSize', newSize)
    }
})