'use strict'

document.querySelector('.calculate').addEventListener('click', function () {

    let bill = Number(document.querySelector('.bill').value);
    let tip = Number(document.querySelector('.tip').value);

    let tipAmount = bill * (tip / 100);


    const totalAmount = bill + tipAmount;

    console.log(totalAmount, bill, tip);

    document.querySelector('.textTotal').textContent = "Total:" + " $" + totalAmount;



})

console.log(document.querySelector('.textTotal').textContent);