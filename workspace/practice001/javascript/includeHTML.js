function includeHTML(){
    let s = "";
    s += "<prev onclick=moveWave1()>prev</prev>";
    s += "<next onclick=moveWave2()>next</next>";

    const k = document.querySelector("#include-html");
    k.innerHTML = s;
}
function moveWave1(){
    location.href="practice001.html";
}

function moveWave2(){
    location.href="wave.html";
}
