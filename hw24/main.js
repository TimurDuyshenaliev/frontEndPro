"use srict";

class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}
class TextElement extends FormElement {
    constructor({placeholder, name, type, value}){
        super(name, type, value);
        this.placeholder = placeholder;
        this.type = type;
        this.name = name;
        this.value = value;
    }
    createInput(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('placeholder', this.placeholder);
        this.element.setAttribute('name', this.name);
        this.element.addEventListener("change", () => {
            this.value = this.element.value;
          });
    }
}
class CheckboxElement extends FormElement {
    constructor({type, value, checked}){
        super(type, value);
        this.type = type;
        this.value = value;
        this.checked = checked;
    }
    createCheckbox(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('value', this.value);
        this.element.setAttribute('checked', this.checked);
    }
}
class ButtonElement extends FormElement {
    constructor({type, value}){
        super(type, value);
        this.type = type;
        this.value = value;
    }
    createButton(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('value', this.value);
    }
}
const inputName = new TextElement({
    placeholder: "Name",
    type: "text",
    name: "user",
});
inputName.createInput();

const inputEmail = new TextElement({
    placeholder: "Email",
    type: "text",
    name: "mail",
});
inputEmail.createInput();

const inputPassword = new TextElement({
    placeholder: "Password",
    type: "text",
    name: "password",
});
inputPassword.createInput();

const inputPassword2 = new TextElement({
    placeholder: "Repeat your password",
    type: "text",
    name: "password2",
});
inputPassword2.createInput();

const checkbox = new CheckboxElement({
    type: 'checkbox',
    checked: true,
});
checkbox.createCheckbox();

const button = new ButtonElement({
    type: "button",
    value: "register"
});
button.createButton();

document.querySelector(".form").insertAdjacentElement("beforeend", inputName.element);
document.querySelector(".form").insertAdjacentElement("beforeend", inputEmail.element);
document.querySelector(".form").insertAdjacentElement("beforeend", inputPassword.element);
document.querySelector(".form").insertAdjacentElement("beforeend", inputPassword2.element);
document.querySelector(".form").insertAdjacentElement("beforeend", checkbox.element);
document.querySelector(".form").insertAdjacentElement("beforeend", button.element);
