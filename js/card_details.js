//Elements
const cardNumberDisplay = document.querySelector(".card-number-display");
const cardholderNameDisplay = document.querySelector(".cardholder-name-display");
const monthDisplay = document.querySelector(".month-display");
const yearDisplay = document.querySelector(".year-display");
const cvcDisplay = document.querySelector(".card-cvc-display");

const nameField = document.querySelector("#txtName");
const cardNumberField = document.querySelector("#txtCardNumber");

const btnDataConfirm = document.querySelector("#btn-confirm");

let personName = "jane appleseed";
let month = 0;
let year = 0;
let cardNumber = "0000 0000 0000 0000";

window.addEventListener("load", Init);


function Init() 
{
    cardholderNameDisplay.innerHTML = (personName);
    cardNumberDisplay.innerHTML = (cardNumber);
    monthDisplay.innerHTML = (month);
    yearDisplay.innerHTML = (year);
}

function ShowValue() 
{
    let field = this.id;

    if(field == "txtName")
    {
        cardholderNameDisplay.innerText = this.value;
    }
}