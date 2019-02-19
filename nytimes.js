



$("button").on("click", function () {
    var subject = $('#searchTerm').val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + subject + "&api-key=PTh1Nw8Ui4A4wmSkmVJNlmfXY6GAoHap";

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {

        console.log(response);

        var results = response.response.docs;

        // map method allows for deeper access to multiple arrays within objects
        // var results2 = results.map(function(item){
        //     return item.web_url;
        // })

        for (var i=0; i < results.length; i++) {
        
        var returnArticle = $("<div>");

        // console.log(returnArticle);

        $("#topArticles").prepend(results[i].web_url)
        };
    });
});