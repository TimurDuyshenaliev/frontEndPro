document.addEventListener('DOMContentLoaded',function(){
    let checkPass = function(){
        let str =  document.querySelector('.js--input').value;
        let reNum = new RegExp('(?=.*[0-9])','g');
        if(reNum.test(str) == false){
            document.querySelector('.js--form-valid').insertAdjacentHTML('beforeend', '<li>Нужна цифра</li>');
            document.querySelector('.js--input').classList.add('input-invalid');
        };
        let reSym = new RegExp('(?=.*[!@#$%^&*])','g');
        if(reSym.test(str) == false){
            document.querySelector('.js--form-valid').insertAdjacentHTML('beforeend', '<li>Нужнен символ</li>');
            document.querySelector('.js--input').classList.add('input-invalid');
        };
        let reUpperLetter = new RegExp('(?=.*[A-Z])','g');
        if(reUpperLetter.test(str) == false){
            document.querySelector('.js--form-valid').insertAdjacentHTML('beforeend', '<li>Нужна большая буква</li>');
            document.querySelector('.js--input').classList.add('input-invalid');
        };
        let reAmount = new RegExp('[0-9a-zA-Z!@#$%^&*]{8,}','g');
        if(reAmount.test(str) == false){
            document.querySelector('.js--form-valid').insertAdjacentHTML('beforeend', '<li>Нужно больше 8 символов</li>');
            document.querySelector('.js--input').classList.add('input-invalid');
        };
    }
    document.querySelector('.js--input').addEventListener('change', checkPass);
});
