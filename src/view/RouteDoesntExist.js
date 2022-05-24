export default class PageDoesntExist {
    constructor(){
    }
    initViewAction(){
        document.querySelector('title').textContent = 'Page Doesnt Exist'

    }
    getHTML(){
        return `
        <h1>This page doesnt exist</h1>
        <a href="http://localhost:1234/create-short-url" data-dispatch>Create Short Url</a>
        <a href="http://localhost:1234/find-url-detail" data-dispatch>Find Url Detail</a>

        `
    }
}