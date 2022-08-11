const amount = document.getElementById("amount");
const quality = document.getElementById("quality");
const guests = document.getElementById("guests");
const btnCalculate = document.querySelector(".tip-btn");

const tipAmount = document.getElementById("tip");
const each = document.getElementById("each");

btnCalculate.addEventListener('click', () => {
    let bill = Number(amount.value);
    let tip = Number(quality.value);
    // console.log(tip)
    let people = Number(guests.value);

    let perc = bill * tip;
    let totalResult = (perc + bill) / people;
    tipAmount.style.visibility = "visible";
    const totalBill = document.getElementById("result");
    totalBill.innerHTML = totalResult.toFixed(2);
    each.style.visibility = "visible";
    console.log( totalBill);
})

