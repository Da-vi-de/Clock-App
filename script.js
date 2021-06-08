$(document).ready(function() {

const button = $('#myButton');
const arrow = $('#arrow');




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

