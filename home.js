const validPin = 1234

// function to get input values(number)
function getInputValueNumber(id) {
    const value = parseInt(document.getElementById(id).value);
    return value;
}

// function to get input values
function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
}

// function to get inner text
function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

// function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// toggling function
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    
    for(const form of forms){
        form.style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}

// addmoney feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if(accountNumber.length < 11){
        alert("Account number must be 11 digits")
        return;
    }

    if(pin !== validPin){
        alert("Invalid PIN")
        return;
    }
    
    const newBalance = availableBalance + amount;
    setInnerText(newBalance);
})

// cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");

    const availableBalance = getInnerText("available-balance");

    const newBalance = availableBalance - amount;

    setInnerText(newBalance);

});


// toggling features
document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("addmoney-parent")
})

document.getElementById("cashout-button").addEventListener("click", function () {
    handleToggle("cashout-parent")
})

document.getElementById("transfer-button").addEventListener(
    "click", function(){
    handleToggle("transfer-money-parent")
})

document.getElementById("bonus-button").addEventListener(
    "click", function(){
    handleToggle("get-bonus-parent")
})