$(function () {
    let sliderWidth = $('#sliderBoard').width()
    let sliderHeight = $('#sliderBoard').height()
    let imgCount = $('#content li').length
    $(window).resize(function(){
        moveCenter()
    })
    function moveCenter(){
        let winWidth = $(window).width()
        let winHeight = $(window).height()
        $('#sliderBoard').css({
            left: (winWidth - sliderWidth ) / 2,
            top: (winHeight - sliderHeight) / 2
        })
    }
    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:nth-child(1)').addClass('clicked')

    $('#content li').width(divWidth)            // li 的寬
    $('#content').width(divWidth * imgCount)    // ul 的寬

    // ==========
    let index = 0
    let timer = setInterval(moveToTheNext, 5000)

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToTheNext, 5000)
    })

    function moveToTheNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')
    }
});