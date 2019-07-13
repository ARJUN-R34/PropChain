const {TextEncoder, TextDecoder} = require('text-encoding/lib/encoding')
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const crypto = require('crypto');

var encoder = new TextEncoder('utf8')
var decoder = new TextDecoder('utf8')

FAMILY_NAME='landreg';
const NAMESPACE = hash(FAMILY_NAME).substring(0, 6);

function hash(v) {
    return crypto.createHash('sha512').update(v).digest('hex');
}

function landDataToStore(context, address, msg){
    let msgBytes = encoder.encode(msg);
    let entries = {
        [address]: msgBytes 
      };
    return context.setState(entries);
}



class landregHandler extends TransactionHandler{
    constructor(){
        super(FAMILY_NAME, ['1.0'], [NAMESPACE]);
    }

    apply(transactionProcessRequest, context){
        var msg = decoder.decode(transactionProcessRequest.payload);
        let header = transactionProcessRequest.header;
        this.publicKey = header.signerPublicKey;
        msg = msg.toString().split(',');
        if(msg.length==7){
           let adrs = hash(FAMILY_NAME).substr(0, 6)+ hash(msg[6]).substr(0,10)+hash(msg[5]).substr(0,10)+hash(msg[4]).substr(0,10)+hash(this.publicKey).substr(0, 34);
            // deletestatedata(context,adrs);
            return landDataToStore(context, adrs, msg);
        }
        function deletestatedata(context, address) {
            console.log('deleting state data');
            return context.deleteState([address]);
        }
        
        //this.address = hash(FAMILY_NAME).substr(0, 6) + hash(this.publicKey).substr(0, 64);
          this.address = hash(FAMILY_NAME).substr(0, 6) +hash(msg[4]).substr(0,10)+hash(msg[3]).substr(0,10)+hash(msg[2]).substr(0,10)+hash(this.publicKey).substr(0, 34);
        return landDataToStore(context, this.address, msg);
    }
}
module.exports = landregHandler;
