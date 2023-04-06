describe('Testing totalPhoneBill function', function () {
    it("should returns total price of R7.45 when, call,sms,call,sms,sms was made", function () {
    assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should returns total price of R3.40 when, call and sms is made", function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    
    it("should returns total price of R0.65 when one sms is sent", function () {
        assert.equal('R0.65', totalPhoneBill('sms'));
    });
    it("should returns total price of R2.75 when one call is made", function () {
        assert.equal('R2.75', totalPhoneBill('call'));
    });
    it("should returns R0.00 when an empty string is passed", function () {
        assert.equal('R0.00', totalPhoneBill(''));
    });
});