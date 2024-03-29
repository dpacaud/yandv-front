'use strict';
//var API_URL = "http://localhost:5000/"
var API_URL = "http://yandv-rest.herokuapp.com/"
/* Controllers */

angular.module('yandv.controllers', []).
  controller('MessageController', ['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {		
		$scope.addMessage = function (){	      	      
	      var payload = {
	      	"message" : $scope.message,
	      	"author"  : $scope.author
	      }
	      $http.post(API_URL + 'message',payload ).success(function(data,$timeout){	      	
	      	     alert("votre message a bien été envoyé");
	      	     $location.path("/");
	      }).error(function(data){
	      		alert("pb dans l'envoi du message");
	      });

	    }  	   	    	      
  }])
  .controller('HomeController', ['$scope','$http','$location',function($scope,$http,$location) {
        
    $http.get( API_URL + 'messages').success(function(data) {
      
      $scope.messages = data;
    });    
    
  }])
  .controller('ShowController', ['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    //console.log($routeParams.name)
    $http.get( API_URL + 'message/'+$routeParams.name).success(function(data) {
      //console.log(data);
      if(data.error != null) {
        $scope.message = {
          author : "Erreur !",
          message : "L'id spécifié n'existe pas ;)"

        }
      }
      else {
        $scope.message = data;  
      }
      
    }).error(function(data){    	
      alert("Une erreur est survenue, merci de réessayer");
    });     
  }]);


  
