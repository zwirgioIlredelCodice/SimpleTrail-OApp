function loadJsonEvent() {

    let fileToLoad = document.getElementById("jsonData").files[0];
    let textFromFileLoaded;

    let fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        textFromFileLoaded = fileLoadedEvent.target.result;
        sessionStorage.setItem('jsonEvent', textFromFileLoaded);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
    document.location.href = 'p2.html'; // to change page
}