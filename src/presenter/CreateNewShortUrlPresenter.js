import ErrorResponse from "../model/ErrorResponse.js"
import ShortUrlCreatedResponse from "../model/ShortUrlCreatedResponse.js"
import HasErrorState from "../view/state/ShortUrlCretaed/HasErrorState.js"
import InitialState from "../view/state/ShortUrlCretaed/InitialUrlCreatedState.js"
import NewShortUrlCreatedState from "../view/state/ShortUrlCretaed/NewShortUrlCreatedState.js"

export default class CreateNewShortUrlPresenter{
    
    constructor(service){
        this.urlService = service   
    }


    setView(view){
        this.view = view
        this.binding(new InitialState())
    }
    binding(state){
        this.view.setViewState(state)
    }
    async sendLongUrl(longUrl){
        let model = await this.urlService.createNewShortUrl(longUrl)
        
        if(model instanceof ErrorResponse){
            this.binding(new HasErrorState(model.getErrorMessage()))
        }
        
        if(model instanceof ShortUrlCreatedResponse){
            
            this.binding(new NewShortUrlCreatedState(
                model.getLongUrl(),
                model.getShortUrl(),
                'http://localhost:1234/find-url-detail?url-code='+model.getUrlCode()
            ))
        }    
     }
 }