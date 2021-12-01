
document.addEventListener("DOMContentLoaded", function(){
    let calc = document.querySelector('calcurator');


    let calFrame = "<table>" +
        "<tr><td colspan='4' title='' style='text-align: right' id='result'>0</td></tr>"+
        "<tr><td colspan='4' title='' style='text-align: right' id='calcResult'>0</td></tr>"+
        "<tr><td>7</td><td>8</td><td>9</td><td>×</td></tr>" +
        "<tr><td>4</td><td>5</td><td>6</td><td>-</td></tr>" +
        "<tr><td>1</td><td>2</td><td>3</td><td>+</td></tr>" +
        "<tr><td>÷</td><td>0</td><td>CLEAR</td><td>=</td></tr>" +
        "</table>";

    calc.innerHTML = calFrame;

    let tdClick = document.querySelectorAll('td');

    for(let i = 0; i < tdClick.length ; i++) {
        tdClick[i].addEventListener('click', calcG);
    }


})

let calcResult = [];

function calcG(){
    let calR = document.querySelector('#calcResult');
    let calT = document.getElementById('result');
    let text = this.textContent;

    switch (text){
        case 'CLEAR':
            clear();
            break;
        case '0':case '1':case '2':case '3':case '4':case '5':case '6':case '7':case '8':case '9':
            if(calR.textContent =='0'){
                calR.textContent = text;
            }else{
                calR.textContent += text;
            }
            break;

        case '+':case '-':case '×':case '÷':
            if(calcResult.length>0){
                calcResult[0] = calc(calcResult[0],Number(calR.textContent),calcResult[1]);
                calcResult[1] = text;
            }else{
                calcResult[0] = Number(calR.textContent);
                calcResult[1] = text;
            }
            calT.textContent = calcResult[0];
            calR.textContent = '0';
            break;
        case '=':
            calcResult[0] = calc(calcResult[0],Number(calR.textContent),calcResult[1]);
            calT.textContent = calcResult[0];
            calR.textContent = '0';
            //clear();
            break;
    }
}

function clear(){
    document.querySelector('#calcResult').textContent='0';
    document.getElementById('result').textContent = '0';
    calcResult = [];
}

function calc(a,b,c){
    let result = 0;
    switch (c){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '×':
            result = a*b;
            break;
        case '÷':
            result = a/b;
            break;
    }
    return result;
}
