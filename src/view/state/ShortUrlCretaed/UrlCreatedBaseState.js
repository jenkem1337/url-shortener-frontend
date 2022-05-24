export default class UrlCreatedBaseState {
    constructor(long, short,detail,boolean,errorMsg){
        this.longUrl= long
        this.shortUrl=short
        this.urlDetail=detail
        this.hasError=boolean
        this.errorMessage =errorMsg

    }

}   