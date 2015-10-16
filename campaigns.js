(function(){
  var app = angular.module('government-campaigns', []);
  app.directive('campaignTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'campaign-title.html'
    };
  });
  app.directive('campaignPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'campaign-panels.html',
      controller: function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
})();
