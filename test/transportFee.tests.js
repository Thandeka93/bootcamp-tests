describe('Testing transportFee function', function () {
    it("should returns the right price based on the shift you are working, morning shift = R20", function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it("should returns the right price based on the shift you are working, afternoon shift = R10", function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it("should returns the right price based on the shift you are working, night shift = Free", function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

    it("should returns no price if an empty string is passed", function () {
        assert.equal(transportFee(''), 'free', '');
    });

});
