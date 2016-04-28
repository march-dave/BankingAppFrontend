'user strict';


var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
 $scope.editShow = false;
 var currentBalance;
 var index;
$scope.balances =
  [{
    date: "2000-01-12",
    desc: "lunch",
    debits:  "$20",
    credits: ""
  },
  {
    date: "2011-11-12",
    desc: "payday",
    debits: "",
    credits: "$500"
  }];

$scope.addBalance = function() {
  $scope.balances.push($scope.newBalance);
  $scope.newBalance = {};
};

$scope.removeBalance = function(balance) {
  var index = $scope.balances.indexOf(balance);

  $scope.balances.splice(index, 1);
};

$scope.sortBy  = function(order) {
  if($scope.sortOrder === order) {
    $scope.sortOrder = `-${order}`;
  } else if ($scope.sortOrder === `-${order}`) {
    $scope.sortOrder = '';
  } else {
    $scope.sortOrder = order;
  }
};

$scope.saveEdit = function(editDescription, editDebits, editCredits) {
  var obj = {
    date: Date.now(),
    desc: editDescription,
    debits: editDebits,
    credits: editCredits
  }
  $scope.balances[currentIndex] = obj;
}

$scope.cancelEdit = function() {
  $scope.newBalanceToEdit = null;
  $scope.editShow = false;
}

$scope.showEditBalance = function(balance, index) {
  $scope.editShow = true;
  currentBalance = balance;
  currentIndex = index;

  $scope.editDescription = balance.desc;
  $scope.editDebits = balance.debits;
  $scope.editCredits = balance.credits;
}

});
