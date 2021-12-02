
function putStar(){
    const contentDiv = document.getElementById('contentDiv');
    const count = document.getElementById('count').value;
    let bg_colour = Math.floor(Math.random() * 16777215).toString(16);
    bg_colour = "#" + ("000000" + bg_colour).slice(-6);
    let input = `<div style="color: ${bg_colour}">`;

    for(let i=0; i<=count; i++){
        for(let j=0; j<=i; j++){
            input += "*";
        }
        for(let k=count; k>=i; k--){
            input += "-";
        }
        input += "<br>";
    }

    input += "<br>";

    for(let i=0; i<=count; i++){
        for(let k=count; k>=i; k--){
            input += "-";
        }
        for(let j=0; j<=i; j++){
            input += "*";
        }
        input += "<br>";
    }

    input += "<br>";

    for(let i=count; i>=0; i--){
        for(let k=count; k>=i; k--){
            input += "-";
        }
        for(let j=i; j>=0; j--){
            input += "*";
        }
        input += "<br>";
    }

    input += "<br>";

    for(let i=count; i>=0; i--){
        for(let j=i; j>=0; j--){
            input += "*";
        }
        for(let k=count; k>=i; k--){
            input += "-";
        }
        input += "<br>";
    }

    input += "<br>";

    for(let i=count; i>=0; i--){
        for(let j=i; j>=0; j--){
            input += "*";
        }

        for(let k=count*2; k>=i*2; k--){
            input += "-";
        }

        for(let j=i; j>=0; j--){
            input += "*";
        }
        input += "<br>";
    }

    for(let i=0; i<=count; i++){
        for(let j=0; j<=i; j++){
            input += "*";
        }
        for(let k=count*2; k>=i*2; k--){
            input += "-";
        }
        for(let j=0; j<=i; j++){
            input += "*";
        }
        input += "<br>";
    }
    input +="</div>";
    contentDiv.innerHTML = input;
}


function fullArray(n){
    const contentDiv = document.getElementById('contentDiv');
    let countArray = Number(document.getElementById('count').value);
    let arr = new Array(countArray);
    for(let i=0; i<arr.length; i++){ arr[i] = new Array(countArray);}
    let input = "<table>";
    input += arraySet(n,countArray,arr,input);
    input +="</table>";
    contentDiv.innerHTML = input;
}

function arraySet(n,countArray,arr,input){
    let tf = true;
    switch (n){
        case 0:
            //앞에서부터
            for (let i = 0; i < countArray; i++){
                for (let j = 0; j < countArray; j++){
                    arr[i][j] = (i * countArray) + j + 1;
                }
            }
            break;
        case 1:
            //뒤에서부터
            for (let i = 0; i < countArray; i++){
                for (let j = 0; j < countArray; j++){
                    arr[i][j] = ((countArray-i) * countArray) - j;
                }
            }
            break;
        case 2:
            // 지그재그

            for (let i = 0; i < countArray; i++){
                if(tf){
                    for(let j = 0; j < countArray; j++){
                        arr[i][j] = (i * countArray) + j + 1;
                    }
                }else{
                    for(let j=countArray-1; j>=0; j--){
                        arr[i][j] = i*(countArray+1)+(countArray-i)-j;
                    }
                }
                tf = !tf;
            }
            break;
        case 3:
            // 소용돌이
            let mx = true;
            let my = true;
            let maxX = countArray;
            let maxY = countArray;
            let minX = 0;
            let minY = 1;
            let x = 0;
            let y = 0;
            const c = countArray*countArray;
            for(let i=1; i<=c; i++){
                arr[y][x] = i;
                if(mx&&my){
                    x++;
                    if(x+1>maxX) {
                        x--;
                        y++;
                        maxX--;
                        mx = false;
                    }
                }else if(!mx&&my){
                    y++;
                    if(y+1>maxY) {
                        y--;
                        x--;
                        maxY--;
                        my = false;
                    }
                }else if(!mx&&!my){
                    x--;
                    if(x-1<minX) {
                        minX++;
                        mx = true;
                    }
                }else if(mx&&!my){
                    y--;
                    if(y-1<minY) {
                        minY++;
                        my = true;
                    }
                }
            }
            break;
    }

    for (let k = 0; k < arr.length; k++){
        let bg_colour = Math.floor(Math.random() * 16777215).toString(16);
        bg_colour = "#" + ("000000" + bg_colour).slice(-6);
        input += `<tr  style="background-color : ${bg_colour}">`;
        for (let m = 0; m < arr[k].length; m++){
            input += `<td>${arr[k][m]}</td>`;
        }
        input += "</tr>";
    }

    return input;
}
