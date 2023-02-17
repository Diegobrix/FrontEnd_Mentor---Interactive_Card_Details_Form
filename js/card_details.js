//Elements
const cardNumberDisplay = document.querySelector(".card-number-display");
const cardholderNameDisplay = document.querySelector(".cardholder-name-display");
const monthDisplay = document.querySelector(".month-display");
const yearDisplay = document.querySelector(".year-display");
const cvcDisplay = document.querySelector(".card-cvc-display");

const nameField = document.querySelector("#txtName");
const cardNumberField = document.querySelector("#txtCardNumber");
const cardCvcField = document.querySelector("#txtCvc");
const expMonthField = document.querySelector("#txtMonth");
const expYearField = document.querySelector("#txtYear");

const btnDataConfirm = document.querySelector("#btn-confirm");

let personName = "jane appleseed";
let month = 0;
let year = 0;
let cardNumber = "0000 0000 0000 0000";
let cvc = "000";

window.addEventListener("load", Init);

nameField.addEventListener("keyup", ShowValue);
cardNumberField.addEventListener("keyup", ShowValue);
cardCvcField.addEventListener("keyup", ShowValue);
expMonthField.addEventListener("keyup", ShowValue);
expYearField.addEventListener("keyup", ShowValue);

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

    switch(field)
    {
        case "txtName":
            cardholderNameDisplay.innerText = this.value;

            if(this.value.length < 1)
            {
                cardholderNameDisplay.innerText = personName;
            }
            break;
        case "txtCardNumber":
            cardNumberDisplay.innerText = this.value;

            if(this.value.length < 1)
            {
                cardNumberDisplay.innerText = cardNumber;
            }
            break;
        case "txtMonth":
            monthDisplay.innerText = this.value;

            if(this.value.length < 1)
            {
                monthDisplay.innerText = month;
            }
            break;
        case "txtYear":
            yearDisplay.innerText = this.value;
    
            if(this.value.length < 1)
            {
                yearDisplay.innerText = year;
            }
            break;
        case "txtCvc":
            if(this.value.length < 1)
            {
                cvcDisplay.innerText = cvc;
            }

            if(this.value.length <= 3)
            {
                cvcDisplay.innerText = this.value;
            }
            else
            {
                //Lança um aviso que o limite de caracteres é 3
            }
            break;
    }

}