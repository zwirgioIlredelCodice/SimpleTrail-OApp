let summary = '';

function showSummary() {
    let athlete = JSON.parse(sessionStorage.getItem('athlete'));
    let raceAnswers = JSON.parse(sessionStorage.getItem('raceAnswers'));
    let jsonAnswers = { "athlete": athlete, "time": sessionStorage.getItem('time'), "answers": raceAnswers };
    summary = JSON.stringify(jsonAnswers);
    document.getElementById("summary").innerHTML = summary;
}

function exitRace() {
    sessionStorage.clear();
    document.location.href = 'p1.html';
}

function download() {
    let dataurl = 'data:text,' + summary;
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", 'answers.json');
    a.click();
}