import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    GetUserSummaryResponse,
    GetUserCumulateResponse,
    GetArticleSummaryResponse,
    GetArticleTotalResponse,
    GetUserReadResponse,
    GetUserReadHourResponse,
    GetUserShareResponse,
    GetUserShareHourResponse,
    GetUpstreamMsgResponse,
    GetUpstreamMsgHourResponse,
    GetUpstreamMsgWeekResponse,
    GetUpstreamMsgMonthResponse,
    GetUpstreamMsgDistResponse,
    GetUpstreamMsgDistWeekResponse,
    GetUpstreamMsgDistMonthResponse,
    AdParam,
    PublisherAdposGeneralResponse,
    PublisherCpsGeneralResponse,
    PublisherSettlementResponse,
    GetInterfaceSummaryResponse,
    GetInterfaceSummaryHourResponse,
} from './types'

export class Count {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 获取用户增减数据
     * @returns 
     */
    async getUserSummary(beginDate: string, endDate: string){
        return this.util.request<GetUserSummaryResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getusersummary', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取累计用户数据
     * @returns 
     */
    async getUserCumulate(beginDate: string, endDate: string){
        return this.util.request<GetUserCumulateResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getusercumulate', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文群发每日数据
     * @returns 
     */
    async getArticleSummary(beginDate: string, endDate: string){
        return this.util.request<GetArticleSummaryResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getarticlesummary', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文群发总数据
     * @returns 
     */
    async getArticleTotal(beginDate: string, endDate: string){
        return this.util.request<GetArticleTotalResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getarticletotal', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文统计数据
     * @returns 
     */
    async getUserRead(beginDate: string, endDate: string){
        return this.util.request<GetUserReadResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getuserread', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文统计分时数据
     * @returns 
     */
    async getUserReadHour(beginDate: string, endDate: string){
        return this.util.request<GetUserReadHourResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getuserreadhour', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文分享转发数据
     * @returns 
     */
    async getUserShare(beginDate: string, endDate: string){
        return this.util.request<GetUserShareResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getusershare', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取图文分享转发数据
     * @returns 
     */
    async getUserShareHour(beginDate: string, endDate: string){
        return this.util.request<GetUserShareHourResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getusersharehour', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送概况数据
     * @returns 
     */
    async getUpstreamMsg(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsg', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送分时数据
     * @returns 
     */
    async getUpstreamMsgHour(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgHourResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsghour', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送周数据
     * @returns 
     */
     async getUpstreamMsgWeek(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgWeekResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsgweek', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送月数据
     * @returns 
     */
    async getUpstreamMsgMonth(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgMonthResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsgmonth', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送分布数据
     * @returns 
     */
    async getUpstreamMsgDist(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgDistResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsgdist', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送分布周数据
     * @returns 
     */
    async getUpstreamMsgDistWeek(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgDistWeekResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsgdistweek', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取消息发送分布月数据
     * @returns 
     */
    async getUpstreamMsgDistMonth(beginDate: string, endDate: string){
        return this.util.request<GetUpstreamMsgDistMonthResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getupstreammsgdistmonth', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取公众号分广告位数据
     * @returns 
     */
     async publisherAdposGeneral(data: AdParam, ad_slot?: string){
        return this.util.request<PublisherAdposGeneralResponse, OfficialResponse>('https://api.weixin.qq.com/publisher/stat', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                action: 'publisher_adpos_general'
            },
            data: {
                ...data,
                ad_slot: ad_slot
            }
        })
    }

    /**
     * 获取公众号返佣商品数据
     * @returns 
     */
     async publisherCpsGeneral(data: AdParam){
        return this.util.request<PublisherCpsGeneralResponse, OfficialResponse>('https://api.weixin.qq.com/publisher/stat', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                action: 'publisher_cps_general'
            },
            data: data
        })
    }

    /**
     * 获取公众号结算收入数据及结算主体信息
     * @returns 
     */
     async publisherSettlement(data: AdParam){
        return this.util.request<PublisherSettlementResponse, OfficialResponse>('https://api.weixin.qq.com/publisher/stat', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                action: 'publisher_settlement'
            },
            data: data
        })
    }

    /**
     * 获取接口分析数据
     * @returns 
     */
     async getInterfaceSummary(beginDate: string, endDate: string){
        return this.util.request<GetInterfaceSummaryResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getinterfacesummary', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                action: 'publisher_settlement'
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }

    /**
     * 获取接口分析分时数据
     * @returns 
     */
     async getInterfaceSummaryHour(beginDate: string, endDate: string){
        return this.util.request<GetInterfaceSummaryHourResponse, OfficialResponse>('https://api.weixin.qq.com/datacube/getinterfacesummaryhour', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                action: 'publisher_settlement'
            },
            data: {
                begin_date: beginDate,
                end_date: endDate,
            }
        })
    }
}