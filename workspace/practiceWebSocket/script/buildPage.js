let ee = 0;


document.addEventListener("DOMContentLoaded",function (){
    const build = document.querySelector('.building');
    let input = "";
    input += '<input type="text" id="count" placeholder="여기에 숫자 입력">';
    input += '<input type="button" onClick="putStar()" value="별찍기">';
    input += '<input type="button" onClick="fullArray(0)" value="순서대로 배열 채우기">';
    input += '<input type="button" onClick="fullArray(1)" value="역순으로 배열 채우기">';
    input += '<input type="button" onClick="fullArray(2)" value="지그재그 배열 채우기">';
    input += '<input type="button" onClick="fullArray(3)" value="소용돌이 배열 채우기">';
    input += '<div id="contentDiv"></div>';
    build.innerHTML = input;


    setInterval(every,2000);

});

function every(){
    if(ee>3){
        putStar();
        ee=0;
    }else{
        fullArray(ee);
    }
    ee++;
}