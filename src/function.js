export{musicPlay};

function musicPlay(MusicID){
    let Music = $('#' + MusicID)[0];//抓取ID為MusicID的音樂檔
    Music.currentTime = 1;//從第一秒開始撥放(避免前面的空白時段)
    Music.loop = true;//持續重複音樂撥放
    return Music;//將抓到且設定好的音樂回傳
}