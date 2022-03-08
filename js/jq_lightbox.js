'use strict';

const secConLi=$('.sec-con ul li');
const popUp=$('.popUp');
const popUpCon=$('.popUp .popUp-con');
const close=$('span.close');

secConLi.on('click',function(e){
    // console.log($(this))

    const _this=$(this);
    //img를 찾아서 src get
    const _this_img= _this.find('img');
    const _this_pTag= _this.find('p');

    // console.log(_this_img)
    // console.log(_this_Ptag)

    const _this_imgSrc= _this_img.attr('src');
    const _this_imgAlt= _this_img.attr('alt');
    const _this_pTagTxt= _this_pTag.text();

    const popUpImg=popUpCon.find('img')
    const popUpPTag=popUpCon.find('P')

    popUpImg.attr({'src':_this_imgSrc,'alt':_this_imgAlt});
    popUpPTag.text(_this_pTagTxt);


    // popUp.fadeIn();
    popUp.fadeIn(100).css('display','flex');
    
        
});
close.on('click',function(e){
    popUp.fadeOut(100);
});
