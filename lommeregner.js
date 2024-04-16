document.getElementById("beerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let liters = parseFloat(document.getElementById("beerInput").value);
    let result = document.getElementById("result");
    if (!isNaN(liters)) {
        var squareMeters = liters;
        var donationAmount = liters * 12;
        var donations = []; 
        for (let i = 1; i <= liters; i++) {
            donations.push(i * 12); 
        }
        if (liters === 5) {
            result.innerHTML = "Tillykke, du har doneret 60 kr til Naturfonden";
        } else {
            let totalDonation = donations.reduce((acc, curr) => acc + curr, 0); 
            result.innerHTML = `${liters} liter øl = ${squareMeters} kvadratmeter. <br> Din samlede donation er ${totalDonation} kr.`;
        }
    } else {
        result.innerText = "Indtast venligst et gyldigt tal for mængden af øl.";
    }
});


