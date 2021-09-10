let jsonData = JSON.parse(sessionStorage.getItem('jsonEvent'));

function selectAthlete() {
    for (let i = 0; i < jsonData.startingrid.length; i++) {
        let formValue = jsonData.startingrid[i].id;
        let node = document.createElement('option');
        node.setAttribute('value', formValue);
        let textnode = document.createTextNode('id:' + formValue + ' name: ' + jsonData.startingrid[i].name);
        node.appendChild(textnode);
        document.getElementById("athlete").appendChild(node);

    }
}

function startRace() {
    let index = jsonData.startingrid.findIndex(obj => obj.id == document.getElementById('athlete').value);
    sessionStorage.setItem('athlete', JSON.stringify(jsonData.startingrid[index]));
    document.location.href = 'p3.html';
}