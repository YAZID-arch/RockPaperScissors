const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput ==="rock" || userInput ==="paper" || userInput === "scissors" ){
    return userInput 
    } else {
      console.log("Invalid input! Choose rock paper or scissors!!!") 
    }
}
// console.log(getUserChoice("rock")) : to make sure that the function works
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3)
  switch(randomNumber){
    case 0 :
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
// console.log(getComputerChoice())
const determineWinner = (userChoice,computerChoice) => {
  if(userChoice === computerChoice){
    return "Try again ! It's a draw."
  }
  if(userChoice === "rock"){
    if (computerChoice === "paper"){
      return 'Computer won'}
      else{
        return 'User won'
      }
      }
  if(userChoice === "paper"){
    if (computerChoice === "scissors"){
      return "Computer won"
    } else {
      return "User win"
    }
     }
  if (userChoice === "scissors") {
    if(computerChoice === "rock"){
      return "Computer won"
    } else {
      return "User wins"
    }
  }
  };
  const playGame = () =>{
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log("You threw : " + userChoice );
    console.log("Computer threw : " + computerChoice );
    console.log(determineWinner(userChoice,computerChoice))
  };
playGame();














