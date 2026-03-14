console.log("login functionality comming")

document.getElementById("login-btn").addEventListener("click",function()
{
    const numberInput=document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

        const inputPin =document.getElementById("input-pin");
        const pin = inputPin.value;
        console.log(pin)

        // match pin and username
        if(contactNumber=="admin" && pin=="admin123")
        {
            alert("login success");
            window.location.assign("/home.html")
        }
        else{
            alert("login failed");
            return;
        }
    
})

