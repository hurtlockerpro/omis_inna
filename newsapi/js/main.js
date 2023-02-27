// 4a5de1e54b304bf2909af12bf979c242
// https://newsapi.org/v2/everything?
// q=tesla&
//from=2023-01-27&
//apiKey=4a5de1e54b304bf2909af12bf979c242
//sortBy=publishedAt&


/** @var string Api for an API newsapi.org */
let myApiKey = '4a5de1e54b304bf2909af12bf979c242'

let options = {
    q: 'tesla',
    from: '2023-01-27',
    sortBy: 'publishedAt',
    apiKey: myApiKey
}

let apiURL = 'https://newsapi.org/v2/everything'

let newsRow = document.getElementById('newsRow')

function generateApiURL(options = {})
{
    let newOptions = []
    Object.entries(options).forEach(option => {
        newOptions.push(option[0] + '=' + option[1]) //sortBy=publishedAt
    })
    return apiURL + '?' + newOptions.join('&')
}


console.log('URL 1: ' + generateApiURL(options))
// var 1
/*
options = {
    q: 'bitcoin',
    from: '2023-01-28',
    sortBy: 'publishedAt',
    apiKey: myApiKey
}
*/

// var 2
//options.q = 'bitcoin'
console.log('URL 2: ' + generateApiURL(options))


function getNewsApiData(url){

    if (url.trim().length == 0 || url.trim().substring(0, 8) != 'https://'){
        // console.error('URL is empty. Try to fill it!!!')
        throw new Error('URL is empty. Try to fill it!!!') 
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)


        data.articles.forEach(news => {
            let col = generateHtmlTag('div')
            col.classList.add('col')
            col.innerHTML = generateNewsCard(news.title, news.description, news.urlToImage)

            newsRow.append(
                col
            ) 
        })
        
    })

}

let url = generateApiURL(options)
getNewsApiData(url)



function generateHtmlTag(tagName, value, options = {}){
    let el = document.createElement(tagName)
    el.innerHTML = value

    if (options !== undefined){
        Object.entries(options).forEach(function(option){
            el.setAttribute(option[0], option[1])
        })
    }

    return el
}


function generateNewsCard(newsTitle, newsDescription, newsImageURL){

    let img = generateHtmlTag('img')
    img.src = newsImageURL

    let h5 = generateHtmlTag('h5', newsTitle)
    h5.classList.add('card-title')

    let cardText = generateHtmlTag('p', newsDescription)
    cardText.classList.add('card-text')

    let cardBody = generateHtmlTag('div', h5.outerHTML + cardText.outerHTML)
    cardBody.classList.add('card-body')

    let card = generateHtmlTag('div', img.outerHTML + cardBody.outerHTML)
    card.classList.add('card')

    return card.outerHTML 
}


console.log(generateNewsCard('a', 'd', 'c'))