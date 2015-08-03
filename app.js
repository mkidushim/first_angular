(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    })

    app.controller('PanelController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    })
    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {

            product.reviews.push(this.review);
            this.review = {};
        }
    })
    app.directive("productTitle", function() {
        return{
            restrict: 'E',
            templateUrl: "product-title.html"
        };
    });
    var gems = [{
        name: 'Azurite',
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#0000FFC',
        faces: 14,
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        canPurchase: true,
        soldOut: false,
        image: "images/pentag.jpeg",
        reviews: [{
            stars: 5,
            body: "This product Rocks",
            author: "greg@lover.com"
        }, {
            stars: 1,
            body: "This product Sucks",
            author: "Alex@hater.com"
        }, {
            stars: 3,
            body: "This product is ok.",
            author: "george@neutral.com"
        }]

    }, {
        name: "Zircon",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#FFA500',
        faces: 6,
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        canPurchase: true,
        soldOut: false,
        image: "images/do.jpeg",
        reviews: [{
            stars: 5,
            body: "This product Rocks",
            author: "JIm@lover.com"
        }, {
            stars: 1,
            body: "This product Sucks",
            author: "OWL@hater.com"
        }, {
            stars: 3,
            body: "This product is ok.",
            author: "NERDLE@neutral.com"
        }]
    }]

})();
function QuarterController($scope) {
    $scope.Star = 'S3';
}
