describe('Testing function findItemsOver', function () {
    it("should return the products that have a quantity over threshold in the item list", function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });
    it("should return the products does not have a quantity over threshold in the item list", function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 6},
            {name : 'bananas', qty : 7},
            {name : 'apples', qty : 3},
        ];
        var results = [];
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it("should return an empty string if empty string is passed", function () {
        var itemList = [
            {name : '', qty : ''},
            {name : '', qty : ''},
            {name : '', qty : ''},
            {name : '', qty : ''},
        ];
        
        var results = [];
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

});