$('html').on('mousemove', (event) => {
    console.log(event.clientX, event.clientY);
    // 350~735 x
    // 100~665 y
    if((event.clientX <= 880 && event.clientX >= 670) && (event.clientY >= 150 && event.clientY <= 450)){
        $('.initScreen').addClass('initScreenImgMove');
    }
    else if(!((event.clientX <= 1124 && event.clientX >= 408) && (event.clientY >= 0 && event.clientY <= 713))){
        $('.initScreen').removeClass('initScreenImgMove');
    }
})