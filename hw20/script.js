document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector(".input");
    
    document.querySelector(".submit").addEventListener("click",function(){
        let value = input.value;
        input.value = "";
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
        .then((response) => response.json())
        .then((json) => document.querySelector(".post").insertAdjacentHTML("afterbegin",json.body))
        .then(document.querySelector(".btn-comm").addEventListener("click",function(){
            fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
            .then((response) => response.json())
            .then((json) => {
                for( let i = 0; i < 5; i++){
                    document.querySelector(".post_comment").insertAdjacentHTML("afterbegin", json[i].body );
                }
                
            })
        }))
    });
    
})
// 



            