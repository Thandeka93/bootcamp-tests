describe('Testing how many years ago' , function(){
    it("should return how many years ago that year is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

    });
it("should return, 'please add correct year format'" , function(){
    assert.equal((new Date().getFullYear() - 5), yearsAgo(5));
});
});