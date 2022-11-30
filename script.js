// JAVASCRIPT CODE OM GEGEVENS UIT BUIENRADER TE KRIJGEN
fetch('https://data.buienradar.nl/2.0/feed/json') //vraagt om gegevens
    .then(response => response.json()) // zet antwoord om in JSON formaat
    .then(data => { 
     
        //HIERONDER ZET JE CODE OM GEGEVENS UIT DE JSON BESTAND TE HALEN EN AAN ELEMENT TE KOPPELEN
        document.getElementById("temperatuur").innerHTML = data.actual.stationmeasurements[1].temperature ;

    });

