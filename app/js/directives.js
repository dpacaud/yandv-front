'use strict';

/* Directives */


angular.module('yandv.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  angular.module('yandv.directives', []).
  directive('chart', function(){
  	return {
  		restrict: 'A',
        link: function(scope , elem, attrs) {     
			
           	var chart = null,
                opts  = { 
                	points : {show:false},
                	lines : {show : true},
                	grid: {
                	show:true,
                	hoverable:true
                }};                   
            scope.$watch(attrs.ngModel, function(v){
                if(!chart){        
                    chart = $.plot(elem, v , opts);
                    elem.show();
                }else{                	
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
  	}
  });
