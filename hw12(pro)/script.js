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
        
        function disableButton(){
            let activeItem = 1;
            _prev.addEventListener('click', function(){
                activeItem--;
                if(activeItem == 1){
                    _prev.classList.add('.disable')
                }
            })
            _next.addEventListener('click', function(){
                activeItem++;
                if(activeItem == this.length -1){
                    _prev.classList.add('.disable')
                }
            })
            console.log(activeItem);
        }
        disableButton();
        



        return console.log(this);

    }
    const slider = new Slider('.js--slider__prev','.js--slider__next','.js--list');

    document.querySelector('.js--slider__next').addEventListener('click', function () {
        const activeItem = document.querySelector('.js--list').querySelector('.active');
        slider.changeItem({
            _newElement: activeItem.nextElementSibling,
            active: activeItem,
        });
    });

    document.querySelector('.js--slider__prev').addEventListener('click', function () {
        const activeItem = document.querySelector('.js--list').querySelector('.active');
        slider.changeItem({
            active: activeItem,
            _newElement: activeItem.previousElementSibling
        });
    })
})  