$(document).ready(function(){

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

            

    $( "#submit" ).click(function() {
                
        inputtext.documents[0].text = $("#input").val();

        console.log(inputtext[0]["text"])

        console.log(JSON.stringify(inputtext));

        $.ajax({
               method: "POST",
               url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
               headers: {"Ocp-Apim-Subscription-Key": "7eaf0a6c25f449a29581c1a86a536057"},
               contentType: "application/json",
               dataType: "json",
               data: inputtext.documents[0].text
               })
               .done(function( msg ) {
                    console.log(msg);
                    $("#response").text("The sentiment score is: " + msg.documents[0].score);
                });
            });

});