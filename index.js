let btnClick = document.querySelector('button');
let counter = document.querySelector('h1');

let count = 0;

btnClick.addEventListener('click', () => {
myFunction2(myFunction1);
});

function myFunction1(){
    return count++;
}

function myFunction2(paramFunc){
    counter.innerText = paramFunc();
}