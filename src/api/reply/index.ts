import { Message } from './types'

export class Reply {

    buildMessage(message: Message){
        return `<xml>
                    <ToUserName><![CDATA[${message.ToUserName}]]></ToUserName>
                    <FromUserName><![CDATA[${message.FromUserName}]]></FromUserName>
                    <CreateTime>${message.CreateTime}</CreateTime>
                    <MsgType><![CDATA[${message.MsgType}]]></MsgType>
                    ${this.buildMessageContent(message)}
                </xml>`
    }
    
    buildMessageContent(message: Message){
        switch(message.MsgType){
            case 'text':
                return `<Content><![CDATA[${message.Content}]]></Content>`
            case 'image':
                return `<Image>
                            <MediaId><![CDATA[${message.Image.MediaId}]]></MediaId>
                        </Image>`
            case 'voice':
                return `<Voice>
                            <MediaId><![CDATA[${message.Voice.MediaId}]]></MediaId>
                        </Voice>`
            case 'video':
                return `<Video>
                            <MediaId><![CDATA[${message.Video.MediaId}]]></MediaId>
                            ${
                                'Title' in message.Video ? `<Title><![CDATA[${message.Video.Title}]]></Title>` : ''
                            }
                            ${
                                'Description' in message.Video ? `<Description><![CDATA[${message.Video.Description}]]></Description>` : ''
                            }
                        </Video>`
            case 'music':
                return `<Music>
                            <ThumbMediaId><![CDATA[${message.Music.ThumbMediaId}]]></ThumbMediaId>
                            ${
                                'Title' in message.Music ? `<Title><![CDATA[${message.Music.Title}]]></Title>` : ''
                            }
                            ${
                                'Description' in message.Music ? `<Description><![CDATA[${message.Music.Description}]]></Description>` : ''
                            }
                            ${
                                'MusicUrl' in message.Music ? `<MusicUrl><![CDATA[${message.Music.MusicUrl}]]></MusicUrl>` : ''
                            }
                            ${
                                'HQMusicUrl' in message.Music ? `<HQMusicUrl><![CDATA[${message.Music.HQMusicUrl}]]></HQMusicUrl>` : ''
                            }
                        </Music>`
            case 'news':
                return `<ArticleCount>${message.Articles.length}</ArticleCount>
                        <Articles>
                            ${
                                message.Articles.map(item => {
                                    return `<item>
                                                <Title><![CDATA[${item.Title}]]></Title>
                                                <Description><![CDATA[${item.Description}]]></Description>
                                                <PicUrl><![CDATA[${item.PicUrl}]]></PicUrl>
                                                <Url><![CDATA[${item.Url}]]></Url>
                                            </item>`
                                }).join('')
                            }
                        </Articles>`
    
    
        }
    }
}