let jsonData = JSON.parse(sessionStorage.getItem('jsonEvent'));
let timeElapsed = 0;
let timerID = -1;

function readRace() {
    let div1 = document.getElementById('div1');

    for (let i = 0; i < jsonData.event.controlpoints.length; i++) {
        
        let p = document.createElement('p');
        p.innerText = 'point ' + (i+1);
        div1.appendChild(p);
        
        let div2 = document.createElement('div');
        div2.setAttribute('class','tocolor');
        
        for (let y = 0; y < jsonData.event.controlpoints[i].length; y++) {
            let point = jsonData.event.controlpoints[i][y];
            let input = document.createElement('input')
            input.setAttribute('type', 'radio');
            input.setAttribute('id', point);
            input.setAttribute('name', ('point'+i));
            input.setAttribute('value', point);
            div2.appendChild(input);

            let label  = document.createElement('label');
            label.setAttribute('for', point);
            label.innerText = point;
            div2.appendChild(label);
        }
        div1.appendChild(div2);
    }
    timeStart();
} 

function finishRace() {
    timeStop();
    sessionStorage.setItem('time', timeElapsed);
    
    let myForm = document.getElementById('pointForm');
    let formData = new FormData(myForm);
    let jsonObject = {};
    for (const [key, value] of formData) {
        jsonObject[key] = value;
    }
    let raceAnswers = JSON.stringify(jsonObject);
    sessionStorage.setItem('raceAnswers', raceAnswers);
    document.location.href = 'p4.html';
}

function tick() {
    timeElapsed++
    document.getElementById("time").innerHTML = timeElapsed;
}

function timeStart() {
    if (timerID == -1) {
        timerID = setInterval(tick, 1000);
    }
}

function timeStop() {
    if (timerID != -1) {
        clearInterval(timerID)
        timerID = -1
    }
}