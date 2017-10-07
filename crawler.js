var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(result.statusCode);
		console.log(result.uri);
        console.log(result.body)
		//console.log(result.statusCode);
	}
        /*$('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            c.queue(toQueueUrl);
        });*/
    }
});

fs = require("fs");
data = fs.readFileSync("nonoutlinksite.txt", {encoding: "utf8"});
sites = data.split("\n")
for (index in sites)
{
    console.log(sites[index]);
    c.queue(sites[index]);
}
//console.log(data);

//c.queue("http://www.google.com/404");

