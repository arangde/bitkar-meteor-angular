/**
 * Created by jaran on 7/6/2016.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import template from './productsList.html';
import { Products } from '../../../api/products';

class ProductsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.perPage = 9;
        this.page = 1;
        this.sort = {
            name: 1
        };
        this.searchText = '';

        this.filteredItems = [];
        this.groupedItems = [];
        this.pagedItems = [];

        this.subscribe('products', () => [{
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') - 1) * this.perPage)
        }, this.getReactively('searchText')
        ]);

        // this.myFilter();
        // this.search();
        
        this.helpers({
            products() {
                return Products.find({}, {
                    sort : this.getReactively('sort')
                });
            },
            productsCount() {
                return Counts.get('numberOfProducts');
            }
        });
    }

    pageChanged(newPage) {
        this.page = newPage;
    }

    myFilter(column, category) {

        const options = {
            limit: parseInt(this.perPage)
        };
        options[column] = category;

        this.subscribe('products', () => [
            options, this.getReactively('searchText')
        ]);
    }

}

const name = 'productsList';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    utilsPagination
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductsList
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('products', {
            url: '/',
            template: '<products-list></products-list>'
        });
}