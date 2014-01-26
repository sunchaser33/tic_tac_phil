function boardCtrl ($scope) { // passes scope to boardCtrl which is controller
  $scope.boxes = ["","","","","","","","",""] // array info to use for board
  $scope.xTurn = 'x'; // sets first turn
  $scope.turnCounter = 1; // sets turn counter to 1
  $scope.takeTurn = function (i) { //defines takeTurn function and passes it i
    if ($scope.boxes[i] == "") { // checks if clicked box (i in array boxes) is ""
      $scope.boxes[i] = $scope.xTurn; // IF it is "" then clicked is xTurn ie 'x'
      if ($scope.boxes[i] == "x") { // checks to see if clicked cell is now 'x'
        $scope.xTurn = "o" // if clicked cell is NOT x sets it = to o
      } else {
        $scope.xTurn = "x" // else it sets clicked cell to x
      };
    } else {
      alert('Too late Bro; that square is TAKEN...') // Top IF -- This pops up if we try to click a box already clicked
    };
    if ($scope.turnCounter >= 5) {
      $scope.checkWin();
    };
    $scope.turnCounter++;
  };

var winnerMessage = function () {
    if ($scope.xTurn == 1) {
      $scope.winner = "Beatles Win!!! -- You Are The Walrus!!!";
    }
    else {
      $scope.winner = "Stones Win!!! -- Keef is impressed.";
    }
    }
  $scope.checkWin = function () {
    $scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    for (var i = 0; i < 8; i++) {
      if ($scope.boxes[$scope.winAry[i][0]] 
        == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] 
        == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
          $scope.xTurn = $scope.xTurn +1;
          winnerMessage();
          // $scope.winner = "We have a winner!";
          break; // What to add to stop being able to click boxes
        }
      else {
          // alert("im checking winAry position:  "+ i)
      };
    };

  
  }
};