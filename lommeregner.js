document.getElementById("beerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var liters = parseFloat(document.getElementById("beerInput").value);
    var result = document.getElementById("result");
    if (!isNaN(liters)) {
        var squareMeters = liters;
        var donationAmount = liters * 12;
        result.innerHTML = `${liters} liters of beer is equal to ${squareMeters} square meters. <br> Din donation er ${donationAmount} kr.`;
    } else {
        result.innerText = "Please enter a valid number for the amount of beer.";
    }
});
