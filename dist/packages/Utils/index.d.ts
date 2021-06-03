import BaseModule from '..';
declare class Utils extends BaseModule {
    getReceiveMsgVerifyParamsFromQuery(query: any): {
        msgSignature: string;
        echostr: string;
        timestamp: string;
        nonce: string;
    };
    getReceiveMsgDecodeParamsFromQuery(query: any): {
        msgSignature: string;
        timestamp: string;
        nonce: string;
    };
}
export default Utils;
