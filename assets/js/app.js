angular.module('koruk',[
	'ngRoute',
	'angular-gestures'
	]).config(['$routeProvider', '$locationProvider', '$httpProvider','hammerDefaultOptsProvider', function($routeProvider, $locationProvider, $httpProvider,hammerDefaultOptsProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

  		$routeProvider.when('/', {
			templateUrl: 'views/anasayfa.html?v20180328'
		}).when('/moda', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/xl-moda', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/yazilar', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/magazin', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/zor-begenen-adam', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/moda/:content', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/xl-moda/:content', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/yazilar/:content', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/magazin/:content', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/zor-begenen-adam/:content', {
			templateUrl: 'views/article.html?v20180328',
			controller:'articleController'
		}).when('/iletisim', {
			templateUrl: 'views/iletisim.html?v20180328'
		}).when('/404', {
			templateUrl: 'views/404.html'
		}).otherwise({redirectTo: '/404'});

		hammerDefaultOptsProvider.set({recognizers: [[Hammer.Swipe, {time: 250}]] });
	}])
	.controller('bodyController',[
		'$scope',
		'$location',
		'$rootScope',
		function($scope,$location,$rootScope){
			console.log('bodyController');
			$scope.gotoPage=function(url){
				$location.url(url);
			}
			$scope.toggleMenu=function(){
				if($scope.showMobileMenu) $scope.showMobileMenu=false;
				else $scope.showMobileMenu=true;
			}
			$rootScope.$on("$locationChangeStart", function(event, next, current) { 
		        $scope.showMobileMenu=false; 
		    });
		}
	]).controller('articleController',[
		'$scope',
		'$routeParams',
		'$location',
		function($scope,$routeParams,$location){
			console.log('articleController');
			$scope.gotoPage=function(url){
				$location.url(url);
			}
			var category=$location.$$path;
			var content=$routeParams.content;
			if($routeParams.content){
				$scope.includeThis='/views/articles/'+content+'.html';
			}else{
				$scope.includeThis='/views/articles'+category+'-list.html';
			}
			
		}
	]).controller('collectionController',[
		'$scope',
		function($scope){
			console.log('collectionController');
			$scope.itemList=[
				{'image':'/collection/item1.jpg','cost':'0,00 TL','text':'Dress Name'}
			];

			$scope.selectedItemIndex=0;
			$scope.selectedItem=$scope.itemList[$scope.selectedItemIndex];
			var leftmargin=400;
			if(window.innerWidth<768) leftmargin=75;

			$scope.galleryLeft=leftmargin;

			$scope.selectThis=function(index){
				$scope.selectedItemIndex=index;
				$scope.selectedItem=$scope.itemList[$scope.selectedItemIndex];;
				$scope.galleryLeft=-parseInt(index*200)+leftmargin;
			}

			

			$scope.swipeAction=function(event){
				switch(event.direction){
					case 2:
						if($scope.selectedItemIndex==$scope.itemList.length-1) return;
						$scope.selectThis($scope.selectedItemIndex+1);
						break;
					case 4:
						if($scope.selectedItemIndex==0) return;
						$scope.selectThis($scope.selectedItemIndex-1);
						break;
				}
			}
		}
	]);