describe('Registration numbers from Paarl' , function(){
 it("should count only registration numbers for Paarl from a string" , function(){
  assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123')); 

 });
 it("should return 'not a registration number from Paarl'", function(){
 assert.equal(0,countAllPaarl ('CK 345, GP 25 ZN'))

});
it("should return this is not a registration number'", function(){
    assert.equal(0,countAllPaarl (' 345, 25 '))
   
   });
   it("should return no registration number entered if an empty string is pased", function(){
    assert.equal(0,countAllPaarl (''))
   
   });
});