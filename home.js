const validPin = 1234
const transactionData = []


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

//function to toggle button 
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")  
        btn.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300")

    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}

// addmoney feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount")
    if(amount<=0){
        alert("invalid amount")
        return;
    }

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
    
    const newBalance = availableBalance + amount
    setInnerText(newBalance)

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(transactionData)
})

// cashout feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");

    const availableBalance = getInnerText("available-balance")
    if(amount<=0 || amount>availableBalance){
        alert("invalid amount")
        return
    }

    const newBalance = availableBalance - amount

    setInnerText(newBalance)

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

});

// transactions
document.getElementById("transaction-button").addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML =`
        <div class=" bg-white rounded-xl p-3 flex items-center justify-between mb-4">
            <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#F4F5F7]">
                    <img src="assets/wallet1.png" alt=""/>
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>`

        transactionContainer.appendChild(div)
    }
})


// toggling features
document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("addmoney-parent")
    handleButtonToggle("add-button")
})

document.getElementById("cashout-button").addEventListener("click", function () {
    handleToggle("cashout-parent")
    handleButtonToggle("cashout-button")
})

document.getElementById("transfer-button").addEventListener(
    "click", function(){
    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-button")
})

document.getElementById("bonus-button").addEventListener(
    "click", function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-button")
})

document.getElementById("bill-button").addEventListener(
    "click", function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-button")
})

document.getElementById("transaction-button").addEventListener(
    "click", function(){
    handleToggle("transaction-parent")
    handleButtonToggle("transaction-button")
})



