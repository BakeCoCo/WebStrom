document.addEventListener("DOMContentLoaded", function(){
    let lottoClick = document.getElementById('lotto');
    lottoClick.addEventListener('click',setNum);
    let lottoMap = new Map();
    setInterval(ranNum,0,lottoMap);
    setInterval(callLotto,5000);
})

function ranNum(lottoMap){
    let lottoNum = document.getElementById('lotto').textContent = String(Math.floor(Math.random()*45 +1))
    let lottoRank = document.getElementById('lottoRanking');
    let count = 0;
    let line = 0;
    let rank = 0;
    let paintLotto = '';
    let lotId = '';
    let lotCountId = '';
    if(lottoMap.has(lottoNum)){
        count = lottoMap.get(lottoNum)+1;
    }
    lottoMap.set(lottoNum,count);

    const mapSort = new Map([...lottoMap.entries()].sort((a,b) => b[1] - a[1]));

    mapSort.forEach(function (v,k){
        if(line%9===0){
            paintLotto += '<tr>';
            rank++;
        }
        line++;
        if(rank===1){
            lotId = 'rankNum';
            lotCountId = 'rankCount';
        }else{
            lotId = 'lotNum';
            lotCountId = 'lottoCount';
        }
        paintLotto += `<td id="${lotId}">${k}</td><td id="${lotCountId}">${v}</td>`;

    });

    lottoRank.innerHTML = paintLotto;


}
function setNum(){
    let kk = document.getElementById('setLotto');
    let setLotto = document.createElement('lotNum');
    let countNum = document.querySelectorAll('lotNum');
    let lottoChk = true;
    if(countNum.length<7){
        setLotto.textContent = document.getElementById('lotto').textContent+' ';
        for(let i = 0; i<countNum.length; i++ ){
            if(countNum[i].textContent.trim() === setLotto.textContent.trim()){
                // alert('같은숫자 ㄴㄴ해 : '+setLotto.textContent);
                lottoChk = false;
            }
        }
        if(lottoChk){
            kk.appendChild(setLotto);
        }
    }else{
        if(confirm('로또 번호 다시 뽑을거?')){
            kk.innerHTML='';
        }
    }
}

function callLotto(){
    let num = document.querySelectorAll('#rankNum');
    let lotNum = document.getElementById('setLotto');
    let setNum = '<table>';
    for(let i=0; i<7; i++){
        if(i===6){
            setNum += `<td class="bonusNum">보너스 : ${num[i].textContent}</td>`;
        }else{
            setNum += `<td class="callLotto">${num[i].textContent}</td>`;
        }

    }
    setNum += '</table>';
    lotNum.innerHTML = setNum;
}