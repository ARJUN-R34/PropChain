const { TransactionProcessor } = require('sawtooth-sdk/processor');
const Handler = require('./Handler');

const address = 'tcp://validator:4004';
console.log('Connected---------------------------------------------------------------------');
const transactionProcesssor = new TransactionProcessor(address);
transactionProcesssor.addHandler(new Handler());
transactionProcesssor.start();