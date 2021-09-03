function summary() {
    let summaryContent = 'ATHLETE\n' + sessionStorage.getItem('athlete') + '\nANSWERS\n' + sessionStorage.getItem('raceAnswers')
    document.getElementById("summary").innerHTML = summaryContent;
}

function exitRace() {
    sessionStorage.clear();
    document.location.href = 'p1.html';
}