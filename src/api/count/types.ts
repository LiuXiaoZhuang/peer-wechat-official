import { OfficialResponse } from '../../types'

export type GetUserSummaryResponse = {
    list: { 
        ref_date: string,
        user_source: number,
        new_user: number,
        cancel_user: number,
    }[]
}

export type GetUserCumulateResponse = {
    list: { 
        ref_date: string,
        cumulate_user: number,
    }[]
}

export type GetArticleSummaryResponse = {
    list: { 
        ref_date: string,
        msgid: string,
        title: string,
        int_page_read_user: number,
        int_page_read_count: number,
        ori_page_read_user: number,
        ori_page_read_count: number,
        share_user: number,
        share_count: number,
        add_to_fav_user: number,
        add_to_fav_count: number,
    }[]
}

export type GetArticleTotalResponse = {
    list: { 
        ref_date: string,
        msgid: string,
        title: string,
        details: { 
            stat_date: string,
            target_user: number,
            int_page_read_user: number,
            int_page_read_count: number,
            ori_page_read_user: number,
            ori_page_read_count: number,
            share_user: number,
            share_count: number,
            add_to_fav_user: number,
            add_to_fav_count: number,
            int_page_from_session_read_user: number,
            int_page_from_session_read_count: number,
            int_page_from_hist_msg_read_user: number,
            int_page_from_hist_msg_read_count: number,
            int_page_from_feed_read_user: number,
            int_page_from_feed_read_count: number,
            int_page_from_friends_read_user: number,
            int_page_from_friends_read_count: number,
            int_page_from_other_read_user: number,
            int_page_from_other_read_count: number,
            feed_share_from_session_user: number,
            feed_share_from_session_cnt: number,
            feed_share_from_feed_user: number,
            feed_share_from_feed_cnt: number,
            feed_share_from_other_user: number,
            feed_share_from_other_cnt: number,
        }[]
    }[]
}

export type GetUserReadResponse = {
    list: { 
        ref_date: string,
        user_source: number,
        int_page_read_user: number,
        int_page_read_count: number,
        ori_page_read_user: number,
        ori_page_read_count: number,
        share_user: number,
        share_count: number,
        add_to_fav_user: number,
        add_to_fav_count: number,
    }[]
}

export type GetUserReadHourResponse = {
    list: { 
        ref_date: string,
        ref_hour: number,
        user_source: number,
        int_page_read_user: number,
        int_page_read_count: number,
        ori_page_read_user: number,
        ori_page_read_count: number,
        share_user: number,
        share_count: number,
        add_to_fav_user: number,
        add_to_fav_count: number,
    }[]
}

export type GetUserShareResponse = {
    list: { 
        ref_date: string,
        share_scene: number,
        share_count: number,
        share_user: number,
    }[]
}

export type GetUserShareHourResponse = {
    list: { 
        ref_date: string,
        ref_hour: number,
        share_scene: number,
        share_count: number,
        share_user: number,
    }[]
}

export type GetUpstreamMsgResponse = {
    list: { 
        ref_date: string,
        msg_type: number,
        msg_user: number,
        msg_count: number,
    }[]
}

export type GetUpstreamMsgHourResponse = {
    list: { 
        ref_date: string,
        ref_hour: number,
        msg_type: number,
        msg_user: number,
        msg_count: number,
    }[]
}

export type GetUpstreamMsgWeekResponse = {
    list: { 
        ref_date: string,
        msg_type: number,
        msg_user: number,
        msg_count: number,
    }[]
}

export type GetUpstreamMsgMonthResponse = {
    list: { 
        ref_date: string,
        msg_type: number,
        msg_user: number,
        msg_count: number,
    }[]
}

export type GetUpstreamMsgDistResponse = {
    list: { 
        ref_date: string,
        count_interval: number,
        msg_user: number,
    }[]
}

export type GetUpstreamMsgDistWeekResponse = {
    list: { 
        ref_date: string,
        count_interval: number,
        msg_user: number,
    }[]
}

export type GetUpstreamMsgDistMonthResponse = {
    list: { 
        ref_date: string,
        count_interval: number,
        msg_user: number,
    }[]
}

export type AdParam = {
    page: number,
    page_size: number,
    start_date: string,
    end_date: string,
}

export type PublisherAdposGeneralResponse = {
    base_resp:{
        err_msg: string,
        ret: number,
    },
    list: {
        slot_id: number,
        ad_slot: string,
        date: string,
        req_succ_count: number,
        exposure_count: number,
        exposure_rate: number,
        click_count: number,
        click_rate: number,
        income: number,
        ecpm: number,
    }[],
    summary: {
        req_succ_count: number,
        exposure_count: number,
        exposure_rate: number,
        click_count: number,
        click_rate: number,
        income: number,
        ecpm: number,
    },
    total_num: number,
}
export type PublisherCpsGeneralResponse = {
    base_resp:{
        err_msg: string,
        ret: number,
    },
    list: {
        date: string,
        exposure_count: number,
        click_count: number,
        click_rate: number,
        order_count: number,
        order_rate: number,
        total_fee: number,
        total_commission: number,
    }[],
    summary:{
        exposure_count: number,
        click_count: number,
        click_rate: number,
        order_count: number,
        order_rate: number,
        total_fee: number,
        total_commission: number,
    },
    total_num: number,
}
export type PublisherSettlementResponse = {
    base_resp:{
        err_msg: string,
        ret: number,
    },
    body: string,
    penalty_all: number,
    revenue_all: number,
    settled_revenue_all: number,
    settlement_list: {
        date: string,
        zone: string,
        month: string,
        order: number,
        sett_status: number,
        settled_revenue: number,
        sett_no: string,
        mail_send_cnt: number,
        slot_revenue: {
            slot_id: string,
            slot_settled_revenue: number,
        }[]
    }[],
    total_num: number,
}

export type GetInterfaceSummaryResponse = {
    list: { 
        ref_date: string,
        callback_count: number,
        fail_count: number,
        total_time_cost: number,
        max_time_cost: number,
    }[]
}

export type GetInterfaceSummaryHourResponse = {
    list: { 
        ref_date: string,
        ref_hour: number,
        callback_count: number,
        fail_count: number,
        total_time_cost: number,
        max_time_cost: number,
    }[]
}