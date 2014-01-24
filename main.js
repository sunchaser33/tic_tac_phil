function boardCtrl ($scope) {
  $scope.boxes = ["","","","","","","","",""] // array to use for bo
  $scope.xTurn = 'v'; // sets first turn
  $scope.turnCounter = 1;
  $scope.takeTurn = function (i) {
    if ($scope.boxes[i] == "") { // checks if clicked boxe is ""
      $scope.boxes[i] = $scope.xTurn; // IF it is "" then clicked is xTurn ie 'v'
      if ($scope.boxes[i] == "v") { // 
        $scope.xTurn = "z" //this z can be anything
      } else {
        $scope.xTurn = "v" // if this x is changed first move is x then doesnt alternate
      };
    } else {
      alert('jackass!') // Top IF -- This pops up if we try to click a box already clicked
    };
    if ($scope.turnCounter >= 5) {
      $scope.checkWin();
    };
    $scope.turnCounter++;
  };
  $scope.checkWin = function () {
    $scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    for (var i = 0; i < 8; i++) {
      if ($scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][1]] && $scope.boxes[$scope.winAry[i][0]] == $scope.boxes[$scope.winAry[i][2]] && $scope.boxes[$scope.winAry[i][0]] !== "") {
          $scope.winner = "Winner!";
          break; // What to add to stop being able to click boxes
        }
      else {
          // alert("im checking winAry position:  "+ i)
      };
    };
  }
};