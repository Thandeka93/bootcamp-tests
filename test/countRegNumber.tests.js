describe('Testing countRegNumber' , function(){
    it("should count and return registration numbers in a string" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);  

    });
    it("should count and return not valid registration number" , function(){
        var regCount = countRegNumber('12328,22233')
        assert.equal(regCount, 2);  
    });
    it("should count and return 0, 'no registration number'" , function(){
        var regCount = countRegNumber('0')
        assert.equal(regCount,1);  
    });
    });