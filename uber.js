class Uber {
    constructor(Km,Time = 0) {
      this.Km = Km;
      this.Time = Time;
    }
  
    Fare() {
      if (this.Km <= 2) {
        return 40 + " Rs";
      }
  
      this.Km = this.Km - 2;
      return (30 + (this.Km * 10) + (this.Time * 5) + " Rs");
    }
  }
  
  let Ride1 = new Uber(2);
  console.log(Ride1.Fare());
  
  let Ride2 = new Uber(10, 5);
  console.log(Ride2.Fare());