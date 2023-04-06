describe('Testing weekdays of the week' , function(){
    it("should return true when weekdays is(Monday,Tuesday,Wednesday,Thursday,Friday)" , function(){
     assert.equal(isWeekday('Monday'), true); 
     assert.equal(isWeekday('Tuesday'), true);
     assert.equal(isWeekday('Wednesday'), true);
     assert.equal(isWeekday('Thursday'), true);
     assert.equal(isWeekday('Friday'), true);

    });

it("should return false Saturday and Sunday are not weekdays" , function(){
 assert.equal(isWeekday('Saturday'), false); 
 assert.equal(isWeekday('Sunday'), false); 
});

it("should return January is not the day of the week'" , function(){
    assert.equal(isWeekday('January is not a day of the week'), true); 
   });

   it("should return '' if it is an empty string" , function(){
    assert.equal(isWeekday(''), true); 
   });
});