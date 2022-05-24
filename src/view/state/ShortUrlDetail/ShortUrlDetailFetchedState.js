import BaseShortUrlDetailState from "./BaseShortUrlDetailState.js";

export default class ShortUrlDetailFetchedState extends BaseShortUrlDetailState {
    constructor(long, short, howManyTimeClicked, urlCode){
        super(long, short, howManyTimeClicked, urlCode, false, '')
    }
    handleRequest(){
        //if it is not HasErrorState , error message should be empty string 

        document.querySelector("#error-message").textContent = this.errorMessage
            
        let urlDetailList = document.getElementById('url-details')
        let shortUrlLiElement = document.createElement('li')
        let longUrlLiElement = document.createElement('li')
        let howManyTimeClickedLiElement = document.createElement('li')
        
        let child = urlDetailList.lastElementChild; 
        
        if(child){
            while (child) {
                urlDetailList.removeChild(child);
                child = urlDetailList.lastElementChild;
            }

        }
        
        shortUrlLiElement.appendChild(document.createTextNode(`Short url -> ${this.shortUrl}`))
        longUrlLiElement.appendChild(document.createTextNode(`Long url -> ${this.longUrl}`))
        howManyTimeClickedLiElement.appendChild(document.createTextNode(`How many time clicked -> ${this.howManyTimeClicked}` ))
        
        urlDetailList.append(shortUrlLiElement, longUrlLiElement, howManyTimeClickedLiElement)

    }
    handleQueryStringRequest(){
        //if it is not HasErrorState , error message should be empty string 

        document.querySelector("#error-message").textContent = this.errorMessage
        
        let urlCodeInput = document.getElementById('url-code-input')
        let urlDetailList = document.getElementById('url-details')
        let shortUrlLiElement = document.createElement('li')
        let longUrlLiElement = document.createElement('li')
        let howManyTimeClickedLiElement = document.createElement('li')
        
        let child = urlDetailList.lastElementChild; 
        
        if(child){
            while (child) {
                urlDetailList.removeChild(child);
                child = urlDetailList.lastElementChild;
            }

        }
        
        shortUrlLiElement.appendChild(document.createTextNode(`Short url -> ${this.shortUrl}`))
        longUrlLiElement.appendChild(document.createTextNode(`Long url -> ${this.longUrl}`))
        howManyTimeClickedLiElement.appendChild(document.createTextNode(`How many time clicked -> ${this.howManyTimeClicked}` ))
        
        urlCodeInput.value = this.urlCode

        urlDetailList.append(shortUrlLiElement, longUrlLiElement, howManyTimeClickedLiElement)

    }
}