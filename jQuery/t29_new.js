$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length
    resize()
    $(window).resize(function(){
        resize()
    })
    function resize(){
        let WinWidth = $(window).width()
        let WinHeight = $(window).height()
        let divWidth = $('#sliderBoard').width()
        let divHeight = $('#sliderBoard').height()
        $('#sliderBoard').css({
            left: (WinWidth - divWidth) / 2,
            top: (WinHeight - divHeight) / 2,
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