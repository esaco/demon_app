angular.module("customfilters", []).filter("unique", function(){

return function(data, propertyName){

if(angular.isArray(data) && angular.isString(propertyName)){
 
   
	var results= [];
	var keys={}
	for(var i=0;i<data.length; i++){
		var val=data[i][propertyName];
		p


	}
}


}




});