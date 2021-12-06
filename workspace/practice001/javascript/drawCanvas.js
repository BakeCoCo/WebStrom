let WB = true;
let whiteScore = 0;
let blackScore = 0;
let oArr = new Array(15);
for(let i=0; i<oArr.length; i++){
    oArr[i] = new Array(15);
}
document.addEventListener('DOMContentLoaded',function(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const victory = document.getElementById('victory');
    nextTurn();
    lineMake(canvas,ctx);
    canvas.addEventListener('click',function(e){
        let s = victory.getAttribute('style');

        if(s==='visibility:hidden'){
            omok(e,canvas,ctx,oArr);
        }else{
            if(confirm('더 하시겠습니까?')){
                clearGame(oArr);
            }
        }
    });

    canvas.setAttribute("style","background-color:");
});

function lineMake(canvas,ctx){
    ctx.beginPath();
    for(let i=0; i<16; i++){
        let j = i*60;
        ctx.moveTo(j,0);
        ctx.lineTo(j,canvas.clientWidth);
        ctx.stroke();
    }
    for(let i=0; i<16; i++){
        let j = i*60;
        ctx.moveTo(0,j);
        ctx.lineTo(canvas.clientHeight,j);
        ctx.stroke();
    }

}

function omok(e,canvas,ctx,oArr){

    let xx = Math.round(e.x/60);
    let yy = Math.round(e.y/60);
    xx = xx*60;
    yy = yy*60;

    if(!checkOmok(xx,yy,canvas,ctx,oArr)) return;

    WB = !WB;
    if(WB){
        ctx.fillStyle = 'rgb(0,0,0)';
    }else{
        ctx.fillStyle = 'rgb(255,255,255)';
    }

    ctx.beginPath();
    ctx.arc(xx, yy, 25, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    nextTurn();
    drawArr(oArr);
    victoryCheck(oArr);
}
function nextTurn(){
    const turn = document.getElementById('turn');
    if(WB){
        turn.textContent = 'WHITE TURN';
    }else{
        turn.textContent = 'BLACK TURN';
    }
}
function checkOmok(x,y,canvas,ctx,oArr){
    if(x>900 || y>900 || x<60 || y<60){
        return false;
    }
    x = (x-60)/60;
    y = (y-60)/60;
    if(oArr[y][x] > -1){
        return false;
    }
    if(WB){
        oArr[y][x] = 0;
    }else{
        oArr[y][x] = 1;
    }

    return true;
}

function victoryCheck(oArr){
    let BW = 1;
    if(!WB) BW=0;

    for(let x=0; x<oArr.length; x++){
        let garo = 0;
        let sero = 0;
        let dakak1 = 0;
        let dakak2 = 0;
        let dakak3 = 0;
        let dakak4 = 0;

        for(let y=0; y<oArr.length; y++){
            //가로
            if(oArr[x][y] === BW){
                garo++;
                if(garo===5){
                    drawVictory();
                }
            }else {
                garo=0;
            }
            //세로
            if(oArr[y][x] === BW){
                sero++;
                if(sero===5){
                    drawVictory();
                }
            }else {
                sero=0;
            }

            if(x+y<15){
                //대각선  \아래
                if(oArr[x+y][y] === BW){
                    dakak1++;
                    if(dakak1===5){
                        drawVictory();
                    }
                }else {
                    dakak1=0;
                }
            }

            if(y-x>=0){
                // 대각선 \위에
                if(oArr[y-x][y] === BW){
                    dakak2++;
                    if(dakak2===5){
                        drawVictory();
                    }
                }else{
                    dakak2=0;
                }
            }

            if(x>=y){
                // 대각선 /위에
                if(oArr[x-y][y] === BW){
                    dakak3++;
                    if(dakak3===5){
                        drawVictory();
                    }
                }else{
                    dakak3=0;
                }
            }

            if(x+y<15){
                // 대각선 /아래
                if(oArr[x+y][oArr.length-1-y] === BW){
                    dakak4++;
                    if(dakak4===5){
                        drawVictory();
                    }
                }else{
                    dakak4=0;
                }
            }
        }
    }
}

function drawArr(oArr){
    const draw = document.getElementById("drawArr");

    let k = "<table>";
    for(let i=0; i<oArr.length; i++){
        k += "<tr>";
        for(let j=0; j<oArr.length; j++){
            k += `<td>${oArr[i][j]}=i:${i},j:${j}</td>`;
        }
        k += "</tr>";
    }
    k += "</table>";

    draw.innerHTML = k;
}

function drawVictory(){
    const vic = document.getElementById('victory');
    const score = document.getElementById('score');
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '120px solid';
    ctx.fillStyle = 'rgb(100,250,100)';

    vic.setAttribute('style','visibility:visible');

    let  text = "WHITE WIN";
    if(WB) {
        text = "BLACK WIN"
        blackScore++;
    }else{
        whiteScore++;
    }
    ctx.fillText(text,200,300);
    score.textContent = `BLACK : ${blackScore} \n WHITE : ${whiteScore}`;
    vic.textContent = text;
}

function clearGame(){
    const canvas =document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const vic = document.getElementById('victory');

    vic.setAttribute('style','visibility:hidden');
    for(let i=0; i<oArr.length; i++){
        oArr[i] = new Array(15);
    }
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    lineMake(canvas,ctx);
}
