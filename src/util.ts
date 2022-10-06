import axios, { AxiosRequestConfig } from 'axios'
import { Logger, AccessToken, Response } from './types'

export class Util {

    public logger: Logger = console
    setLogger(logger: Logger){
        this.logger = logger
    }

    public accessToken: AccessToken
    setAccessToken(getAccessToken: AccessToken){
        this.accessToken = getAccessToken
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
}