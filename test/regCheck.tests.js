describe('Testing vehicle registration number for GP,L,EC,MP' , function(){
    it("should return Gauteng registration numbers when GP is passed" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });
it("should return Limpopo registration numbers when L is passed" , function(){
    assert.equal(regCheck('5566 L', 'L'), true);

});

it("should return Eastern Cape registration number when EC is passed" , function(){
assert.equal(regCheck('ERT 123 EC', 'EC'), true);
});

it("should return Mpumalanga registration numbers when MP is passed" , function(){
assert.equal(regCheck('FGT 123 MP', 'MP'), true);
});
it("should return no registration number if no registration number entered" , function(){
    assert.equal(regCheck('', ''), true);

});
});