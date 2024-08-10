const item = document.querySelector(".text");
const to_do=document.querySelector(".to-do-box");
item.addEventListener("keyup",
        function(e){
           if(e.key == "Enter"){
            addtodo(this.value);
            this.value ="";
           }
        }
)

const addtodo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = ` ${item}  <i class="fas fa-times"></i> `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click", 
        function(){
            listItem.remove();
        }
    )
    to_do.appendChild(listItem);
}

