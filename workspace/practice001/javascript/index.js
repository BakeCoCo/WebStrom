document.addEventListener("DOMContentLoaded", function() {
    var randomNumber = Math.floor(Math.random()*100 +1);

    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');

    var guessField = document.querySelector('.guessField');

    var guessCount =0;
    var resetButton;

    window.addEventListener("keydown", e => {
        const key = document.getElementById(e.key);
        if (key) key.classList.add('pressed');
        if(e.keyCode=='13'){
            countResult();
        }
    });

    window.addEventListener("keyup", e => {
        const key = document.getElementById(e.key);
        if (key) key.classList.remove('pressed');
    });

    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
    }

    function countResult(){
        console.log(guessField.value,randomNumber);
        var st = Number(guessField.value);
        lowOrHi.textContent = 'You should input a ';
        if(randomNumber>st){
            lowOrHi.textContent += 'High';
        }else if(randomNumber<st){
            lowOrHi.textContent += 'Low';
        }else if(randomNumber===st){
            lowOrHi.textContent = 'Correct';
        }else{
            alert('wrong text');
        }
        guessCount++;
        guesses.textContent=guessCount;
        lastResult.textContent=st;
    }

    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }

    var guessSubmit = document.querySelector('.guessSubmit');
    guessSubmit.addEventListener('click',countResult);

    setInterval(updownContent,1000);

    setInterval(babelSquart,200);
});

function checkGuess(){
    alert("I am a placeholder");
};

function updownContent(){
    let content = document.querySelector('.practice');
    content.classList.toggle('loadHTML');
}

function babelSquart(){
    let timeS = new Date().getSeconds();
    let babel = document.getElementById('squart');
    let k = babel.getAttribute('src');
    let imgTxt = k.substring(0,k.length-5);
    let squart = imgTxt+(timeS%2+1)+'.gif';
    babel.setAttribute('src',squart);

    let health = document.getElementById('health');
    if(timeS%2==0){
        health.textContent = '백만스물 하나';
    }else{
        health.textContent = '백만스물 둘';
    }


}


