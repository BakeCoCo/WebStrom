document.addEventListener("DOMContentLoaded",function(){
    const ws = new WebSocket("ws://localhost:63342");
    const btn = document.querySelectorAll("input");

    const computerImg = document.getElementById("computerimg");
    const humanImg = document.getElementById("humanimg");
    const result = document.getElementById("result");

    let Hscore = HBattle(1);
    let Cscore = CBattle(1);

    const RPS = ["가위","바위","보"];

    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click",sendRPS);
    }

    ws.addEventListener("open", ()=>{
        console.log("We are connected!");
        ws.send("Hey how's it going?");
    });

    ws.addEventListener("message",({data}) =>{
        let HumanCount = document.getElementById("manScore");
        let ComputerCount = document.getElementById("comScore");

        let dt = JSON.parse(data);
        if(dt.man == -1){
            return;
        }
        let rs = Number(dt.man) - Number(dt.com);
        let battleResult = "";
        switch (rs){
            case 0:
                battleResult = "무승부!!";
                break;
            case 1:
            case -2:
                battleResult = "인간 승리!!";
                HumanCount.textContent = Hscore.next().value;
                break;
            case 2:
            case -1:
                battleResult = "인간 패배!!";
                ComputerCount.textContent = Cscore.next().value;
                break;
        }
        humanImg.setAttribute('src',`images/${dt.man}.png`);
        computerImg.setAttribute('src',`images/${dt.com}.png`);
        result.textContent = battleResult;

        if(ComputerCount.textContent==10){
            changeEarth();
        }else if (HumanCount.textContent==10) {
            result.textContent = "HUMAN SAVE EARTH"
        }
    });


    function sendRPS(){
        ws.send(this.value);
    }


});

function* HBattle(count){
    while(true){
        yield count++;
    }
}
function* CBattle(count){
    while(true){
        yield count++;
    }
}

function changeEarth(){
    const earthBody = document.getElementById("txtDiv");
    let earthImg ="";
    earthImg = `<img src="http://localhost:63342/WebStrom/workspace/practiceWebSocket/images/earth0.gif" id="endEarth" width="1000" height="800">`;
    earthBody.innerHTML = earthImg;

    setTimeout(() => {
        earthImg = `<img src="http://localhost:63342/WebStrom/workspace/practiceWebSocket/images/earth1.gif" id="endEarth" width="1000" height="800">`;
        earthBody.innerHTML = earthImg;
    },7500);

    setTimeout(() => {
        earthImg = `<img src="http://localhost:63342/WebStrom/workspace/practiceWebSocket/images/earth2.gif" id="endEarth" width="1000" height="800">`;
        earthBody.innerHTML = earthImg;
    },15000);

    setTimeout(() => {
        earthImg = `<div id="END"> END EARTH <input type="button" onclick="location.href='http://localhost:63342/WebStrom/workspace/practiceWebSocket/index.html'" value="RE"></div>`;
        earthBody.innerHTML = earthImg;
    },23000);
}