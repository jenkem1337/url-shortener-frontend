export default class ShortUrlCreatedResponse {
    constructor(longUrl,shortUrl,urlCode){
        this.shortUrl = shortUrl
        this.longUrl = longUrl
        this.urlCode = urlCode
    }
    getUrlCode(){
        return this.urlCode
    }
    getLongUrl(){
        return this.longUrl
    }
    getShortUrl(){
        return this.shortUrl
    }
}