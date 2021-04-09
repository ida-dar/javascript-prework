{
    function playGame(playerInput) {
        console.log(`Funkcja playGame z argumentem playerInput: ${playerInput}`);

        clearMessages();

        const getMoveName = function(argMoveId) {
            if(argMoveId == 1) {
                return "kamień";
            } else if(argMoveId == 2) {
                return "papier";
            } else if(argMoveId == 3) {
                return "nożyce";
            } else {
                printMessage("Nie znam ruchu o id: " + argMoveId);
                return "nieznany ruch";
            }
        }


        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log("Wylosowana liczba to: " + randomNumber);


        const computerMove = getMoveName(randomNumber);


        console.log("Gracz wpisał: " + playerInput);

        const playerMove = getMoveName(playerInput);


        const displayResult = function(argComputerMove, argPlayerMove) {
            console.log(`Funkcja displayResult: argComputerMove: ${argComputerMove}, argPlayerMove: ${argPlayerMove}`);
            if(argComputerMove == "kamień" && argPlayerMove == "papier") {
                printMessage("Ty wygrywasz!");

            } else if(argComputerMove == "papier" && argPlayerMove == "nożyce") {
                printMessage("Ty wygrywasz!");

            } else if(argComputerMove == "nożyce" && argPlayerMove == "kamień") {
                printMessage("Ty wygrywasz!");

            } else if(argComputerMove == argPlayerMove) {
                printMessage("Remis!");

            } else if(argPlayerMove == "nieznany ruch") {
                printMessage("Wpisano niepoprawną wartość");

            } else {
                printMessage("Przegrałeś");
            }
        }

        printMessage("Mój ruch: " + computerMove + "<br>" + "Twój ruch: " + playerMove + "<br>");

        displayResult(computerMove, playerMove);

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
}