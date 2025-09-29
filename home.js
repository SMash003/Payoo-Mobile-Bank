const validPin = 1234

// addmoney feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    if(accountNumber.length < 11){
        alert("Account number must be 11 digits")
        return;
    }

    if(pin !== validPin){
        alert("Invalid PIN")
        return;
    }
    
    const newBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText = newBalance;
})

// cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const amount = parseInt(document.getElementById("withdraw-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const newBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = newBalance;

});


// toggling features
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("addmoney-parent").style.display = "block";
})

document.getElementById("cashout-button").addEventListener("click", function () {
    document.getElementById("addmoney-parent").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block"; 
})