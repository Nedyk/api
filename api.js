<script type="text/javascript">
$(document).ready(function(){


var topics = ["fruits", "cats", "dogs", "horses", "chickens"]; 

function createbutton(){
for(var i = 0; i<topics.length; i++){

          var searchItem =$("<button>");
             searchItem.addClass("topics"); 
           searchItem.attr("data-topic", topics[i]);
        searchItem = $(searchItem).prepend(userSearch); 
        $("#button").prepend(searchItem);
      
          $("#show-gif").append("#button"); 
            
};
};


function myApi() {
    $('.topics').on("click", function() {

      var top = $(this).attr("data-topic"); 
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        top + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
          .done(function(response) {
          var results = response.data; //data from API
          // console.log(results);

         
             for (var i = 0; i < results.length; i++) {
              //console.log(results[i]);

            // Creating and storing a div tag
            var topicDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var topicImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            topicImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the topicdIv
            topicDiv.append(p);
            topicDiv.append(topicImage);

            // Prependng the topicdIv to the HTML page in the ""#show-gif" div
            $("#show-gif").prepend(topicDiv);

          }
        });

        
        });
};
myApi();

$("#keyed").on("click", function(event){

   alert("click");
         
   //        count = ""
       event.preventDefault(); 
       var userSearch = $("#input").val().trim();

          alert($("#input").val());
          alert(userSearch);
         
   createbutton();
   myApi();

     }); 
   
  }); 
          
   


</script>