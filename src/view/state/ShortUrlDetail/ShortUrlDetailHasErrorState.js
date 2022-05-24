import BaseShortUrlDetailState from "./BaseShortUrlDetailState.js";

export default class HasErrorState extends BaseShortUrlDetailState {
    constructor(urlCode, errMsg){
        super('','',-1, urlCode,true,errMsg)
    }
    handleRequest(){

        let urlDetailList = document.getElementById('url-details')

        let child = urlDetailList.lastElementChild; 
        
        if(child){ 
            while (child) {
                urlDetailList.removeChild(child);
                child = urlDetailList.lastElementChild;
            }
        }
        document.querySelector("#error-message").textContent = this.errorMessage

    }
    handleQueryStringRequest(){
        let urlDetailList = document.getElementById('url-details')

        let child = urlDetailList.lastElementChild; 
        
        if(child){ 
            while (child) {
                urlDetailList.removeChild(child);
                child = urlDetailList.lastElementChild;
            }
        }
        document.getElementById('url-code-input').value = this.urlCode
        document.querySelector("#error-message").textContent = this.errorMessage

    }
}