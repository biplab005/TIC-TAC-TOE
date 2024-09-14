let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let para=document.querySelector("#msg");
let first_player = 'O';
let second_player = 'X';
let player_turn = first_player;

const winner_pattern = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '4', '8'],
  ['2', '4', '6']
];

// Convert boxes NodeList to an array and loop through it
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    console.log("button clicked");

    // Set text based on the current player's turn
    if (player_turn === first_player) {
      box.innerText = first_player;
      player_turn = second_player;
    } else {
      box.innerText = second_player;
      player_turn = first_player;
    }

    // Disable the box once clicked
    box.disabled = true;

    checkwinner();
    // Optionally, you can add your logic here to check for a winner
  });
});
const resetBoxes=()=>
{
  player_turn=first_player;
  enableboxes();
  msgcontainer.classList.add("hide");

}
const disableboxes=()=>
{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText='';
  }
}
const showwinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`
  msgcontainer.classList.remove("hide ");
}
const checkwinner=()=>{
  for (pattern of winner_pattern  ){
    console.log(pattern);
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("winner",pos1);
        showwinner(pos1);
        disableboxes();
        return true;
    }
  }
 }
};
newbtn.addEventListener("click",resetBoxes);
reset.addEventListener("click",resetBoxes);
