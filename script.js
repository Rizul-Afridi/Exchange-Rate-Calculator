const currencyElm_one = document.querySelector('#currency-one');
const amountEl_one = document.querySelector('#amount-one');
const currencyElm_two = document.querySelector('#currency-two');
const amountEl_two = document.querySelector('#amount-two');
const swap_bt = document.querySelector('#swap');
const rate_El = document.querySelector('#rate');

async function calculate() {
const currency_one = currencyElm_one.value;
const currency_two = currencyElm_two.value;

try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/1917baafd2258f3ac8383d69/latest/${currency_one}`);

    const data = await response.json();
    const rate = data.conversion_rates[currency_two];

    rate_El.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`

    amountEl_two.value = (amountEl_one.value*rate).toFixed(2);

} catch (error) {
    error
}
};

// adding Event Listeners to recalculate while currency changing

currencyElm_one.addEventListener('change',calculate);
currencyElm_two.addEventListener('change',calculate);

amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);

swap_bt.addEventListener('click',()=>{
    const temp = currencyElm_one.value;
    currencyElm_one.value = currencyElm_two.value;
    currencyElm_two.value = temp;
    calculate();
});

calculate();


