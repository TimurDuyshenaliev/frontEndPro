document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector(".input");
    
    document.querySelector(".submit").addEventListener("click",async function(event){
        event.preventDefault()
        let value = input.value;
        input.value = "";
        if(value > 0 && value <= 100){
            let responcePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`);
            let json = await responcePost.json();
            if(json.body){
                document.querySelector(".post").insertAdjacentHTML("afterbegin",`<br>`+ json.body + `<br>`);
                document.querySelector(".btn-comm").addEventListener("click",async function(){
                    let responceComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
                    let json = await responceComment.json()
                    for( let i = 0; i < 5; i++){
                        document.querySelector(".post_comment").insertAdjacentHTML("afterbegin",`<br>`+ json[i].body + `<br>`);
                    }
                })
            }        
        } else {
            document.location.reload();
        }
    });
})