'use strict';

/**
 * @ngdoc function
 * @name demoAppAppApp.controller:SportstoreCtrl
 * @description
 * # SportstoreCtrl
 * Controller of the demoAppAppApp
 */
angular.module('demoAppApp')
  .controller('SportstoreCtrl', function ($scope) {

    $scope.data= {
    	products: [
    	{ name:"Racchetta", description:"prodotto tennis", category:"Tennis", price:55 },
    	{ name:"Palline", description:"prodotto tennis", category:"Tennis", price:54 },
    	{ name:"Rete", description:"prodotto tennis", category:"Tennis", price:100 },
    	{ name:"Pallone", description:"prodotto calcio", category:"Calcio", price:32 },
    	{ name:"Pesce Spada", description:"prodotto mare", category:"Mare", price:54 },
    	{ name:"Pesce Cane", description:"prodotto mare", category:"Mare", price:232 },
    	{ name:"Maiale", description:"prodotto terra", category:"Terra", price:54 },
    	{ name:"Cervo", description:"prodotto Terra", category:"Terra", price:76 },
    	{ name:"Vitello", description:"prodotto terra", category:"Terra", price:63 },
    	{ name:"Mucca", description:"prodotto terra", category:"Terra", price:43 },
    	{ name:"Scimmia", description:"prodotto terra", category:"Terra", price:25}]
    };


  });
