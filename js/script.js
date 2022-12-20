function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if(argMoveId == 1) {
      return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if(argMoveId == 3) {
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResault(argComputerMove, argPlayerMove){
    printMessage('Ruch Komputera to ' + argComputerMove + ', a Ty ' + argPlayerMove + '! ');
    console.log('moves:', argComputerMove, argPlayerMove)

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') { 
        printMessage('przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('wygrywasz!');
    } else if(argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('wygrywasz!');
    }

  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  /*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  */
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  /*
  if(playerInput == 1){
    playerMove = 'kamień';
  } else if (playerInput == 2){
    playerMove = 'papier';
  } else if (playerInput == 3){
    playerMove = 'nożyce';
  }
  */
  printMessage('Twój ruch to: ' + playerMove);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  } else if(randomNumber == 2){
    computerMove = 'papier';
  } else if(randomNumber == 3){
    computerMove = 'nożyce';
  }
  */
  printMessage('ruch komputera: ' + computerMove);
  displayResault(computerMove, playerMove);
  console.log(getMoveName('1'));

}

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});