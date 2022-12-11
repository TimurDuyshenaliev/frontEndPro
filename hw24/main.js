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
    constructor({placeholder, name, type}){
        super(name, type);
        this.placeholder = placeholder;
        this.type = type;
        this.name = name;
    }
    createInput(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('placeholder', this.placeholder);
        this.element.setAttribute('name', this.name);
    }
}
class CheckboxElement extends FormElement {
    constructor({type, checked}){
        super(type);
        this.type = type;
        this.checked = checked;
    }
    createCheckbox(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('checked', this.checked);
    }
}
class ButtonElement extends FormElement {
    constructor({type}){
        super(type);
        this.type = type;
    }
    createButton(){
        this.element = document.createElement("input");
        this.element.setAttribute('type', this.type);
    }
}
const inputText = new TextElement({
    placeholder: "text",
    type: "text",
    name: "user",
});
inputText.createInput();

const checkbox = new CheckboxElement({
    type: 'checkbox',
    checked: true,
});
checkbox.createCheckbox();

const button = new ButtonElement({
    type: "button",
});
button.createButton();

