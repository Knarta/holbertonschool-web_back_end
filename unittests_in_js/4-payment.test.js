const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    it('should stub Utils.calculateNumber to return 10 and verify console.log', function() {
      // Create a stub on Utils.calculateNumber that always returns 10
      const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
      
      // Create a spy on console.log
      const consoleSpy = sinon.spy(console, 'log');
  
      // Call the function we're testing
      sendPaymentRequestToApi(100, 20);
  
      // Verify the stub was called with the correct arguments
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  
      // Verify console.log was called with the correct message
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  
      // Restore the stub and spy
      stub.restore();
      consoleSpy.restore();
    });
  });