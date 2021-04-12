{   
    let counterPlayerWin = 0;
    let counterComputerWin = 0;


    const playGame = function(playerInput) {
        console.log(`Funkcja playGame z argumentem playerInput: ${playerInput}`);

        clearMessages();

        const getMoveName = function(argMoveId) {
            if(argMoveId === 1) {
                return "kamień";
            } else if(argMoveId === 2) {
                return "papier";
            } else if(argMoveId === 3) {
                return "nożyce";
            } else {
                printMessage(`Nie znam ruchu o id: ${argMoveId}`);
                return "nieznany ruch";
            }
        }


        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log(`Wylosowana liczba to: ${randomNumber}`);


        const computerMove = getMoveName(randomNumber);


        console.log(`Gracz wpisał: ${playerInput}`);

        const playerMove = getMoveName(playerInput);


        const displayResult = function(argComputerMove, argPlayerMove) {
            console.log(`Funkcja displayResult: argComputerMove: ${argComputerMove}, argPlayerMove: ${argPlayerMove}`);
            if(
                (argComputerMove === "kamień" && argPlayerMove === "papier") ||
                (argComputerMove === "papier" && argPlayerMove === "nożyce") ||
                (argComputerMove === "papier" && argPlayerMove === "kamień")
            ) {
                printMessage("<span class='win'>Wygrywasz!</span>");
                counterPlayerWin = counterPlayerWin + 1;

            } else if(argComputerMove === argPlayerMove) {
                printMessage("<span class='draw'>Remis!</span>");

            } else if(argPlayerMove == "nieznany ruch") {
                printMessage("Wpisano niepoprawną wartość");

            } else {
                printMessage("<span class='lost'>Przegrywasz</span>");
                counterComputerWin = counterComputerWin + 1;
            }
        }

        printMessage(`Mój ruch: ${computerMove} <br> Twój ruch: ${playerMove} <br>`);

        displayResult(computerMove, playerMove);

        printMessage(`<span class="player_score">Twój wynik: ${counterPlayerWin}</span> | <span class="comp_score">Wynik komputera: ${counterComputerWin}</span>`);
    }
    

    const buttonRock = document.getElementById('play-rock');
    const buttonPaper = document.getElementById('play-paper');
    const buttonScissors = document.getElementById('play-scissors');

    buttonRock.addEventListener('click', function() {
        playGame(1);
    });
    buttonPaper.addEventListener('click', function() {
        playGame(2);
    });
    buttonScissors.addEventListener('click', function() {
        playGame(3);
    });
}