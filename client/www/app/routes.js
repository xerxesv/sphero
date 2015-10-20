var router = angular.module('sphero.routes', []);

// router.config(['$httpProvider', function($httpProvider) {
//     $httpProvider.interceptors.push('middlewareAPI');
//     $httpProvider.defaults.withCredentials = true;
// }]);


router.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      
    .state('nav', {
      url: '/nav',
      templateUrl: '../nav/nav.html',
      controller: 'navController'
    })
    .state('launch', {
      url: '/launch',
      templateUrl: '../launch/launch.html',
      controller: 'launchController'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/nav');

});


// router.factory('middlewareAPI', function() {
//     return {
//         request: function(config) {
//             var url = config.url.url;
//             console.log(url);
//             if(url){
//               var pathArray = url.split('/');
//               var firstPath = pathArray[1];
//               if ((firstPath === 'spheroAPI') || (firstPath === 'auth') || (firstPath === 'player')){
//                 config.url.url = 'http://localhost:8080' + config.url.url;
//               }
//             }
//             return config;
//         }
//     };
// });

// .factory('AttachTokens', function ($window) {
//   //this factory stops all outgoing requests, then looks in local storage
//   //for the user's JWT and adds the token to the request header
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('sphero').token;
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// });
// //.run(function($rootScope, $location, $state, Auth, Player){

// //});