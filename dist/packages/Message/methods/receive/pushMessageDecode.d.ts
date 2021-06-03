interface CryptorPushMessageDecodeMethodOptions extends CryptorPushMessageDecodeOptions {
    appToken: string;
    corpId: string;
    encodingAESKey: string;
}
export declare const pushMessageDecode: ({ encodingAESKey, corpId, appToken, cryptor, msgSignature, timestamp, nonce, originXML, }: CryptorPushMessageDecodeMethodOptions) => any;
export {};
