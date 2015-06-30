var myApp = angular.module("myApp",[]);

// controller
myApp.controller("HelloController", function($scope){
  // model
  $scope.explain = "AngularはフロントサイドMVCフレームワークです。";
  $scope.word = "Hello World";
  $scope.action = function(){
    window.open();
  };
});

// controller
myApp.controller("ByeByeController", function($scope){
  $scope.explain = "コントローラはスコープ内のモデルを参照します。";
  var cur = 0;
  var text = [];
  text[0] ="Bye Bye";
  text[1] ="Thank you";
  
  $scope.word = text[cur];
  $scope.action = function(){
    cur = 1-cur;
    $scope.word = text[cur];
  };
});

// controller
myApp.controller("RepeatController", function($scope){
  // model
  $scope.explain = "ビューとモデルは自動的に双方向で値をバインドします。";
  $scope.word = "";
  $scope.action = function(){
    alert($scope.word);
  };
});
