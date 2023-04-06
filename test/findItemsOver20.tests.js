describe('Testing function findItemsOver20', function () {
    it("should return the products that have a quantity higher than 20", function () {
        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];

        var results = [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ];
        assert.deepEqual(results, findItemsOver20(itemList));

    });

    it("should return the products does not have a quantity higher than 20", function () {
        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 17 },
            { name: 'bananas', qty: 19 },
            { name: 'apples', qty: 3 },
        ];

        var results = [];
        assert.deepEqual(results, findItemsOver20(itemList));

    });

    it("should return 0 if an empty string is passed", function () {
        var itemList = [
            { name: '', qty: '' },
            { name: '', qty: '' },
            { name: '', qty: '' },
            { name: '', qty: '' },
        ];

        var results = [];
        assert.deepEqual(results, findItemsOver20(itemList));

    });
});

