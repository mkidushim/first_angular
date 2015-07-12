(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    })
    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: '10 sided gem',
        canPurchase: true,
        soldOut: false,
        image: "images/pentag.jpeg"

    }, {
        name: "pentagonal",
        price: 3.20,
        description: '5 sided gem',
        canPurchase: true,
        soldOut: false,
        image: "images/do.jpeg"
    }]

})();
