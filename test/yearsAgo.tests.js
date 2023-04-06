describe('How many years ago?' , function(){
    it("should return how many years ago the year 1976 is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

    });
it("should return none when no years is entered" , function(){
    assert.equal((new Date().getFullYear() - 0), yearsAgo(0));
});

it("should return -2 when called with 2025" , function(){
    assert.equal((new Date().getFullYear() - 2025), yearsAgo(2025));

});
});