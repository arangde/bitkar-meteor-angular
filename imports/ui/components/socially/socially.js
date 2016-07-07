/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './socially.html';
import { name as ProductsList } from '../productsList/productsList';
import { name as ProductDetails } from '../productDetails/productDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as FooterNav } from '../footerNav/footerNav';

class Socially {}

const name = 'socially';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ProductsList,
    ProductDetails,
    Navigation,
    FooterNav
]).component(name, {
    template,
    controllerAs: name,
    controller: Socially
}).config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider
    // .when("/", { templateUrl: "partials/home.html", controller: "HomeCtrl" })
    // .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
    // .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    // .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "PageCtrl"})
    .otherwise("/shop", {templateUrl: "partials/404.html", controller: "PageCtrl"});
};

