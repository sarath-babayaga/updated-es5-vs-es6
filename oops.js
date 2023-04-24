
//Movie - Task

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

function getPG(movies) {
  const pgMovies = [];
  for (const movie of movies) {
    if (movie.rating === "PG") {
      pgMovies.push(movie);
    }
  }
  return pgMovies;
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


//*************************************************** */

//Person - Task

class Person {
  constructor(firstName, lastName, dateOfBirth, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.phone = phone;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//******************************************************** */

//Uber price - Task

class UberPricing {
  constructor(distanceInKm, timeInMinutes) {
    this.distanceInKm = distanceInKm;
    this.timeInMinutes = timeInMinutes;
  }

  getPrice() {
    const baseFare = 2.50;
    const ratePerMinute = 0.30;
    const ratePerKm = 1.60;
    const distanceCost = ratePerKm * this.distanceInKm;
    const timeCost = ratePerMinute * this.timeInMinutes;
    const totalPrice = baseFare + distanceCost + timeCost;
    return totalPrice.toFixed(2);
  }
}
