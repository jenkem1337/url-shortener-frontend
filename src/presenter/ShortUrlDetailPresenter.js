import ErrorResponse from "../model/ErrorResponse.js"
import ShortUrlDetailResponse from "../model/ShortUrlDetailResponse.js"
import InitialState from "../view/state/ShortUrlDetail/InitialShortUrlDetailState.js"
import ShortUrlDetailFetchedState from "../view/state/ShortUrlDetail/ShortUrlDetailFetchedState.js"
import HasErrorState from "../view/state/ShortUrlDetail/ShortUrlDetailHasErrorState.js"


export default class ShortUrlDetailPresenter {
    constructor(service){
        this.service = service
    }
    setView(view){
        this.view = view
        this.binding(new InitialState())
    }
    binding(state){
        this.view.setViewState(state)
    }

    async sendUrlCode(urlCode){
        console.log(urlCode)
        let model = await this.service.findUrlDetailByUrlCode(urlCode)
        
        if(model instanceof ErrorResponse){
            this.binding(new HasErrorState(urlCode ,model.getErrorMessage()))
        }
        if(model instanceof ShortUrlDetailResponse){
            this.binding(new ShortUrlDetailFetchedState(
                model.getLongUrl(),
                model.getShortUrl(),
                model.getHowManyTimeClicked(),
                ''
            ))
        }

    }

    async handleUrlCodeWithQueryString(){
        let searchParam = new URLSearchParams(location.search)
        if(searchParam.has('url-code')){
            let urlCode = searchParam.get('url-code')
            let model = await this.service.findUrlDetailByUrlCode(urlCode)
            if(model instanceof ErrorResponse){
                this.binding(new HasErrorState(urlCode, model.getErrorMessage()))
            }
            if(model instanceof ShortUrlDetailResponse){
                this.binding(new ShortUrlDetailFetchedState(
                    model.getLongUrl(),
                    model.getShortUrl(),
                    model.getHowManyTimeClicked(),
                    urlCode,
                ))
            }

        }
        
    }
}