const addform = document.querySelector(".add");
const tasks = document.querySelector(".tasks")
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");


function updateMessage(){
    const textLength = tasks.children.length;
    messageSpan.textContent = `you have ${textLength} pending tasks`;
}
updateMessage();

addform.addEventListener("submit", event =>{
    event.preventDefault(event);
    const value = addform.task.value.trim()

    if(value.length){

        
        tasks.innerHTML += `<li>
        <span>${value}</span>
        <i class="bi bi-trash-fill delete"></i>

    </li>`;
        addform.reset();
        updateMessage();

    }
})

tasks.addEventListener("click", event=>{

    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updateMessage();

    }
});


clearAll.addEventListener("click", event => {
    const taskItems=tasks.querySelectorAll("li");
    taskItems.forEach(item=>{
        item.remove();
    })
updateMessage();

});


