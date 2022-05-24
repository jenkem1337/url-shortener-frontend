import ShortUrlApiClient from "../data_access/ShortUrlApiClient.js"
import CreateNewShortUrlPresenter from "../presenter/CreateNewShortUrlPresenter.js"
import ShortUrlService from "../service/ShortUrlService.js"
import CreateNewShortUrlView  from "../view/CreateNewShortUrlView.js"
import ShortUrlDetailView from "../view/ShortUrlDetailView.js"
import ShortUrlDetailPresenter from "../presenter/ShortUrlDetailPresenter.js"
import PageDoesntExist from "../view/RouteDoesntExist.js"


export default class Dispatcher{
    constructor(){
        this.map = new Map([
            ['/create-short-url', new CreateNewShortUrlView(new CreateNewShortUrlPresenter(new ShortUrlService(new ShortUrlApiClient())))],
            ['/find-url-detail', new ShortUrlDetailView(new ShortUrlDetailPresenter(new ShortUrlService(new ShortUrlApiClient())))]
        ])
        this.initEventListeners()
        this.route()
    }
    initEventListeners(){
        document.addEventListener('DOMContentLoaded' ,()=> {
            document.body.addEventListener('click', (e)=>{
                if(e.target.matches('[data-dispatch]')){
                    e.preventDefault()
                    this.redirect(e.target.href)
                }
            })
            
        })
        
        window.addEventListener('popstate' ,() => this.route())
    }

    redirect(path){
    
        history.pushState(null,null,path)
        this.route()
    }
    route(){
            let view
            if(!this.map.has(location.pathname)){
                view = new PageDoesntExist()
                document.querySelector('.root').innerHTML = view.getHTML()
                view.initViewAction()
            }
            view = this.map.get(location.pathname)
            document.querySelector('.root').innerHTML = view.getHTML()
            view.initViewAction()
    }

    
}
