document.addEventListener('DOMContentLoaded',function(){
    function FormData(input, card){
        this.input = document.querySelector(input);
        this.card = document.querySelector(card);
        this.updateValueNum = function(e){
            const cardNumber = document.getElementById('card-number');
            cardNumber.textContent = e.target.value;
        }
        this.updateValueName =function(e) {
            const cardName = document.getElementById('card-name');
            cardName.textContent = e.target.value;
        }
        this.updateValueDate =function(e) {
            const cardDate = document.getElementById('card-date');
            cardDate.textContent = e.target.value;
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
    document.querySelector('.js--form').addEventListener('submit', formData.getValues);
    document.getElementById('input_name').addEventListener('change', formData.updateValueName);
    document.getElementById('input_number').addEventListener('change', formData.updateValueNum);
    document.getElementById('input_date').addEventListener('change', formData.updateValueDate);      
})