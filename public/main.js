'user strict';


var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
 $scope.editShow = false;
 var currentBalance;
 var index;

 var balance = 0;
 var debits = 0;

 $scope.balances =
  [{
    date: "2000-01-12",
    desc: "lunch",
    debits:  "20",
    credits: "0"
  },
  {
    date: "2011-11-12",
    desc: "payday",
    debits: "0",
    credits: "500"
  }];

$scope.getBalance = function() {
  return balance;
}

$scope.getDebit = function() {
  return debits;
}

$scope.addBalance = function() {
  $scope.balances.push($scope.newBalance);
  $scope.newBalance = {};

  balance = 0; debits = 0;
  for (var i=0; i < $scope.balances.length; i++ ) {
        debits = debits + parseInt($scope.balances[i].debits);
        balance = balance + parseInt($scope.balances[i].credits);
  }
};

$scope.removeBalance = function(balance) {
  if (confirm ('Are you sure Delete?') ) {
    var index = $scope.balances.indexOf(balance);

    $scope.balances.splice(index, 1);

    debits = 0, balance = 0;
    for (var i=0; i < $scope.balances.length; i++ ) {
          debits = debits + parseInt($scope.balances[i].debits);
          balance = balance + parseInt($scope.balances[i].credits);
    }
  }
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

  if (confirm ('Are you sure edit?') ) {
    var obj = {
      date: new Date().toISOString().slice(0,10),
      desc: editDescription,
      debits: editDebits,
      credits: editCredits
    }
    $scope.balances[currentIndex] = obj;

    debits = 0, balance = 0;
    for (var i=0; i < $scope.balances.length; i++ ) {
          debits = debits + parseInt($scope.balances[i].debits);
          balance = balance + parseInt($scope.balances[i].credits);
    }
  }
}

$scope.cancelEdit = function() {

    // todo code for deletion
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
