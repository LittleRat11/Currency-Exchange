const firstCurrency = document.querySelector("#currency-first");
const firstInput = document.querySelector('#worth-first');
const secondCurrency = document.querySelector("#currency-second");
const secondInput = document.querySelector("#worth-second");
const exchangeRate = document.querySelector("#exchange-rate");
updateCurrency();
async function updateCurrency() {
    const apiKey = "b2cd67f622aa6915ca4b5d8b"
    const result = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstCurrency.value}`);
    const data = await result.json();
    // *console.log(data);
    const rate = data.conversion_rates[secondCurrency.value];
    secondInput.value = Math.ceil((firstInput.value * rate));
    exchangeRate.innerText = `1 ${firstCurrency.value} = ${secondInput.value} ${secondCurrency.value}`;


}
// *first currency 
firstCurrency.addEventListener("change", updateCurrency);
// *second currency
secondCurrency.addEventListener("change", updateCurrency);
// *first Input
firstInput.addEventListener("change", updateCurrency);