import UrlCreatedBaseState from "./UrlCreatedBaseState.js";

export default class HasErrorState extends UrlCreatedBaseState {
    constructor(msg){
        super('','','',true,msg)

    }
    handleRequest(){
            let urlDetailList = document.getElementById('created-url-details')

            let child = urlDetailList.lastElementChild; 
            
            if(child){ 
                while (child) {
                    urlDetailList.removeChild(child);
                    child = urlDetailList.lastElementChild;
                }
            }
            document.querySelector("#error-message").textContent = this.errorMessage
    }
}