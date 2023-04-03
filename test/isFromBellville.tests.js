describe('Testing vehicle registration number function' , function(){
    it("should return registration number CY for Bellville'" , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
