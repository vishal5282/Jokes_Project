
const Jokes = document.querySelector('#jokes');
const JokesBtn = document.querySelector('#jokes_btn');


const generateJoke = () =>{

    const setHeader = 
    {
        headers:{
            Accept:"application/json"
        }
    }
fetch('https://icanhazdadjoke.com',setHeader)
.then((res) => res.json()).then((data) =>{
    Jokes.innerHTML=data.joke;
})
.catch((error) =>{
    console.log(error);
})

};

JokesBtn.addEventListener('click',generateJoke);
