/*
Pseudocode for tip calculator:
    - user enters bill amount
    - user enters tip percentage
    - user clicks calculate button
    - JS code grabs bill amount (converts to a Number)
    - JS code grabs tip amount (converts to a Number)
    - JS function calculates tip amount
    - JS function calculates total amount of bill
    - JS function returns total amount of bill and places total amount of bill back into the bottom of tip calculator
*/


function changeTotal () {
    let billTotal = document.getElementById('bill-amount').value;
    billTotal = Number(billTotal);

    let tipPercentage = document.getElementById('tip-percentage').value;
    tipPercentage = (Number(tipPercentage)) / 100;

    let calculatedTotal = tipCalculator(billTotal, tipPercentage);

    let printedAmount = document.getElementById("total-amount");
    printedAmount.innerText = "$ " + calculatedTotal.toFixed(2);
}


function tipCalculator (billTotal, tipPercentage) {
    let total = billTotal + (billTotal * tipPercentage);
    console.log(total);
    return total;
};


