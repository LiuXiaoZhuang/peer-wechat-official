import { Util } from '../../util'
import { ReceiveData } from './types'

import * as crypto from 'crypto';
import { wxcrypto } from './wxcrypto'
import { parseXML } from './parseXML'

export class Receive {
    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 检测接入
     * @param token 
     * @param timestamp 
     * @param nonce 
     * @param signature 
     * @returns 
     */
    checkAccess(token: string, timestamp: string, nonce: string, signature: string){
        let shasum = crypto.createHash('sha1');
        let arr = [token, timestamp, nonce].sort();
        shasum.update(arr.join(''));
        if(shasum.digest('hex') !== signature){
            return true
        }
        return false
    }

    /**
     * 解密接收的消息
     * @param body 
     * @param encryptType 
     * @param token 
     * @param encodingAESKey 
     * @returns 
     */
    async decryptMessage(body: any, encryptType: string = '', token: string = '', encodingAESKey: string = ''): Promise<ReceiveData>{
        if(encryptType === 'aes'){
            if(token === ''){
                this.util.logger.error('token 为空')
                return null
            }
            if(encodingAESKey === ''){
                this.util.logger.error('encodingAESKey 为空')
                return null
            }
            try{
                let newCrypto = new wxcrypto(token, encodingAESKey, this.appID);
                let res = newCrypto.decrypt(body.Encrypt)
                return await parseXML(res)
            }catch(err){
                this.util.logger.error(`解密失败：${JSON.stringify(err)}`)
                return null
            }
        }else{
            return body
        }
    }
}