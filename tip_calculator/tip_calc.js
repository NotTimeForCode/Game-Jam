let bill;
let num;
let percentage;
let tipAmount;
let total;

function calculation () {
    bill = parseFloat(document.getElementById('billAmount').value);
    num = parseFloat(document.getElementById('tipPercentage').value);
    percentage = num / 100;
    tipAmount = bill * percentage;
    total = bill + tipAmount;
    document.getElementById('bill').innerHTML = `Initial bill: ${bill}`;
    document.getElementById('percentage').innerHTML = `Tip percentage: ${num}%`;
    document.getElementById('tip').innerHTML = `Tip amount: ${tipAmount}`;
    document.getElementById('total').innerHTML = `Total amount: ${total}`;
}