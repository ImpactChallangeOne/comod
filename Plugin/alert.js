console.log("Works");

var inputtext = {
                        "documents": [
                            {
                            "language": "en",
                            "id": "1",
                            "text": ""
                            }
                        ]
    };



inputtext.documents[0].text = document.getElementsByClassName('comment-simplebox-text')[0].innerHTML;
console.log(inputtext)

        $.ajax({
               method: "POST",
               url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
               headers: {"Ocp-Apim-Subscription-Key": "7eaf0a6c25f449a29581c1a86a536057"},
               contentType: "application/json",
               dataType: "json",
               data: JSON.stringify(inputtext)
               })
               .done(function( msg ) {
                    console.log("The sentiment score is: " + msg.documents[0].score);
                    if(msg.documents[0].score < 0.3) {
                    	document.getElementsByClassName('comment-simplebox-text')[0].innerHTML = '***'
                    }
                });


