angular.module('koruk',[
	'ngRoute',
	'ngScrollbar'
	]).config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

  		$routeProvider.when('/', {
			templateUrl: 'views/anasayfa.html'
		}).when('/koleksiyon', {
			templateUrl: 'views/koleksiyon.html',
			controller:'collectionController'
		}).when('/iletisim', {
			templateUrl: 'views/iletisim.html'
		}).when('/404', {
			templateUrl: 'views/404.html'
		}).otherwise({redirectTo: '/404'});
	}])
	.controller('bodyController',[
		'$scope',
		'$location',
		function($scope,$location){
			console.log('bodyController');
			$scope.gotoPage=function(url){
				$location.url(url);
			}
		}
	]).controller('collectionController',[
		'$scope',
		function($scope){
			console.log('collectionController');
			$scope.itemList=[
				{'image':'/collection/item1.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item2.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item3.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item4.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item5.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item6.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item7.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item8.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item9.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item10.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item11.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item12.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item13.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item14.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item15.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item16.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item17.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item18.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item19.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item20.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item21.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item22.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item23.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item24.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item25.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item26.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item27.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item28.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item29.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item30.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item31.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item32.jpg','cost':'0,00 TL','text':'Dress Name'},
				{'image':'/collection/item33.jpg','cost':'0,00 TL','text':'Dress Name'}
			];

			$scope.selectedItem=$scope.itemList[0];
			$scope.galleryLeft=400;

			$scope.selectThis=function(item,index){
				$scope.selectedItem=item;
				$scope.galleryLeft=-parseInt(index*200)+400;
			}
		}
	]);