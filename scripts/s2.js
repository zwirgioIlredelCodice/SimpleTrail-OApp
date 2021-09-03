let jsonData = JSON.parse(sessionStorage.getItem('jsonEvent'));

function selectAthlete() {
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

function startRace() {
    let index = jsonData.startingrid.findIndex(obj => obj.id == document.getElementById('athlete').value);
    sessionStorage.setItem('athlete', JSON.stringify(jsonData.startingrid[index]));
    document.location.href = 'p3.html';
}