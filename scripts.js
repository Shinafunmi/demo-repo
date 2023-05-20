const myTitle = document.querySelector('#title');
let myValue = 0

const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');
console.log(title, decrement, increment, reset);


btnIncrement.addEventListener("click", () => {
    // myValue = myValue + 1
    // myValue += 1,
    // myValue ++;
    myTitle.textContent = myValue;
    if (myValue <= 19) {
        myValue ++;
        myValue.style.color = "green"
        myTitle.textContent = myValue
    }else if (myValue == 20) {
        myTitle.textContent = `stop`
        myTitle.style.color = "green"
    }
    if (myValue > 0) {
        myValue.style.color = "green"
    }
    
    
});

btnDecrement.addEventListener("click", () => {
    myValue--;
    myTitle.textContent = myValue;
});

btnReset.addEventListener("click", () => {
    myValue = 0;
    myTitle.textContent = myValue
});
