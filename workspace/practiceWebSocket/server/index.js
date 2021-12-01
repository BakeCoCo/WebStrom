const WebSocket = require("ws");

const wss = new WebSocket.Server({port:63342});

wss.on("connection",ws =>{
    console.log("New client connected!");
    const RPS = ["가위","바위","보"];
    ws.on("message",data =>{
        console.log(`Client has sent us : ${data}`);
        var ran = Math.floor(Math.random()*3);
        var dt = data+"";
        var human = RPS.indexOf(dt);
        var rs = human-ran;
        var resultJson = {
            com : ran,
            man : human,
            res : rs
        }

        ws.send(JSON.stringify(resultJson));
    })

    ws.on("close", ()=>{
        wss.close();
        console.log("Client has disconnected!");
    })
});

