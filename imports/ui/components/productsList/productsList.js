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

        this.perPage = 2;
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

    // searchMatch(haystack, needle) {
    //     if (!needle) {
    //         return true;
    //     }
    //     return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    // }
    //
    // search(name, $filter) {
    //     this.filteredItems = $filter('filter')(Products, function (product) {
    //         for (var attr in product) {
    //             if (searchMatch(product[name], this.getReactively('searchText')))
    //                 return true;
    //         }
    //         return false;
    //     });
    //     this.page = 1;
    //     this.groupToPages();
    // }

    myFilter(column, category) {
        // this.filteredItems = $filter('filter')(Products, function (product) {
        //     for (var attr in product) {
        //         if (searchMatch(product[column], category))
        //             return true;
        //     }
        //     return false;
        // });

        const options = {
            limit: parseInt(this.perPage)
        };
        options[column] = category;

        this.subscribe('products', () => [
            options, this.getReactively('searchText')
        ]);
    }

    // groupToPages() {
    //     this.pagedItems = [];
    //
    //     for (var i = 0; i < this.filteredItems.length; i++) {
    //         if (i % this.perPage === 0) {
    //             this.pagedItems[Math.floor(i / this.perPage)] = [this.filteredItems[i]];
    //         } else {
    //             this.pagedItems[Math.floor(i / this.perPage)].push(this.filteredItems[i]);
    //         }
    //     }
    // }
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
            url: '/shop',
            template: '<products-list></products-list>'
        });
}