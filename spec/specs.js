describe('Movie', function(){
  it("has a title and playtimes", function(){
    var testMovie = new Movie("The Labyrinth", "first")
    expect(testMovie.movieTitle).to.equal("The Labyrinth")
    expect(testMovie.releaseType).to.eql("first")

  });
});

describe('Ticket', function() {
  it("has a time, movie name and release type, and customer age", function() {
    var testMovie = new Movie("Test", "first")
    var testCust = new Customer(88)
    var testTicket = new Ticket(testMovie, 1, testCust);
    expect(testTicket.showtime).to.eql(1);
    expect(testTicket.releaseType).to.equal("first");
    expect(testTicket.age).to.eql(88);
  });
});


describe('Customer', function(){
  it("has an age", function(){
    var testCust = new Customer(53)
    expect(testCust.age).to.eql(53);
  });
});

describe('price', function(){
  it("calculates the price of a ticket", function(){
    var testMovie = new Movie("Test", "first")
    var testCust = new Customer(88);
    var testTicket = new Ticket(testMovie, 1, testCust);
    expect(testTicket.price()).to.equal(5);

  });
});
