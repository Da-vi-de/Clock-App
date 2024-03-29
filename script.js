$(document).ready(function() {

const refresh = $('#refresh');
const button = $('#myButton');

// Get the time and greeting
function getTime() {

   let time = new Date();
   let hours = time.getHours();
   let minutes = time.getMinutes();
   const icon = $('#icons');
   const extraInfo = $('#extraInfo');
  
   let greeting = '';

   if(hours >= 5 && hours <= 11) {
     greeting = 'morning';
  } else if(hours >= 12 && hours <= 17) {
     greeting = 'afternoon';
  } else {
     greeting = 'evening';
  };
  $('#greeting').text(`good ${greeting}, it's currently`);

   //Change background and icon
   if(hours >= 6  && hours <= 17) {
   $('div.background').addClass('day-bg');
   } else {
      $('div.background').removeClass('day-bg');
      $('div.background').addClass('night-bg');
      
      icon.attr("src", "./assets/desktop/icon-moon.svg");
      icon.attr("alt", "moon icon");
      extraInfo.css("background-color", "#303030");
      extraInfo.css("color", "#ffff");
   };

   if(minutes < 10) {minutes = '0' + minutes};

   $('#time').text(`${hours}:${minutes}`);

   //Update time
	let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;
   setTimeout(getTime,interval);
};

// Get the location through Geolocation API
function getLocation() {

   const location = $('#location');
   
   $.getJSON("https://freegeoip.app/json/", function(data) {
      location.text(data.country_name);
   }).fail(function() { 
      console.log( "error" )
   });
};

//Get Extra info based on user ip address from an API
function getTimezoneAndInfo() {

   const timeZone = $('#timeZone');
   const dayOfYear = $('#yearDay');
   const dayOfWeek = $('#weekDay');
   const numberOfWeek = $('#weekNumber');

   $.getJSON("https://worldtimeapi.org/api/ip", function(data) {

      timeZone.text(data.timezone);
      dayOfYear.text(data.day_of_year);
      dayOfWeek.text(data.day_of_week);
      numberOfWeek.text(data.week_number);
   }).fail(function() { 
      console.log( "error" )
   });
};

// Get a random quote from an API
refresh.on('click', function(e) { 
   e.preventDefault();

   const quote = $('#quote');
   const author = $('#author');

   $.getJSON("https://api.quotable.io/random", function(data) {

      quote.text(`"${data.content}"`).find('p');
      author.text(data.author);
   }).fail(function() { 
      console.log( "error" )
   });
});

// Show and Hide extra content
   button.on('click', function(e) {
      e.preventDefault();

      const arrow = $('#arrow');

        if(this) {
            $("div.info-detail-container").toggleClass('hide-detail');
            $("header").toggleClass('hide-detail');
        };

        button.find('span').text() === "Less" ? button.find('span').text("More") 
        : button.find('span').text("Less");

        arrow.toggleClass('rotate');
   });

   getTime();
   getTimezoneAndInfo();
   getLocation();
});
