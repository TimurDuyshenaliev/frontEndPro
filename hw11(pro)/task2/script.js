document.addEventListener('DOMContentLoaded',function(){
    function FormData(input, card){
        this.input = document.getElementById(input);
        this.card = document.querySelector(card);
        this.changeItem = (event)=>{
            event.preventDefault();
            const cardName = document.querySelector('js--card-name');
            const cardNumber = document.querySelector('js--card-number');
            const date = document.querySelector('js--card-date');
            if (cardName.value.length == 0) {
                document.querySelector('js--card-name').innerHTML = 'John Doe';
              } else {
                document.querySelector('js--card-name').innerHTML = this.input.value;
              }
        }
        this.getValues = (event)=>{
            event.preventDefault();
            const feilds = document.querySelectorAll('input');
            let values ={};
            feilds.forEach(feild =>{
                const {name, value} = feild;
                values[name] = value;
            });
            console.log(values)
        }
    }
    const formData = new FormData('js--form__input','js-card');
    // document.querySelector('js--form').addEventListener('input', formData.changeItem);
    document.querySelector('.js--form').addEventListener('submit', formData.getValues);
})