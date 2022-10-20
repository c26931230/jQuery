$(function(){
    $('#shrink').click(function(){
        changeSize('small');
    })
    $('#enlarge').click(function(){
        changeSize('big');
    })
    
    // alert(currentSize)
    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'));
        let newSize;
        if(size == 'small'){
            newSize = currentSize - 2;
        }else if(size == 'big'){
            newSize = currentSize + 2;
        }
        $('div').css('fontSize',newSize)
    }
})