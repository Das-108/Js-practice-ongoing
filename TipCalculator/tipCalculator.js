

const calculateBtn = document.getElementById("calcBtn").addEventListener("click",function(){
    const inputBillAmt = parseInt(document.getElementById("billAmt").value)
    const inputTipAmt = parseInt(document.getElementById("tipAmt").value)
    let tipGiven = document.getElementById('tip')
    let totalBill = document.getElementById("total")

    let tip = inputTipAmt
    tipGiven.innerHTML =`Tip: ${tip} <br> Bill Amount: ${inputBillAmt}`  
    let totalAmount = inputBillAmt + inputTipAmt
    totalBill.innerHTML = "Total Amount: " + totalAmount 
})