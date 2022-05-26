import ErrorResponse from "../model/ErrorResponse.js"
import ShortUrlCreatedResponse from "../model/ShortUrlCreatedResponse.js"
import ShortUrlDetailResponse from "../model/ShortUrlDetailResponse.js"

export default class ShortUrlService {
    constructor(apiClient){
        this.urlApiClient = apiClient
    }

    async createNewShortUrl(longUrl){
        let res = await this.urlApiClient.createNewShortUrl(longUrl)
        if(res.errorMessage){
            return new ErrorResponse(res.errorMessage)
        }
        return new ShortUrlCreatedResponse(res.longUrl,res.shortUrl,res.urlCode)        
    }
    async findUrlDetailByUrlCode(urlCode) {
        let res = await this.urlApiClient.findUrlDetailByUrlCode(urlCode)
        if(res.errorMessage){
            return new ErrorResponse(res.errorMessage)
        }
        
        return new ShortUrlDetailResponse(res.longUrl, res.shortUrl, res.howManyTimeClicked)
    }                                
}