
var jsonData = {};

var timeElapsed = 0;
var timerID = -1;
function tick() {
    timeElapsed++
    document.getElementById("time").innerHTML = timeElapsed;
}

function start() {
    if (timerID == -1) {
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if (timerID != -1) {
        clearInterval(timerID)
        timerID = -1
    }
}

function reset() {
    stop();
    timeElapsed = -1;
    tick()
}

function loadFileAsText() {
    var fileToLoad = document.getElementById("jsonData").files[0];
    var textFromFileLoaded;

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("displayjson").innerHTML = textFromFileLoaded;
        jsonData = JSON.parse(textFromFileLoaded);
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}

function readEvent() {

    selectPerson();

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
}

function selectPerson() {
    console.log(jsonData.event.name);
    let form = document.createElement("FORM");   // Create a <form> element
    form.setAttribute("id", "participantsForm");

    let participantsForm = ' <label for="athlete">Athlete id:</label>\n<select name="athlete" id="athlete">\n';

    for (let i = 0; i < jsonData.startingrid.length; i++) {
        let formValue = jsonData.startingrid[i].id;

        participantsForm = participantsForm + '<option value="' + formValue + '">' + formValue + '</option>\n';

    }
    participantsForm = participantsForm + '</select><br>\n'

    form.innerHTML = participantsForm;
    if (document.getElementById('participantsForm') == null) { //if this element is not created yet
        document.body.appendChild(form);
    }
}

function extractAnswers() {
    let myForm = document.getElementById('pointForm');
    let formData = new FormData(myForm);
    let index = jsonData.startingrid.findIndex(obj => obj.id == document.getElementById('athlete').value);
    let jsonObject = { "athlete": jsonData.startingrid[index] };
    formData.append('time',document.getElementById('time').innerHTML);
    for (const [key, value] of formData) {
        jsonObject[key] = value;
    }
    let jsonAnswers = JSON.stringify(jsonObject);
    document.getElementById('displayAnswers').innerHTML = jsonAnswers;
}