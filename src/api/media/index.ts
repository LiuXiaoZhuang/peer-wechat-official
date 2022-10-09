import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    MediaType,
    UploadTmpMedia,
    DownloadTmpMedia,
    UploadImg,
    UploadMediaParam,
    UploadMediaResponse,
    DownloadMedia,
    MediaCount,
    Article,
    AddNewsMedia,
} from './types'
import { Readable } from 'stream';
import FormData from 'form-data'

export class Media {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 新增临时素材
     * @returns 
     */
    async uploadTmpMedia(type: MediaType, fileContent: Readable){
        let formData = new FormData();
        formData.append('media', fileContent);
        let len: number = await new Promise((resolve, reject) => {
            return formData.getLength((err, length) => (err ? reject(err) : resolve(length)));
        });
        return this.util.request<UploadTmpMedia, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/media/upload', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                type: type
            },
            data: formData,
            headers: {
                ...formData.getHeaders(), // 小心
                'Content-Length': len,    // 谨慎
            },
        })
    }

    /**
     * 获取临时素材
     * @param mediaID 
     * @returns 
     */
    async downloadTmpMedia(mediaID: string){
        return this.util.request<DownloadTmpMedia, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/media/get', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                media_id: mediaID
            },
        })
    }

    /**
     * 上传图文消息内的图片获取URL（只支持，jpg/png 大小1mb以下）
     * @returns 
     */
    async uploadImg(fileContent: Readable){
        let formData = new FormData();
        formData.append('media', fileContent);
        let len: number = await new Promise((resolve, reject) => {
            return formData.getLength((err, length) => (err ? reject(err) : resolve(length)));
        });
        return this.util.request<UploadImg, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/media/uploadimg', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: formData,
            headers: {
                ...formData.getHeaders(), // 小心
                'Content-Length': len,    // 谨慎
            },
        })
    }

    /**
     * 新增永久素材
     * @returns 
     */
    async uploadMedia(data: UploadMediaParam){
        let formData = new FormData();
        formData.append('media', data.fileContent);
        if(data.type === 'video'){
            formData.append('description', JSON.stringify({
                title: data.title,
                introduction: data.introduction,
            }));
        }
        let len: number = await new Promise((resolve, reject) => {
            return formData.getLength((err, length) => (err ? reject(err) : resolve(length)));
        });
        return this.util.request<UploadMediaResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/media/upload', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                type: data.type
            },
            data: formData,
            headers: {
                ...formData.getHeaders(), // 小心
                'Content-Length': len,    // 谨慎
            },
        })
    }

    /**
     * 新增图文素材
     * @returns 
     */
     async addNewsMedia(articles: Article[]){
        return this.util.request<AddNewsMedia, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/add_news', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                articles: articles
            }
        })
    }

    /**
     * 修改图文素材
     * @returns 
     */
     async updateNewsMedia(mediaID: string, index: number, article: Article){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/update_news', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID,
                index: index,
                articles: article
            }
        })
    }

    /**
     * 获取永久素材
     * @param mediaID 
     * @returns 
     */
     async getMedia(mediaID: string){
        return this.util.request<DownloadMedia, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/get_material', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID
            }
        })
    }

    /**
     * 删除永久素材
     * @param mediaID 
     * @returns 
     */
    async delMedia(mediaID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/del_material', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID
            }
        })
    }

    /**
     * 获取素材总数
     * @returns 
     */
    async mediaCount(){
        return this.util.request<MediaCount, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/get_materialcount', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            }
        })
    }

    /**
     * 获取素材总数
     * @returns 
     */
    async mediaList(type: MediaType, offset: number = 0, count: number = 20){
        return this.util.request<MediaCount, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/material/batchget_material', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                type: type,
                offset: offset,
                count: count,
            }
        })
    }

    /**
     * 上传视频(用于群发时，转换media_id)
     * @returns 
     */
    async uploadVideo(mediaID: string, title: string, description: string){
        return this.util.request<UploadTmpMedia, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/media/uploadvideo', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID,
                title: title,
                description: description,
            }
        })
    }

}