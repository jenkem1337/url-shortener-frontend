export default class ErrorResponse {
    constructor(errMsg){
        this.errMsg = errMsg

    }
    getErrorMessage(){
        return this.errMsg
    }
}