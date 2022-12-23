import throttle from 'lodash.throttle';

const frm = document.querySelector(".feedback-form");
const frmEmail = document.querySelector("input[name='email']");
const frmMessage = document.querySelector("textarea[name='message']");

const objFormData = {};

frm.addEventListener('input', throttle(onInput, 500));
frm.addEventListener('submit', onSubmit);

getFormValue();

function onInput() {
    objFormData[frmEmail.name] = frmEmail.value;
    objFormData[frmMessage.name] = frmMessage.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(objFormData));
}


function onSubmit(evt) {
    evt.preventDefault();

    const returnFormElements = {};

    returnFormElements[frmEmail.name] = frmEmail.value;
    returnFormElements[frmMessage.name] = frmMessage.value;

    console.log(returnFormElements);

    frm.reset();
    localStorage.removeItem("feedback-form-state");
}

function getFormValue() {
    try {
        const getValues = JSON.parse(
            localStorage.getItem('feedback-form-state')
        );

        if (getValues != 'null') {
            frmEmail.value = getValues.email;
            frmMessage.value = getValues.message;
        }
    }
    catch (e) {
        // console.log(e);
    }

}