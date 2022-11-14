document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector(".input");
    
    document.querySelector(".submit").addEventListener("click",async function(event){
        event.preventDefault()
        let value = input.value;
        input.value = "";
        if(value > 0 && value <= 10){
            fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
            .then((response) => response.json())
            .then((json) => document.querySelector(".post").insertAdjacentHTML("afterbegin",`<br>`+ json.body + `<br>`))
            
        }
        document.querySelector(".btn-comm").addEventListener("click",await function(){
                fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
                .then((response) => response.json())
                .then((json) => {
                    for( let i = 0; i < 5; i++){
                        document.querySelector(".post_comment").insertAdjacentHTML("afterbegin",`<br>`+ json[i].body + `<br>`);
                    }
                })
            })
    });
})
// 



            