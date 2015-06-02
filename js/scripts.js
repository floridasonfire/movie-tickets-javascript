function Ticket(movie, time, customer){
  this.movieTitle = movie.movieTitle
  this.releaseType = movie.releaseType
  this.showtime = time
  this.age = customer.age
};

Ticket.prototype.price = function() {
  var tPrice = 10;
  if (this.showtime <= 17) {
    tPrice -= 2;
  };
  if (this.age >= 65) {
    tPrice -= 3;
  };
  if (this.releaseType !== "first") {
    tPrice -= 2;
  };
  return tPrice;
};

function Movie(name, releaseType){
  this.movieTitle = name;
  this.releaseType = releaseType
};

function Customer(age){
  this.age = age;
};


"use strict";


//jQuery
$( document ).ready(function() {
  $(".movie-form").submit(function(event){
      event.preventDefault();
      var inputArray = $(".movie-title").val().split("|");
      var movieName = inputArray[0];
      var releaseType = inputArray[1];
      var movie = new Movie (movieName, releaseType);
      var cust = new Customer (parseInt($("#cust_age").val()))
      var time = parseInt($(".movie-time").val())
      var ticket = new Ticket(movie, time, cust)
      var priceOfTicket = ticket.price

      var ageDiscount = "$0"
      var matineeDiscount = "$0"
      var runTypeDiscount = "$0"

      if(ticket.age >= 65)  {
        ageDiscount = "$3"
      };
      if(ticket.showtime <= 17) {
        matineeDiscount = "$2"
      };
      if(ticket.releaseType !=="first") {
        runTypeDiscount = "$2"
      };

      var findPrice = function(){
        $(".show-price").show();
        $(".title").text(movieName);
        $(".age-discount").text(ageDiscount);
        $(".matinee-discount").text(matineeDiscount);
        $(".run-type-discount").text(runTypeDiscount);
        $(".total-price").text(priceOfTicket);
      };

      findPrice();
  });
});
