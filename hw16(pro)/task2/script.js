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
        let activeSlide = 1;
        let disableButton = function(){
            _prev.classList.add('disable');
            _prev.addEventListener('click', function(){
                if(activeSlide > 1){
                    activeSlide--;
                }
                _next.classList.remove('disable');
                if(activeSlide === 1){
                    _prev.classList.add('disable')
                }
                makeTimer();
            });
            _next.addEventListener('click', function(){ 
                if(activeSlide !== slider.length){
                    activeSlide++;
                }
                _prev.classList.remove('disable');
                if(activeSlide === slider.length){
                    _next.classList.add('disable');
                }
                makeTimer();
            });
        }
        disableButton(activeSlide);
        var timer = 0;
        makeTimer();
        function makeTimer(){
            clearInterval(timer)
            timer = setInterval(function(){
            const activeItem = _list.querySelector('.active');
            slider.changeItem({
                _newElement: activeItem.nextElementSibling,
                active: activeItem,
            });
            if(activeSlide < slider.length){
                activeSlide++;
                if(activeSlide > 1){
                    _prev.classList.remove('disable');
                } 
                if(activeSlide === slider.length){
                    _next.classList.add('disable');
                }     
            }
            },5000);
        };
    };
    const slider = new Slider('.js--slider__prev','.js--slider__next','.js--list');
});
