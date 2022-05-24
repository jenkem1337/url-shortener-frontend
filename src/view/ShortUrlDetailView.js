export default class ShortUrlDetailView {
    constructor(presenter){
        this.presenter = presenter
        this.presenter.setView(this)
    }
    async sendUrlCode(e){
        e.preventDefault()
        let urlCode = document.querySelector('#url-code-input').value
        
        await this.presenter.sendUrlCode(urlCode)
        this.state.handleRequest()
    }
    async handleUrlCodeWithQueryString(){
        await this.presenter.handleUrlCodeWithQueryString()
        this.state.handleQueryStringRequest()
    }
    setViewState(state){
        this.state = state
    }
    initViewAction(){
        document.querySelector('title').textContent = 'Short Url Detail'
        document.querySelector('#url-code-button').addEventListener('click', (e) => this.sendUrlCode(e))
        this.handleUrlCodeWithQueryString()
    }
    getHTML(){
        return `<h1>Find Short Url</h1>
        <a href="http://localhost:1234/create-short-url" data-dispatch>Create Short Url</a>

        <p id="error-message"></p>
        <form action="" method="get">
            <input type="text" placeholder="find short url by urlcode" id="url-code-input">
            <button id="url-code-button">Submit</button>
        </form>
        <div id="url-details">
            <ul id="url-detail-list">

            </ul>
        </div>
        `

    }
}