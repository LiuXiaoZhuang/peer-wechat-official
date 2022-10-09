import axios, { AxiosRequestConfig } from 'axios'
import { Logger, AccessToken, JsapiTicket, Response } from './types'
import { Readable } from 'stream';

export class Util {

    public logger: Logger = console
    setLogger(logger: Logger){
        this.logger = logger
    }

    public accessToken: AccessToken
    setAccessToken(getAccessToken: AccessToken){
        this.accessToken = getAccessToken
    }

    public jsapiTicket: JsapiTicket
    setJsapiTicket(getJsapiTicket: JsapiTicket){
        this.jsapiTicket = getJsapiTicket
    }

    async request<T, E>(url: string, options: AxiosRequestConfig = {}): Promise<Response<T, E>>{
        try{
            let res = await axios(url, options)
            if(res.status < 200 || res.status >= 204){
                if(this.logger !== null){
                    this.logger.error('[WechatOfficial]网络错误：' + JSON.stringify({ url: url, options: options }))
                }
                return {
                    status: 'network',
                    result: null,
                    error: null,
                }
            }
            if('errcode' in res.data && res.data.errcode !== 0){
                if(this.logger !== null){
                    this.logger.warn('[WechatOfficial]结果失败：' + JSON.stringify({ url: url, options: options }))
                }
                return {
                    status: 'fail',
                    result: null,
                    error: res.data,
                }
            }
            this.logger.info('[WechatOfficial]请求成功：' + JSON.stringify({ url: url, options: options, res: res.data }))
            return {
                status: 'success',
                result: res.data,
                error: null,
            }
        }catch(err){
            if(this.logger !== null){
                this.logger.error('请求错误：' + JSON.stringify({ url: url, options: options }))
            }
        }
        return {
            status: 'system',
            result: null,
            error: null,
        }
    }

    // 下载网络图片
    async downloadFile(url: string): Promise<Readable>{
        let res = await axios.get(url, {responseType: 'stream'});
        if(res.status < 200 || res.status > 204){
            return null;
        }
        return res.data
    }

    // 获取随机字符串
    randStr(len: number = 8): string{
        if(len <= 0){
            return '';
        }
        let tmp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let str = '';
        for(let i=0; i<len; i++){
            str += tmp[Math.floor(Math.random() * (tmp.length - 0.1))]
        }
        return str;
    }
}