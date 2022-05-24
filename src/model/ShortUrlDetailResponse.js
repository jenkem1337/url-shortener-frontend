export default class ShortUrlDetailResponse {
    constructor(long, short, howManyTimeClicked){
        this.longUrl = long
        this.shortUrl = short
        this.howManyTimeClicked = howManyTimeClicked
    }
    getShortUrl(){
        return this.shortUrl
    }
    getLongUrl(){
        return this.longUrl
    }
    getHowManyTimeClicked(){
        return this.howManyTimeClicked
    }
}