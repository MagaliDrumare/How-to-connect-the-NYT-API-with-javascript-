var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=AI&api-key=03c9f77cd0524c1d8ccbbfcf747728bf";


function setup(){

noCanvas(); 
loadJSON(url,gotData);

}

function gotData(data){
	
	var articles = data.response.docs;
		for (var i=0; i < articles.length;i++) {
	 
				createElement('h1', articles[i].headline.main);
				createP(articles[i].snippet);
	
	}
	

//print(data.response.docs[3].headline.main);
}