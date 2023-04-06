describe('Testing greet function' , function(){
    it("should return 'Hello, Bob'" , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       

    });
    it("should return 'Hello, Sam'" , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');

    });
    it("should return 'Hello, Thandeka' " , function(){
        assert.equal(greet('Thandeka'), 'Hello, Thandeka');

    });

});