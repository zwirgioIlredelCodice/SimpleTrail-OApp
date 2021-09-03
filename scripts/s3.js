let jsonData = JSON.parse(sessionStorage.getItem('jsonEvent'));
let timeElapsed = 0;
let timerID = -1;

function readRace() {
    var form = document.createElement("FORM");   // Create a <form> element
    form.setAttribute("id", "pointForm");

    let pointForm = '';

    for (let i = 0; i < jsonData.event.controlpoints.length; i++) {

        pointForm = pointForm + '<p>point ' + (i + 1) + '</p><br>';

        for (let y = 0; y < jsonData.event.controlpoints[i].length; y++) {
            let point = jsonData.event.controlpoints[i][y];
            pointForm = pointForm + '<input type="radio" id="' + point + '" name="point' + i + '" value="' + point + '">\n' + '<label for="' + point + '">' + point + '</label>\n';

        }
        form.innerHTML = pointForm;
        if (document.getElementById('pointForm') == null) { //if this element is not created yet
            document.body.appendChild(form);
        }
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