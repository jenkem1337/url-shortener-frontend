import BaseShortUrlDetailState from "./BaseShortUrlDetailState.js";

export default class InitialState extends BaseShortUrlDetailState{
    constructor(){
        super('', '', -1, '',false, '')
    }
    handleRequest(){}
    handleQueryStringRequest(){}
}