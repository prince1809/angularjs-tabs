var app = angular.module('chromeTabsApp',['ui.bootstrap']);

app.controller('AppCtrl',['$scope', function($scope){


  // Tab Counter
  var counter = 1;

  $scope.tabs = [];

  // add tab to the end of the array
  var addTab = function(){
    $scope.tab.push({ title: 'Tab' + counter, content: 'Tab' + counter });
    counter++;
    $scope.tabs[$scope.tabs.length -1 ].active = true;
  };

  // Remove the tab by index

  var removeTab = function(event,index){
    event.preventDefault();
    event.stopPropagation();
    $scope.tabs.splice(index, 1);
  };

  //Initialize the scope functions
  $scope.addTab = addTab;
  $scope.removeTab = removeTab;

  // For demonstration
  for (var i = 0; i < 10; i++) {
    addTab();
  }

}])
.directive('tabHighLight', [function () {

  return {
    restrict: 'A',
    link: function (scope, element){

      var x, y, initial_background = '#c3d5e6';

      element
         .removeAttr('style')
         .mousemove(function (e) {
           if(!element.hasClass('active')){
             x = e.pageX - this.offsetLeft;
             y = e.pageY - this.offsetTop;

             element
                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
            }
         })

    }
  };

}]);
