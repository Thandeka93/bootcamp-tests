describe('Testing countAllFromTown function', function () {
    it("should return how many registration number from Stellies if CL is passed on the string.", function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

    });
    it("should return empty data if an empty string is passed", function () {
        var fromTown = countAllFromTown('');
        assert.deepEqual(fromTown, []);

});

    it("should return how many registration number from Kuilsriver if CF is passed on the string ", function () {
        var fromKuilsriver = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
        assert.deepEqual(fromKuilsriver, []);

    });
  
});