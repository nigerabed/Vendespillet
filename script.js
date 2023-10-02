import data from "./data.json" assert { type: "json" };

//initialize emply placeholder

let selectCard1 = "";
let selectCard2 = "";


function addItem(card) {
  let box = document.getElementById("card-box");

  let container = document.createElement("article");

  container.setAttribute("class", "container");
  box.appendChild(container);

  let div = document.createElement("div");
  div.setAttribute("class", "card");
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
  container.appendChild(div);
  div.addEventListener("click", function handleClick(event) {
    div.classList.toggle("flipped");

    // assign or save card to the selectCard1 and selectCard2

    if(selectCard1 === ""){
      selectCard1 = card;
    }else if (selectCard2 === ""){
       selectCard2 = card;
    }
    console.log("select 1 = " ,selectCard1);
    console.log("select 2 = ", selectCard2);

  });
}


let dataCopy = data.slice(0, 12);
let dataShuffle = data.slice(0, 12);
shuffle(dataCopy);
shuffle(dataShuffle);

for (let i = 0; i < dataCopy.length; i++) {
  addItem(dataCopy[i]);
  addItem(dataShuffle[i]);
}

// to randomaize
function shuffle(array) {

    let currentIndex = array.length; //4
    let  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
  
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    
    currentIndex--;

    // And swap it with the current element.
    const temp = array[currentIndex];

    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}


