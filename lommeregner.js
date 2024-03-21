document.getElementById("beerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var liters = parseFloat(document.getElementById("beerInput").value);
    var result = document.getElementById("result");
    if (!isNaN(liters)) {
        var squareMeters = liters;
        var donationAmount = liters * 12;
        result.innerHTML = `${liters} liter øl = ${squareMeters} kvadratmeter. <br> Din donation er ${donationAmount} kr.`;
    } else {
        result.innerText = "Please enter a valid number for the amount of beer.";
    }
});
