/*require.config({
  map:{
    // Maps
  },
  baseUrl:'../js',
  paths:{
	  "jquery" : "../jquery/jquery-3.1.1.min.js",
      "bootstrap" :  "../bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min.js",
      "angular":"../angularJs/angularjs-1.1.5.jar",
      "app":"../js/app.js",
      "coreModule":"../js/coreModule.js"
  },

  shim:{
	  "bootstrap" : { "deps" :['jquery'] },
	  "coreModule":{ "deps" :['angular'] },
	  "app":{ "deps" :['angular','coreModule'] },
	  "angular":{ "deps" :['jquery'] }
  }
  
});
require(['app'],function(){
	  angular.bootstrap(document,['app']);
});*/


requirejs.config({
    paths: {
        "jquery": "../jquery/jquery-3.1.1.min",
        "bootstrap": "../bootstrap/bootstrap-3.3.7-dist/js/bootstrap.min",
         "angular":"../angularJs/angular/angular",
         "ngRoute":"../angularJs/angular.route",
         
    },
    shim: {
    	
        "angular": {
        	deps: ["jquery"],
            exports: "angular"

            },

         "ngRoute": {

            deps: ["angular"]

            },

        "bootstrap": {
            deps: ["jquery"]
        },
        "angular":{ "deps" :['jquery'] }
    }
});

require([
	'../js/coreModule'
]);