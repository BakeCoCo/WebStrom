document.addEventListener("DOMContentLoaded", function(){
    const date = new Date();
    const year = date.getFullYear();
    const mon = date.getMonth()+1;
    const setM = document.querySelector('.loadMonth');
    setM.innerHTML = `<button id="TODAY" onclick="buildCalendar(${year},${mon})">TODAY</button>`;

    buildCalendar(year,mon);
    document.getElementById('PREV').addEventListener('click',btnMonth);
    document.getElementById('NEXT').addEventListener('click',btnMonth);

});

let calDate = (year,mon) => { return new Date(year,mon,0);}

function buildCalendar(toYear,toMonth){

    const preLast = calDate(toYear,toMonth-1);
    const thisLast = calDate(toYear,toMonth);

    const pLdate = preLast.getDate();
    const pLday = preLast.getDay();
    const tLdate = thisLast.getDate();
    const tLday = thisLast.getDay();

    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const ww = {
        "일":'SUN',
        '월':'MON',
        '화':'TUE',
        '수':'WED',
        '목':'THU',
        '금':'FRI',
        '토':'SAT'
    }
    const setYm = document.querySelector('.year-month');

    setYm.innerHTML = `<td>${toYear}년 ${toMonth}월</td>`;


    const calendarFrame = document.querySelector('.calendarFrame');

    let buildCal = "";
    let listCal = [];

    if(pLday!==6){
        for (let i = 0; i < pLday + 1; i++){
            listCal.push(pLdate-pLday+i);
        }
    }

    for(let i=0; i<tLdate+6-tLday; i++){
        if(i>=tLdate){
            listCal.push(i-tLdate+1);
        }else{
            listCal.push(i+1);
        }
    }

    for(let k=0; k<listCal.length; k++){
        let s = week[k%7];
        switch (s){
            case '일':
                buildCal += '<tr>';
            case '월':
            case '화':
            case '수':
            case '목':
            case '금':
            case '토':
                buildCal += `<td class="${ww[s]}" id="cal-day${listCal[k]}" onclick="dayCall(this)">${listCal[k]}</td>`;
            break;
        }
    }
    calendarFrame.innerHTML = buildCal;
}

function btnMonth(){
    const ym = document.querySelector('.year-month').textContent;
    let num = this.value === 'PREV' ? -1 : 1;
    let pyear = Number(ym.substring(0, ym.indexOf('년')));
    let pmon = Number(ym.substring(ym.indexOf('년') + 2, ym.indexOf('월'))) + num;

    if (pmon === 0){
        pyear--;
        pmon = 12;
    } else if (pmon === 13){
        pyear++;
        pmon = 1;
    }

    buildCalendar(pyear,pmon);
}

function btnYear(v){
    const ym = document.querySelector('.year-month').textContent;
    let pyear = Number(ym.substring(0, ym.indexOf('년')));
    let pmon = Number(ym.substring(ym.indexOf('년') + 2, ym.indexOf('월')));

    if(v ==='<'){
        pyear--;
    }else{
        pyear++;
    }
    buildCalendar(pyear,pmon);
}

function dayCall(a){
    // class, id, textcontent
    console.log("WHAT : "+a.className+" : "+a.textContent);
}