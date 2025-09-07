let convertToFarnhit = document.getElementById("degreeToFarenhit")
let result = document.getElementById("convertedTemp")
let convertToDegree = document.getElementById("farenhitToDegree")

convertToFarnhit.addEventListener("click", function(){
    let input = parseFloat(document.getElementById("convertTemp").value)
    Fahrenheit = (input * 9/5) + 32
    result.innerHTML = Fahrenheit + "° Fahrenheit"
})

convertToDegree.addEventListener("click",function(){
    let input = parseFloat(document.getElementById("convertTemp").value)
    celsius = (input - 32) * 5/9
    result.innerHTML = celsius + "°f"
})


    

