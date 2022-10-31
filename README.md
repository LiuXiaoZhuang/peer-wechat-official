## 微信公众号api接口
# 不提供access_token的存储，不提供jsapi_ticket的存储
# 需要自己存储，然后再通过方法读取
```
使用方法：
import Client from 'peer-wechat-official'

let client = new Client(APPID, APP_SECRET, {
    getAccessToken: async(appID: string)=>{
        return redis.get(`access_token_${appID}`)
    }
    getJsapiTicket: async(appID: string)=>{
        return redis.get(`jsapi_ticket_${appID}`)
    }
})
```