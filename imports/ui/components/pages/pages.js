/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import templateContact from './contact.html';
import templateServices from './services.html';
import template404 from './404.html';

class Pages {

}

const name = 'pages';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
// ]).component(name, {
//     template,
//     controllerAs: name,
//     controller: Pages
]).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('contact', {
            url: '/contact',
            template: templateContact
        })
        .state('services', {
            url: '/services',
            template: templateServices
        })
        .state('404', {
            url: '/404',
            template: template404
        });
}