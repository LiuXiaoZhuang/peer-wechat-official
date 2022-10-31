import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { GetUserSummaryResponse, GetUserCumulateResponse, GetArticleSummaryResponse, GetArticleTotalResponse, GetUserReadResponse, GetUserReadHourResponse, GetUserShareResponse, GetUserShareHourResponse, GetUpstreamMsgResponse, GetUpstreamMsgHourResponse, GetUpstreamMsgWeekResponse, GetUpstreamMsgMonthResponse, GetUpstreamMsgDistResponse, GetUpstreamMsgDistWeekResponse, GetUpstreamMsgDistMonthResponse, AdParam, PublisherAdposGeneralResponse, PublisherCpsGeneralResponse, PublisherSettlementResponse, GetInterfaceSummaryResponse, GetInterfaceSummaryHourResponse } from './types';
export declare class Count {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    getUserSummary(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserSummaryResponse, OfficialResponse>>;
    getUserCumulate(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserCumulateResponse, OfficialResponse>>;
    getArticleSummary(beginDate: string, endDate: string): Promise<import("../../types").Response<GetArticleSummaryResponse, OfficialResponse>>;
    getArticleTotal(beginDate: string, endDate: string): Promise<import("../../types").Response<GetArticleTotalResponse, OfficialResponse>>;
    getUserRead(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserReadResponse, OfficialResponse>>;
    getUserReadHour(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserReadHourResponse, OfficialResponse>>;
    getUserShare(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserShareResponse, OfficialResponse>>;
    getUserShareHour(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUserShareHourResponse, OfficialResponse>>;
    getUpstreamMsg(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgResponse, OfficialResponse>>;
    getUpstreamMsgHour(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgHourResponse, OfficialResponse>>;
    getUpstreamMsgWeek(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgWeekResponse, OfficialResponse>>;
    getUpstreamMsgMonth(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgMonthResponse, OfficialResponse>>;
    getUpstreamMsgDist(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgDistResponse, OfficialResponse>>;
    getUpstreamMsgDistWeek(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgDistWeekResponse, OfficialResponse>>;
    getUpstreamMsgDistMonth(beginDate: string, endDate: string): Promise<import("../../types").Response<GetUpstreamMsgDistMonthResponse, OfficialResponse>>;
    publisherAdposGeneral(data: AdParam, ad_slot?: string): Promise<import("../../types").Response<PublisherAdposGeneralResponse, OfficialResponse>>;
    publisherCpsGeneral(data: AdParam): Promise<import("../../types").Response<PublisherCpsGeneralResponse, OfficialResponse>>;
    publisherSettlement(data: AdParam): Promise<import("../../types").Response<PublisherSettlementResponse, OfficialResponse>>;
    getInterfaceSummary(beginDate: string, endDate: string): Promise<import("../../types").Response<GetInterfaceSummaryResponse, OfficialResponse>>;
    getInterfaceSummaryHour(beginDate: string, endDate: string): Promise<import("../../types").Response<GetInterfaceSummaryHourResponse, OfficialResponse>>;
}
