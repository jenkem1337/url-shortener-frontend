import UrlCreatedBaseState from "./UrlCreatedBaseState.js";

export default class NewShortUrlCreatedState extends UrlCreatedBaseState {
    constructor(long, short, detail){
        super(long,short,detail,false,'')

    }
    handleRequest(){
            //if it is not HasErrorState , error message should be empty string 
            document.querySelector("#error-message").textContent = this.errorMessage
            
            let urlDetailList = document.getElementById('created-url-details')
            let shortUrlLiElement = document.createElement('li')
            let longUrlLiElement = document.createElement('li')
            let urlDetailLiElement = document.createElement('li')
            let urlDetailHref = document.createElement('a')
            
            let child = urlDetailList.lastElementChild; 
            
            if(child){
                while (child) {
                    urlDetailList.removeChild(child);
                    child = urlDetailList.lastElementChild;
                }
    
            }
    
            urlDetailHref.setAttribute('href', this.urlDetail)
            urlDetailHref.setAttribute('data-dispatch', '')
            urlDetailHref.appendChild(document.createTextNode(`Look url detail -> ${this.urlDetail}`))
            
            shortUrlLiElement.appendChild(document.createTextNode(`Short url -> ${this.shortUrl}`))
            longUrlLiElement.appendChild(document.createTextNode(`Long url -> ${this.longUrl}`))
            urlDetailLiElement.appendChild(urlDetailHref)
            
            urlDetailList.append(shortUrlLiElement, longUrlLiElement, urlDetailLiElement)
        

    }
}