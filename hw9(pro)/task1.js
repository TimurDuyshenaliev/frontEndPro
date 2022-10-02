const btn = document.getElementById('btn');
let color = function (event){
    const block = document.getElementById('text');
    
    if(block.style.color){
        block.style.color = '';
    }
    else block.style.color = 'blue';
}
btn.addEventListener('click', color)    
