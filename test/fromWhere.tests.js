describe('Testing fromWhere function', function () {
    it("return GP when passed with 'GP'  ", function () {
        assert.equal(fromWhere('GP 123456'), 'place!', true)
    });
   
    it("should return place when other place is passed ", function () {
        assert.equal(fromWhere('ZN 568593'), 'place!', true);
    });

    it("should return, 0 when an empty string is passed", function () {
        assert.equal(fromWhere(''), 'place!', true);
    });

});