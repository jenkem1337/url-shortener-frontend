export default class CreateNewShortUrlView {
    constructor(presenter){
        this.presenter = presenter
        this.presenter.setView(this)
    }

    async sendLongUrl(e){
        e.preventDefault()
        let longUrl = document.querySelector("#long-url-input").value
        await this.presenter.sendLongUrl(longUrl)
        
        this.state.handleRequest()
    }
    initViewAction(){
        document.querySelector('title').textContent = 'Create New Short Url'
        document.querySelector("#long-url-button").addEventListener("click", (e) => this.sendLongUrl(e))
    }
    setViewState(state){
        this.state = state
    }

    getHTML(){
        return `
        <h1>Create Short Url</h1>
        <a href="http://localhost:1234/find-url-detail" data-dispatch>Find Url Detail</a>

        <p id="error-message"></p>
        <form action="" method="post">
            <input type="text" placeholder="long url" id="long-url-input">
            <button id="long-url-button">Submit</button>
        </form>
        <div id="created-url-details">
            <ul id="url-detail-list">

            </ul>
        </div>
    `
    }
}