describe('Testing vehicle registration number for GP,L,EC,MP' , function(){
    it("should return 'registration numbers, GP'" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });
it("should return 'registration numbers, L'" , function(){
    assert.equal(regCheck('5566 L', 'L'), true);

});

it("should return 'registration numbers, EC'" , function(){
assert.equal(regCheck('ERT 123 EC', 'EC'), true);
});

it("should return 'registration numbers, MP'" , function(){
assert.equal(regCheck('FGT 123 MP', 'MP'), true);

});
});