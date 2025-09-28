// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobileValue = document.getElementById('mobile').value
    const convertedMobile = parseInt(mobileValue)
    const pinValue = document.getElementById('pin').value
    const convertedPin = parseInt(pinValue)

    // console.log(mobileValue, pinValue)

    if(convertedMobile === mobileNumber && convertedPin === pinNumber){
        window.location.href = 'home.html'
    }
    else
    {
        alert('Invalid Credentials')
    }
})