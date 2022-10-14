document.addEventListener('DOMContentLoaded',function(){
    function Slider(prev, next, list){
        const _prev = document.querySelector(prev);
        const _next = document.querySelector(next);
        const _list = document.querySelector(list);
        this.length = _list.getElementsByTagName('li').length;
        this.changeItem = function ({ active, _newElement }) {
            if (_newElement) {
                active.classList.remove('active');
                _newElement.classList.add('active');
            }
        };

        _next.addEventListener('click', function () {
            const activeItem = _list.querySelector('.active');
            slider.changeItem({
                _newElement: activeItem.nextElementSibling,
                active: activeItem,
            });
        });
    
        _prev.addEventListener('click', function () {
            const activeItem = _list.querySelector('.active');
            slider.changeItem({
                active: activeItem,
                _newElement: activeItem.previousElementSibling
            });
        });

        let disableButton = function(){
            let activeSlide = 1;
            _prev.classList.add('disable');
            _prev.addEventListener('click', function(){
                if(activeSlide > 1){
                    activeSlide--;
                }
                _next.classList.remove('disable');
                if(activeSlide === 1){
                    _prev.classList.add('disable')
                }
            });
            _next.addEventListener('click', function(){ 
                if(activeSlide !== slider.length){
                    activeSlide++;
                }
                _prev.classList.remove('disable');
                if(activeSlide === slider.length){
                    _next.classList.add('disable');
                }
            });
        }
        disableButton();
    }
    const slider = new Slider('.js--slider__prev','.js--slider__next','.js--list');
    console.log(slider);    
});
