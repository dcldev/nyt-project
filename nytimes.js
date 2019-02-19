



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
            var articleTitle = results[i].headline.main;
            var articleSnippet = results[i].snippet;
            var articleAuth = results[i].byline.original
            var articleUrl = results[i].web_url;

            $(".articleLister").append(`
                <div class="card mb-3" style="max-width: 760px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="t_logo_291_black.png" class="card-img" alt="nytlogo">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${articleTitle}</h5>
                        <p class="card-snip">${articleSnippet}</p>
                        <p class="card-auth">${articleAuth}</p>
                        <a href="${articleUrl}">Click Here for Article</a>
                    </div>
                  </div>
                </div>
              </div>`
                );

            

            // $(".card-title").html(articleTitle)
            // $(".card-snip").html(articleSnippet)
            // $(".card-auth").html(articleAuth)
            // $("a").attr("href", articleUrl)

            
        };
    });
});

