import generatejoke from "../src/generateJoke";
import './style/main.scss';

// import laughing from './assets/laughing.svg'

// const laughImg = document.querySelector('#laughImg')
// laughImg.src = laughing;
// console.log(laughImg);

const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click',generatejoke)

generatejoke();















