function UserTable({ _content, _form, _addButton, _userInfo, _localStorageKeyName }) {
    this.init = function () {
        this.onSubmit();
        this.onAddButton();
        this.loadUser();
    }
    this.onSubmit = function () {
        _form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (_form.elements['id'].value) {
                this.updateUser({
                    name: _form.elements['name'].value,
                    age: _form.elements['age'].value,
                    phone: _form.elements['phone'].value,
                    id: _form.elements['id'].value,
                })
            } else {
                this.addUser({
                    name: _form.elements['name'].value,
                    age: _form.elements['age'].value,
                    phone: _form.elements['phone'].value,
                    id: Math.floor(Math.random() * 100),
                });
            }
            _form.reset();
            _form.classList.remove('open');
        });
    }   
    this.addUser = function (user) {
        this.userTemplate(user);
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName)) || [];
        users.push(user);
        localStorage.setItem(_localStorageKeyName, JSON.stringify(users))
    }
    this.deleteUser = function (user) {
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName));
        const delUsers = users.filter((el) => el.id != user.id);
        localStorage.setItem(_localStorageKeyName, JSON.stringify(delUsers));
    }
    
    this.updateUser = function (user) {
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName));
        const newUsers = users.map(function (item) {
            if (+item.id === +user.id) {
                return user;
            }
            return item;
        });
        _content.innerHTML = '';
        newUsers.forEach(user => this.userTemplate(user));
        localStorage.setItem(_localStorageKeyName, JSON.stringify(newUsers));
    }
    this.userTemplate = function (user) {
        _content.insertAdjacentHTML('beforeend', (
            `<tr data-id="${user.id}">`+
                `<td>${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td>`+
                    '<button type="button" class="btn btn-primary js--view">View</button>'+
                    ' <button type="button" class="btn btn-primary js--del">Del</button>'+
                    ' <button type="button" class="btn btn-primary js--edit">Edit</button>'+
                `</td>`+
            `</tr>`
        ))
        const _currentTr = document.querySelector(`[data-id="${user.id}"]`);
        const viewButton = _currentTr.querySelector('.js--view');
        const handleView = () => {
            _userInfo.innerHTML = JSON.stringify(user, undefined, 2);
        }
        viewButton.addEventListener('click', handleView);

        const deleteButton = _currentTr.querySelector('.js--del');
        const handleDel = () =>{
            _currentTr.classList.add('remove');
            this.deleteUser(user);
        }
        deleteButton.addEventListener('click', handleDel);

        const editButton = _currentTr.querySelector('.js--edit');
        const handleEdit = () => {
            _form.reset();
            _form.classList.add('open');
            _form.elements['id'].value = user.id;
            _form.elements['name'].value = user.name;
            _form.elements['phone'].value = user.phone;
            _form.elements['age'].value = user.age;
        }
        editButton.addEventListener('click', handleEdit);
    }
    this.onAddButton = function () {
        _addButton.addEventListener('click', function () {
            _form.classList.add('open');
        })
    }
    this.loadUser = function () {
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName));
        if (users) {
            users.forEach(userItem => this.userTemplate(userItem))
        }
    }
}

const userDate = new UserTable({
    _localStorageKeyName: 'users',
    _content: document.querySelector('.js--content'),
    _form: document.querySelector('.js--form'),
    _addButton: document.querySelector('.js--add'),
    _userInfo: document.querySelector('.js--user'),
});

document.addEventListener('DOMContentLoaded', function () {
    userDate.init();
});
