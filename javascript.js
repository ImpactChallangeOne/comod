        $( document ).ready(function() {

            var inputtext = {
                                "documents": [
                                    {
                                    "language": "en",
                                    "id": "1",
                                    "text": ""
                                    }
                                 ]
                            }

            

            $( "#submit-text" ).click(function() {
                
                inputtext.documents[0].text = $("#inputtext").val();

                console.log(JSON.stringify(inputtext));
                console.log("turing")

                $.ajax({
                method: "POST",
                url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
                headers: {"Ocp-Apim-Subscription-Key": "7eaf0a6c25f449a29581c1a86a536057"},
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(inputtext)
                })
                .done(function( msg ) {
                    $("#response").text("The sentiment score is: " + msg.documents[0].score);
                });
            });
        });