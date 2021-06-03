interface CryptorURLVerifyMethodOptions extends CryptorURLVerifyOptions {
    appToken: string;
    corpId: string;
    encodingAESKey: string;
}
export declare const urlVerify: ({ encodingAESKey, appToken, corpId, msgSignature, echostr, timestamp, nonce, cryptor, }: CryptorURLVerifyMethodOptions) => any;
export {};
