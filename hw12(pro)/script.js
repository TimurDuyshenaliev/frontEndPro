document.addEventListener('DOMContentLoaded',function(){
    function Slider(prev, next, list){
        this._prev = document.querySelector(prev);
        this._next = document.querySelector(next);
        this._list = document.querySelector(list);
        this.length = this._list.getElementsByTagName('li').length;
        this.changeItem = function ({ active, _newElement }) {
            if (_newElement) {
                active.classList.remove('active');
                _newElement.classList.add('active');
            }
            else if(this.length == 1){
                this._prev.classList.add('slider__prev-disable');
                
            }
            else if(this.length -1){
                this._next.classList.add('slider__next-disable');            
            }
        };
        return console.log(this);
    }
    const slider = new Slider('.js--slider__prev','.js--slider__next','.js--list');

    slider._next.addEventListener('click', function () {
        const activeItem = slider._list.querySelector('.active');
        slider.changeItem({
            _newElement: activeItem.nextElementSibling,
            active: activeItem,
        });
    });

    slider._prev.addEventListener('click', function () {
        const activeItem = slider._list.querySelector('.active');
        slider.changeItem({
            active: activeItem,
            _newElement: activeItem.previousElementSibling
        });
    })
})