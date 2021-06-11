$(document).ready(function() {

const quote = $('#quote');
const author = $('#author');
const refresh = $('#refresh');
const button = $('#myButton');
const arrow = $('#arrow');


// Get a random quote from an API
refresh.on('click', function(e) { 
   e.preventDefault();

   $.getJSON("https://api.quotable.io/random", function(data) {
      quote.text(data.content).find('p');
      author.text(data.author);
   });
});

// Show and Hide extra content
   function hideDetail() {
        if(this) {
            $("div.info-detail-container").toggleClass('hide-detail');
            $("header").toggleClass('hide-detail');
        };

        button.find('span').text() === "Less" ? button.find('span').text("More") 
        : button.find('span').text("Less");

        arrow.toggleClass('rotate');
   };
   button.click(hideDetail);


});

   /*
  
   */

