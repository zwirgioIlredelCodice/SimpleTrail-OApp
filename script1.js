
var jsonData;

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

function extractAnswers() {
    let myForm = document.getElementById('pointForm');
    let formData = new FormData(myForm);
    let jsonObject = {};

    for (const [key, value]  of formData) {
        jsonObject[key] = value;
    }
    let jsonAnswers = JSON.stringify(jsonObject);
    document.getElementById('displayAnswers').innerHTML = jsonAnswers;
}