export default class ShortUrlApiClient {
    async createNewShortUrl(longUrl) {
        
        let response = await fetch("http://localhost:8000/api/v1/save-url", {
            method: "post",
            headers:  {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({longUrl})
        })
        return await response.json()

    }
    async findUrlDetailByUrlCode(urlCode){
        let response = await fetch(`http://localhost:8000/api/v1/find-by-urlcode/${urlCode}`, {
            method:"get",
            headers: {
                "Content-type": "application/json"
            }
        })
        return await response.json()
    }
}