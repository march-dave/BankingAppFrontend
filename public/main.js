'user strict';


var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {

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








});
