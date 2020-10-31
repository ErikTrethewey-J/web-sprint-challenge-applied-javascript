// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// const entryPoint = document.querySelector(".cards-container")

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res)    
    })
      .catch(err => {
        console.log(err)
      })
      
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//

// const entryPoint = document.querySelector(".cards-container")

function article(obj){
    const divCard = document.createElement('div')
    const divHeadLine = document.createElement('div')
    const divAuthor = document.createElement('div')
    const divImg = document.createElement('div')
    const image = document.createElement('img')
    const spanName = document.createElement('span')
        
        divCard.classList.add('card')
        divHeadLine.classList.add('headline')
        divAuthor.classList.add('author')
        divImg.classList.add('img-container')
        
        divHeadLine.textContent = `${obj.headline}`
        image.src = `${obj.authorPhoto}`
        spanName.textContent = `${obj.authorName}`
        
        divCard.appendChild(divHeadLine)
        divCard.appendChild(divAuthor)
        divAuthor.appendChild(divImg);
        divImg.appendChild(image);
        divAuthor.appendChild(spanName)



    divCard.addEventListener('click', (event => {
        console.log(obj.headline)})
    )
}
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios 
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
      const articleContainer = document.querySelector('.cards-container')
            for (const key in res.data.articles){
                const title = res.data.articles[key];
                title.forEach(articleCard => {
                    console.log(articleCard);
                    const articleElement = article(articleCard);
                    articleContainer.appendChild(articleElement);  
                })
            }
    })
    .catch(err => {
        console.log(err)
    })
