describe('Testing vehicle registration number function' , function(){
    it("should return true if registration number is for Bellville'" , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });
    it("should return false this is not a registration number for Bellville'" , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
    it("should return no registration number in the string if the string passed is empty" , function(){
        assert.equal(isFromBellville(""), false);
    });
    });
