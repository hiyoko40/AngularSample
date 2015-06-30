var myApp = angular.module("myApp",[]);

// controller
myApp.controller("HelloController", function($scope){
  // model
  $scope.explain = "Event handling1";
  $scope.word = "Hello World";
  $scope.action = function(){
    window.open();
  };
});

// controller
myApp.controller("ByeByeController", function($scope){
  $scope.explain = "Event handling2";
  var cur = 0;
  var text = [];
  text[0] ="Hey!";
  text[1] ="World!";
  
  $scope.word = text[cur];
  $scope.action = function(){
    cur = 1-cur;
    $scope.word = text[cur];
  };
});

// controller
myApp.controller("RepeatController", function($scope){
  // model
  $scope.explain = "Data Binding";
  $scope.word = "";
  $scope.action = function(){
    alert($scope.word);
  };
});
