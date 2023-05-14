"use strict";
// Function
// call and apply method
// we can manually set the value of "this" keyword using "call and apply"

let mainPlain = {
  airline: "Air India",
  iataCode: "F4",
  booking: [],
  book: function (flightName, name) {
    console.log(
      `${name} Booked Flight on ${this.airline} with flight Number ${this.iataCode} ${flightName}`
    );
    this.booking.push({
      flight: `${this.airline}`,
      name: name,
      flightNumber: `${this.iataCode} ${flightName}`,
    });
  },
};

mainPlain.book(530, "Rasel");

mainPlain.book(652, "Ibn Intiaz");
console.log(mainPlain);

let childPlain = {
  airline: "Child Plain",
  iataCode: "CP",
  booking: [],
};

let book = mainPlain.book;
book.call(childPlain, 569, "Jack");

book.call(mainPlain, 699, "Rose");

book.apply(childPlain, [510, "Tom Hank"]);
console.log(childPlain);
