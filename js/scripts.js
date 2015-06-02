function Ticket(movie, time, customer){
  this.movieTitle = movie.movieTitle
  this.releaseType = movie.releaseType
  this.showtime = time
  this.age = customer.age
};

Ticket.prototype.price = function() {
  var tPrice = 8;
  if (this.showtime >= 17) {
    tPrice += 2;
  };
  if (this.age >= 65) {
    tPrice -= 3;
  };
  if (this.releaseType !== "first") {
    tPrice -= 2;
  };
  return tPrice;
};

function Movie(name, times, releaseType){
  this.movieTitle = name;
  this.times = times;
  this.releaseType = releaseType
};

function Customer(age){
  this.age = age;
};



"use strict";


//jQuery
$( document ).ready(function() {

});
