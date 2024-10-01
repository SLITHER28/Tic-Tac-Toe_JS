let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


let turnO  = false;  //playerX, playerO 
let count = 0;

//2-D Arrays.
const winPatterns = [

  [0, 1, 2],
  [0, 5, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],

];


const resetGame = () => {

  turnO = false;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;

};


boxes.forEach((box) => {
   
  box.addEventListener("click", () => {

    console.log("Box was Clicked");
    
    if(turnO) {

      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
      count++;
    }

    else {

      box.innerText = "X";
      box.style.color = "deeppink";
      turnO = true;
      count++;
    }

    box.disabled = true;
    checkWinner();

  });

});

const disableBoxes = () => {

  for(let box of boxes) {

    box.disabled = true;
  };
};


const enableBoxes = () => {

  for(let box of boxes) {

    box.disabled = false;
    box.innerText = "";
  };
};

const showWinner = (winner) => {

  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes()
  
};

const checkWinner = () => {

  for(let pattern of winPatterns) {

  let pos1Val = boxes[pattern[0]].innerText;
  let pos2Val = boxes[pattern[1]].innerText;
  let pos3Val = boxes[pattern[2]].innerText;

  if(pos1Val != "" && pos2Val != "" && pos3Val != "") {

    if (pos1Val === pos2Val && pos2Val === pos3Val) {

      console.log("Winner", pos1Val);
      showWinner(pos1Val);
      
      }
    } 
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


// console.log(pattern[0], pattern[1], pattern[2]);
// console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
// console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
// };