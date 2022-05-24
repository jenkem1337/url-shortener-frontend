export default class BaseShortUrlDetailState {
    constructor(long, short,howManyTimeClicked,urlCode,boolean,errorMsg){
        this.longUrl= long
        this.shortUrl=short
        this.howManyTimeClicked=howManyTimeClicked
        this.urlCode = urlCode
        this.hasError=boolean
        this.errorMessage =errorMsg

    }

}