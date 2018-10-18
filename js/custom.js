//Website
//My Lyrics
//What are the lyrics?
//input fields: artist, song, submit on click
//output field: lyrics
// We can use AJAX/jQuery or fetch to make the API call

//AJAX/JQuery Method
// $(document).ready(function(){

// //Group Pseudo Code
//     //Define our event listener
//         //Listening for a submit event, need to prevent the default
//         //Declare variables to store the artist and the title, aka the form inputs (we need to extract these values)
//     //Ajax call
//         //get request
//         //input url: two strings from the form, concatenate with our created variables
//         //callback: success -> console log the response
//         //callback: error -> console log the error

// // Group Code
// $("#find-lyrics").on("submit", function(e){
//    //Listening for a submit event, need to prevent the default
//     e.preventDefault(); // parentheses necessary for methods
//     $(".display-lyrics").text("loading...");
//     var artist = $("#artist").val();
//     var title = $("#title").val();

// //My Code
//     // var artist = "";
//     // var title = hyphenTitle("");

//     // function hyphenTitle(str) {
//     //     var arrayWords = str.split(" ");
//     //     var newString = "";
//     //     for (var i = 0; i < arrayWords.length; i++){
//     //         if(arrayWords.length === 1){
//     //             newString = arrayWords[0];
//     //         }else{
//     //             newString = arrayWords.join("-");
//     //         }
//     //     }
//     //     //need to return the item to make it accessible outside the conditional loop
//     //     return newString;
//     // }

//     $.ajax({
//         type: "GET",
//         url: "https://api.lyrics.ovh/v1/" + artist + "/" + title + "", //optional to end with variable or with double quotes to close the string
//         dataType: "json",
//         success: function(data) { //always one parameter, no more than one parameter
//             // console.log(data); //always check to see how things look in the first place
//             $(".display-lyrics").html("<p>" + data.lyrics + "</p>"); //.html replaces the text every time
//         },
//         error: function(xhr, status, e) {
//             // console.log(status, e); //always check to see how things look in the first place
//             $(".display-lyrics").html("<p>Please enter a valid song or artist</p>");
//         }
//     }); 
// });
// });

//Fetch Method
$(document).ready(function(){
   
    $("#find-lyrics").on("submit", function(e){
        //Listening for a submit event, need to prevent the default
         e.preventDefault(); // parentheses necessary for methods
         $(".display-lyrics").text("loading...");
         var artist = $("#artist").val();
         var title = $("#title").val();
         var url = "https://api.lyrics.ovh/v1/" + artist + "/" + title + ""; //optional to end with variable or with double quotes to close the string

        fetch(url).then(function(response){ // ES5

        // fetch(url).then(response =>{ //ES6

            var processedLyrics = response.json();
            return processedLyrics;
        })
        .then(function(processedLyrics) {
            $(".display-lyrics").html("<p>" + processedLyrics.lyrics + "</p>");
            // if there is poor API documentation and we do not know what the name of the array is (e.g., "message" in this case), then we would need to:
            //console.log(processedResponse);
        })
        .catch(function(error){ //.catch at the end of all .then() because you can have as many .then() as you want

            // fetch(url).then(error =>{ //ES6

            console.log(error);
            alert("Please enter a valid song/artist");
        });
    });

});
