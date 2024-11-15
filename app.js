const changeButton = document.querySelector(".change-button");
const input = document.querySelector(".input");
const clearButton = document.querySelector(".icon");
const plusButton = document.querySelector(".btn-1");
const addButton = document.querySelector(".btn-2");
const list = document.querySelector(".list");

let itemCounter = 1;

plusButton.addEventListener("click", ()=>{
    let inputValue = input.value;

    if(inputValue !== ''){
        const listElement = document.createElement("li");
        listElement.classList.add('li'); 
        listElement.textContent = `${itemCounter}. ${inputValue}`;
        list.appendChild(listElement);
        itemCounter++; 
        input.value = '';

        
    }
    
})

