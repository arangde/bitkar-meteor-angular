/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as Socially } from '../imports/ui/components/socially/socially';

//
// var app = angular.module(Socially, [
//     /*'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial'*/
// ]);
// /**
//  * Controls the Page
//  */
// app.controller('PageCtrl', function (/* $scope, $location, $http */) {
//     console.log("Page Controller reporting for duty.");
// });
//
// /**
//  * Controls the Home
//  */
// app.controller('HomeCtrl', function ($scope, $interval) {
//
//     var duration = 1600, steps = 3, step = 1;
//
//     $scope.customAttributeValue = step;
//
//     var start = $interval(function () {
//         if ($scope.customAttributeValue < steps) {
//             $scope.customAttributeValue += step;
//         }
//         else {
//             $scope.customAttributeValue = step;
//         }
//     }, duration);
//
// });
//
// /*Controller Porfolio and filter Images*/
// app.controller("dataImagesWork", function ($scope) {
//     $scope.images_work = [
//         { num: 1, code: 'APL', category: 'mac', name: 'Nature Pro', src: "1.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 2, code: 'AVC', category: 'ipad', name: 'Boat NC', src: "2.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 3, code: 'BAN', category: 'phone', name: 'Creative', src: "3.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 4, code: 'CTP', category: 'mac', name: 'Room Pro', src: "4.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 5, code: 'FIG', category: 'ipad', name: 'Office Airs', src: "5.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 6, code: 'FIG', category: 'sound', name: 'Dancing', src: "6.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. '}];
//
// });
//
// app.controller("dataImagesWork2", function ($scope) {
//     $scope.images_work = [
//         { num: 1,  category: 'mac', name: 'Nature Pro', src: "8.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 2,  category: 'ipad', name: 'Boat NC', src: "10.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 3,  category: 'phone', name: 'Creative', src: "11.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 4,  category: 'mac', name: 'Room Pro', src: "5.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 5,  category: 'ipad', name: 'Office Airs', src: "4.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 6,  category: 'sound', name: 'Dancing', src: "6.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 7,  category: 'sound', name: 'Dancing', src: "12.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ' },
//         { num: 8,  category: 'sound', name: 'Dancing', src: "9.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. '}];
//
// });
//
// //tabs management
// app.controller('TabsDemoCtrl', function ($scope, $window) {
//     $scope.tabs = [
//         { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
//         { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
//     ];
//
//     $scope.alertMe = function () {
//         setTimeout(function () {
//             $window.alert('You\'ve selected the alert tab!');
//         });
//     };
// });
//
// app.controller('AccordionDemoCtrl', function ($scope) {
//     $scope.oneAtATime = true;
//
//     $scope.isopen = {
//         first: true,
//         second: true,
//         three: true,
//         four: true,
//         five: true,
//         six: true,
//         seven: true
//     }
//     $scope.icon = {
//         "false": 'fa fa-plus',
//         "true": 'fa fa-minus'
//     }
//
//     $scope.status = {
//         isFirstOpen: true,
//         isFirstDisabled: false
//     };
// });
//
// //Carousel general management
// app.directive('owlcarousel', function () {
//
//     var linker = function (scope, element, attr) {
//         link: (scope, element, attr)
//         $(element).owlCarousel({
//             navigation: false,
//             slideSpeed: 300,
//             paginationSpeed: 400,
//             singleItem: true,
//             autoPlay: true
//             // "singleItem:true" is a shortcut for:
//             // items : 1,
//             // itemsDesktop : false,
//             // itemsDesktopSmall : false,
//             // itemsTablet: false,
//             // itemsMobile : false
//         });
//
//     }
//
//     return {
//         restrict: "A",
//         link: linker
//     }
//
// });
//
// //Carousel store management
// app.directive('carouselprod', function () {
//
//     var linker = function (scope, element, attr) {
//         link: (scope, element, attr)
//         $(element).owlCarousel({
//             navigation: false,
//             slideSpeed: 300,
//             paginationSpeed: 400,
//             autoPlay: true,
//             items : 4
//             // itemsDesktop : false,
//             // itemsDesktopSmall : false,
//             // itemsTablet: false,
//             // itemsMobile : false
//         });
//
//     }
//
//     return {
//         restrict: "A",
//         link: linker
//     }
//
// });
//
// // create a data service that provides a store and a shopping cart that
// // will be shared by all views (instead of creating fresh ones for each view).
// app.factory("DataService", function () {
//
//     // create store
//     var myStore = new store();
//     var storeDetails = new detailsprod();
//     // create shopping cart
//     var myCart = new shoppingCart("AngularStore");
//
//     // enable PayPal checkout
//     // note: the second parameter identifies the merchant; in order to use the
//     // shopping cart with PayPal, you have to create a merchant account with
//     // PayPal. You can do that here:
//     // https://www.paypal.com/webapps/mpp/merchant
//     myCart.addCheckoutParameters("PayPal", "corsaro22-facilitator@tiscali.it");
//
//     // return data object with store and cart
//     return {
//         store: myStore,
//         cart: myCart,
//         detailsprod: storeDetails
//     };
// });