document.addEventListener('DOMContentLoaded',function(){
    function Tasks(input, todosWrapper){
        this.input = document.querySelector(input);
        this.todosWrapper = document.querySelector(todosWrapper);
        this.completeName = 'js--complete';
        this.deleteName = 'js--delete';
        this.addItem = (event) =>{
            event.preventDefault();
            const value = this.input.value;
            this.input.value = '';
            const item = this.createTamplate(value);
            this.todosWrapper.insertAdjacentHTML('beforeend', item);
            document.querySelectorAll(`.${this.completeName}`).forEach(checkoxItem =>{
                checkoxItem.addEventListener('click', this.complete);
            });
            document.querySelectorAll(`.${this.deleteName}`).forEach(btn =>{
                btn.addEventListener('click', this.delete);
            })
        };
        this.complete = function(){
            this.parentNode.classList.toggle('todo-item__desc-line');
        }
        this.delete = function(){
            this.parentNode.classList.toggle('todo-item-delete');
        }
        this.createTamplate = (description) =>{
            return(
                `<label class="todo-item">
                    <input type="checkbox" class="${this.completeName}">
                    <div class="todo-item__desc">${description}</div>
                    <button class="todo-item__delete ${this.deleteName}">Delete</button>
                </label>
                `
            );
        }
    }
    const task = new Tasks('.js--form__input','.js--todo-wrapper')

    document.querySelector('.js--form').addEventListener('submit', task.addItem);
})