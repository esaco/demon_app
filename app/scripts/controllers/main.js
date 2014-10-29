'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAppApp
 */
var model= {
    user:"Utente"
};



//creazione filtro
angular.module('demoAppApp').filter("checkedItems", function(){

return function(items, showComplete){
	var resultArr=[];
	angular.forEach(items, function(item){

		if(item.done==false || showComplete==true){
		 resultArr.push(item);
		 		}
	});
    return resultArr;
}

});


//chiamata ajax a file json
angular.module('demoAppApp').run(function($http){
 $http.get("/data/data.json").success(function(data){
    model.items=data;
 }).error(function(data){
    console.log("errore chiamata ajax/json");
 });
 

});


angular.module('demoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todo=model;

    //funzione che conta le cose rimanenti da fare 
    $scope.incompleteCount=function(){
    
    var count=0;

    angular.forEach($scope.todo.items, function(item){
    
    if(!item.done)
    {
    	count++
    }
    });
    return count;
    }

    //funzione che implementa una soglia di guardia colora di verde se sotto 3 altrimenti di giallo la span
    $scope.warningLevel=function(){
    	return $scope.incompleteCount()< 3 ? "label-success" : "label-warning";
    }

    //funzione che aggiunge nuovo item al model

    $scope.addNewItem=function(newText){
      $scope.todo.items.push({action: newText, done:false});
    }


  });
