let readInput = document.getElementById("input_f");
let itipPercent = 0;
const peopleNumber = document.getElementById("people")

function tipPercent(value) {
    itipPercent = value
    console.log(itipPercent)
    document.getElementById("amount").innerHTML = itipPercent

}
let totalTip = 0;
let totalMoneyValue = 0;

function totalMoney(value) {
    let money = readInput.value;
    totalTip = (money * itipPercent) / peopleNumber.value
    const tip = document.getElementById("tipAmount").innerHTML = totalTip.toFixed(2)
    console.log(tip)
    totalMoneyValue = (money / peopleNumber.value) + totalTip;
    const total = document.getElementById("totalAmount").innerHTML = totalMoneyValue.toFixed(2);
    console.log(total)

}

function clearEverything() {
    document.getElementById("input_f").value = " ";
    document.getElementById("people").value = " ";
    document.getElementById("amount").innerHTML = "0.00";
    document.getElementById("tipAmount").innerHTML = "0.00"
    const total = document.getElementById("totalAmount").innerHTML = "0.00"
}