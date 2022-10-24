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

        let disableButton = function(activeSlide){
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
        disableButton(1);
        
    };
    function SliderPagination(prev, next,pagination){
        const _prev = document.querySelector(prev);
        const _next = document.querySelector(next);
        let paginationElement = document.querySelector(pagination);
        let paginationHTML = [];
        for (let i = 0; i < slider.length; i++) {
            paginationHTML.push('<button class="slider_pagination_btn" data-index="' + i + '"></button>');
        }
        paginationElement.innerHTML = paginationHTML.join('');
        let currentIndex = document.querySelector('.slider_pagination_btn').dataset.index;
        console.log(currentIndex);
        paginationElement.childNodes[currentIndex].classList.add('selected');
        let disableButton = function(activeSlide){
            _prev.addEventListener('click', function(){
                if(activeSlide >= 1){
                    activeSlide--;
                    currentIndex--;
                }
                console.log(activeSlide);
                console.log(currentIndex);
                if(activeSlide === currentIndex+1){
                    paginationElement.childNodes[currentIndex].classList.add('selected');
                    paginationElement.childNodes[currentIndex+1].classList.remove('selected');
                }
                
            });
            _next.addEventListener('click', function(){ 
                if(activeSlide !== slider.length){
                    activeSlide++;
                    currentIndex++;
                }
                if(activeSlide === currentIndex+1){
                    paginationElement.childNodes[currentIndex].classList.add('selected');
                    paginationElement.childNodes[currentIndex-1].classList.remove('selected');
                }
            
            });
             
        }
        disableButton(1);
    }
    const slider = new Slider('.js--slider__prev','.js--slider__next','.js--list');
    const sliderPagination = new SliderPagination('.js--slider__prev','.js--slider__next','.js--slider_pagination');
    sliderPagination.__proto__ =  slider;
    console.log(sliderPagination);
});
