export declare class wxcrypto {
    private token;
    private id;
    private key;
    private iv;
    constructor(token: any, encodingAESKey: any, id: any);
    getSignature(timestamp: any, nonce: any, encrypt: any): string;
    decrypt(text: any): string;
    encrypt(text: any): string;
}
