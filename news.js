let api = "597a94d33b3f4beb96d7f437f3c36510"

var url = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&' +
          'apiKey=';


var theRandomNumber = Math.floor(Math.random() * 10) + 1;
switch(theRandomNumber) {
	case 1:
		// Functionality
		url=url
        break;
	case 2:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='
    // Functionality
		break;
    case 3:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey='	
    // Functionality
		break;
    case 4:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey='

		// Functionality
		break;
    case 5:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey='

            // Functionality
        break;
    case 6:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey='

            // Functionality
        break;
    case 7:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey='

            // Functionality
        break;
    case 8:
        url = 'http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey='

            // Functionality
        break;
    case 9:
        url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='

            // Functionality
        break;
	default:
        url = 'http://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey='

		// Functionality
		break;
}


// let api = "597a94d33b3f4beb96d7f437f3c36510"

// var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&' +
//           'apiKey=';
url = url + api
var req = new Request(url);


const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    newsdata.articles.forEach((article) => {
			
			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `
			<img src="${article.urlToImage}"/>
            <h4>${article.title}</h4>
            `
      articlesDiv.appendChild(div)
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

