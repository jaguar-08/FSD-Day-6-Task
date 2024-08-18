
//Creating class Movie
class Movie {

    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    //for rating = PG if ratings is not mentioned
    if (typeof this.rating === "undefined") {
    this.rating = "PG";
    }
    }
   }
   //creating instance of class Movie
   let movie1 = new Movie("leo", "sevenscreen");
   let movie2 = new Movie("vikram", "rajkamal", "u/a");
   let movie3 = new Movie("vada chennai", "lyca", "A");
   let movie4 = new Movie("thunivu", "red gaints");
   
    //function to get title list if rating = PG
   function getPG(mov) {
    let defaultRating = []
    for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == "PG") {
    defaultRating.push(mov[i].title);
    }
    }
       return defaultRating;
       console.log(defaultRating)
   }
   let arr = [movie1, movie2, movie3, movie4]
   console.log(getPG(arr))
    //creating instance of class Movie
   let mov5 = new Movie("Casino Royale", "Eon Productions", "PG13");
   console.log(mov5);
   