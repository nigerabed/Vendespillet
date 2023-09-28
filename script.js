import data from "./data.json" assert { type: "json" };


function addItem(card) {
  let box = document.getElementById("card-box");

  let container = document.createElement("article");

  container.setAttribute("class", "container");
  box.appendChild(container);

  let div = document.createElement("div")
  div.setAttribute("class", "card") ;
  div.innerHTML = `
    <div class="front"></div> 
    <div class="back"> 
        <h3>${card.tag}</h3>
        <br>
        type: ${card.type} 
        <br>
        attributes:${card.attributes[(0, 1)]}
        description: ${card.description}
    </div> 
  `;
  container.appendChild(div)
  div.addEventListener("click", function handleClick(event){
    div.classList.toggle("flipped")
  })
}

for (let i = 0; i < 12; i++) {
  addItem(data[i]);
}



