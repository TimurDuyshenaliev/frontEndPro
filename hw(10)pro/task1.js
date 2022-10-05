const link = document.getElementById('btn-link');
const visit = document.getElementById('btn-visit');
let getLink = function(event){
    site = prompt('Напиши ссылку для перехода');
    let linkTo = function(event){
        location = site;
    }
    visit.addEventListener('click', linkTo);
}
link.addEventListener('click', getLink);
