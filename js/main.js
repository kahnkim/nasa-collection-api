// Build a nasa apod api using objects, async/await
// When user clicks on the button call the fetch function
// The name, picture and description should appear

const apod = {
    async nasaApi(){
        let date = document.querySelector('input').value
        let url = `https://api.nasa.gov/planetary/apod?api_key=qK6wg2vhqJCwaJlBEXZSbWy6JmayigDxp7jDbVaf&date=${date}&thumbs=true`
        // start the fetch api to get a json object back
        let getFetch = await fetch(url)
        let resultFetch = await getFetch.json()  
        if(resultFetch.media_type === 'video'){
            document.querySelector('img').style.display = 'none'
            document.querySelector('iframe').style.display = 'block'
            document.querySelector('h1').innerHTML = resultFetch.title
            document.querySelector('iframe').src = resultFetch.url
            document.querySelector('h3').innerHTML = resultFetch.explanation
        }else{
            document.querySelector('h1').innerHTML = resultFetch.title
            document.querySelector('img').src = resultFetch.hdurl
            document.querySelector('h3').innerHTML = resultFetch.explanation
        }
        console.log(resultFetch);
    }
}
document.querySelector('iframe').style.display = 'none'
document.querySelector('button').addEventListener('click', apod.nasaApi)