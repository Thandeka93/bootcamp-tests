describe('Testing weekdays of the week' , function(){
    it("should return Monday, 'Monday is the day of the week'" , function(){
     assert.equal(isWeekday('Monday'), true); 

    });

it("should return Tuesday, 'Tuesday is the day of the week'" , function(){
 assert.equal(isWeekday('Tuesday'), true);

});

it("should return Wednesday, 'Wednesday is the day of the week'" , function(){
 assert.equal(isWeekday('Wednesday'), true);
});

it("should return Thursday, 'Thursday is the day of the week'" , function(){
    assert.equal(isWeekday('Thursday'), true);

});

it("should return Friday, 'Friday is the day of the week'" , function(){
    assert.equal(isWeekday('Friday'), true);
});

it("should return Saturday, 'Saturday is not the day of the week'" , function(){
 assert.equal(isWeekday('Saturday'), false); 
});

it("should return Sunday, 'Sunday is not the day of the week'" , function(){
 assert.equal(isWeekday('Sunday'), false); 
});
});