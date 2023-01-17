
//1.Class Movie
/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movieDetails = new Movie("Love Today", "AGS Productions", "PG-16");

console.log(movieDetails);

/*OUTPUT:
rating: "PG-16"
studio: "AGS Productions"
title: "Love Today"*/

//----------------------------------------------------------------------------

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.


  class Movies {
    constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let movie1 = new Movies("Love Today", "AGS Productions");
    console.log(movie1); 
    /*OUTPUT:
    rating: "PG"
    studio: "AGS Productions"
    title: "Love Today"*/
    
    let movie2 = new Movies("Love Today", "AGS Productions", "PG-16");
    console.log(movie2); 
    /*OUTPUT:
    rating: "PG-16"
    studio: "AGS Productions"
    title: "Love Today"*/

//----------------------------------------------------------------------------

/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Moviie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let result = input.filter(movie => movie.rating === "PG");
        return result;
    }
}

let moviie1 = new Moviie("Movie 1", "Studio 1", "PG");
let moviie2 = new Moviie("Movie 2", "Studio 2", "R");
let movie3 = new Moviie("Movie 3", "Studio 3", "PG");
let movie4 = new Moviie("Movie 4", "Studio 4", "PG-13");
let movie5 = new Moviie("Movie 5", "Studio 5", "PG");
let movie6 = new Moviie("Movie 6", "Studio 6", "PG-16");
let movie7 = new Moviie("Movie 7", "Studio 7", "PG");

let movieArray = [moviie1, moviie2, movie3, movie4, movie5, movie6, movie7];
let pgMovies = Moviie.getPG(movieArray);
console.log(pgMovies); 

// Output: [Movie { title: 'Movie 1', studio: 'Studio 1', rating: 'PG' }, 
//          Movie { title: 'Movie 3', studio: 'Studio 3', rating: 'PG' }, 
//          Movie { title: 'Movie 5', studio: 'Studio 5', rating: 'PG' }
//          Movie { title: 'Movie 7', studio: 'Studio 7', rating: 'PG' }]

//----------------------------------------------------------------------------



/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

    /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/

//-----------------------------------------------------------------------------------------------------------------------------------------

// 2. Circle

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  toString() {
    return `Circle [radius = ${this._radius} , color = ${this._color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle1 = new Circle(5, "blue");
const circle2 = new Circle(2, "Yellow");

console.log(circle1.toString());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());

console.log(circle2.toString());
console.log("Area:", circle2.getArea());
console.log("Circumference:", circle2.getCircumference());

/*OUTPUT:

//Circle1 Data
Circle [radius = 5 , color = blue]
Area: 78.53981633974483
Circumference: 31.41592653589793

//Circle2 Data
Circle [radius = 2 , color = Yellow]
Area: 12.566370614359172
Circumference: 12.566370614359172*/

//-----------------------------------------------------------------------------------------------------------------------------------------


//3.Write a person class to hold all the details 

class Person {
  constructor(firstName, lastName, age, email, mobile, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
  }
  getPersonDetails() {
    return `Name: ${this.firstName} ${this.lastName} 
Age: ${this.age}
Email: ${this.email}
Mobile: ${this.mobile}
City: ${this.city}`;
  }
}

let person1 = new Person("Swetha", "Sakthi", 22, "swetha@gmail.com", 0123456722, "Karur");
let person2 = new Person("Disha", "yadav", 23, "disha@gmail.com", 1234567890, "Punjab");
console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());

/*OUTPUT:

//Person1 Detils

Name: Swetha Sakthi 
Age: 22
Email: swetha@gmail.com
Mobile: 123456789
City: Karur

//Person2 Details

Name: Disha yadav 
Age: 23
Email: disha@gmail.com
Mobile: 1234567890
City: Punjab
*/

//-----------------------------------------------------------------------------------------

//4.Write a class to calculate the uber price.

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 2, 1, 0.25);
  console.log(myUber.calculatePrice());

  
  