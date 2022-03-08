'use strict';

const rightLi=$('.right-menu>ul>li');
const section=$('.section');
const section2=$('.section.sec2');
const section2H1=$('.section.sec2 h1');


rightLi.on('click',function(){
    //$(this)자신의 인덱스값을 콘솔출력

    const _this=$(this);
    const _index=_this.index();
    // console.log(_this.index())


    const secTop=section.eq(_index).offset().top;
    // console.log(secTop)

    _this.addClass('on').siblings().removeClass('on');

    $('html').animate({scrollTop:secTop}, 500);
    //연속적인 animate기능이 있을때 발생되는 애니메이션을 잠시 중지시켜서 영향안받게.
    // $('html').stop().animate({scrollTop:secTop}, 500);

    if(_index==1){
        section2H1.animate({left:0},1000)

    }
});



/*
const rightUl=document.querySelector(`.right-menu>ul`);
const rightUlLi=document.querySelectorAll(`.right-menu>ul>li`);

rightUl.addEventListener('click',(e)=>{

    const eTarget=e.target;
    console.log(e.target)
    console.log(e.currentTarget)

    rightUlLi.forEach((el,idx)=>{
        if(eTarget===el){
            console.log(idx)
        }
    });
});
*/

const btnMenu=$('.btn-menu');
const leftMenu=$('.left-menu');

let toggleKey=0;

btnMenu.on('click',function(){

    console.log(toggleKey,'<<togglekey-1')
    const _this=$(this);
    const _thisImg=_this.find('img');

    if(toggleKey===0){
        //left-menu 이미지 다르게 바꾸기
        _thisImg.attr('src','img/left_1.jpg');
        leftMenu.animate({left:0},200);
        toggleKey=1;

    }else if(toggleKey===1){
        _thisImg.attr('src','img/left_0.jpg');
        leftMenu.animate({left:'-100%'},200);
        toggleKey=0;
        
    }
    console.log(toggleKey,'togglekey-2');

});

const gnbUlLi=$('.left-menu .gnb>ul>li');

gnbUlLi.on('click',function(){
    const _this=$(this);
    const _thisSub=_this.find('ul.sub');
    const _siblingsSub=_this.siblings().find('ul.sub');

    _thisSub.slideDown(300);
    _siblingsSub.slideUp(100);

});