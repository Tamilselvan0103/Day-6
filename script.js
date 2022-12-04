// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)


// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movies{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
}
}

var a = new movies("ram", "avm", "PG15")
// console.log(a.title)
// console.log(a.studio)
// console.log(a.rating)

// output = ram, avm, PG15
// -------------------------------------------------------------------------------------------------------------------------------
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
       if(rating==undefined)
       {
           this.rating = "PG";
       }
       else
       {
           this.rating = rating;
       }
       };
}

var a = new movies("ram", "avm", "PG15")
var b = new movies("ashok", "abm")
// console.log(a,b)

// output = movies {title: 'ashok', studio: 'abm', rating: 'PG'} , movies {title: 'ram', studio: 'avm', rating: 'PG15'} 
// -------------------------------------------------------------------------------------------------------------------------------

// c) .Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class movies{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
       if(rating==undefined)
       {
           this.rating = "PG";
       }
       else
       {
           this.rating = rating;
       }
       }
       getPG(arr){
        var result = [];
        for(var i=0; i<arr.length; i++){
            if(arr[i].rating == "PG")
            {
                result.push(arr[i]);
            }
       }
       return result;
       }

}

var a = new movies("ram", "avm", "PG15")
var b = new movies("ashok", "abm")
var c = new movies("casino royale", " Eon Productions", "PG13")
var arr = [a,b,c]
// console.log(a.getPG(arr))

// // output = 
// // movies {title: 'ashok', studio: 'abm', rating: 'PG'}

// -------------------------------------------------------------------------------------------------------------------------------


// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle() {
        return this.radius;
    }
    get colorCircle() {
        return this.color;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
return `"circle[radius = ${this.radius}, color = ${this.color}]"`; 
}
get areaCircle(){
    return Math.PI * this.radius* this.radius
}
get circumferenceCircle(){
    return 2 * Math.PI * this.radius
}
}

var a = new Circle("1.0","red")
// console.log(a.radiusCircle);
// console.log(a.colorCircle);
a.radiusCircle = 2.2
// console.log(a.radius)
a.colorCircle = "yellow"
// console.log(a.color);
// console.log(a.toString)
// console.log(a.areaCircle)
// console.log(a.circumferenceCircle)

// output = 1.0
// red
//  2.2
// yellow
// "circle[radius = 2.2, color = yellow]"
//  15.205308443374602
// 13.823007675795091

// -------------------------------------------------------------------------------------------------------------

// 3. Write a “person” class to hold all the details.

class person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
var a = new person("Tamil","29","male")
// console.log(`name : ${a.name} age : ${a.age} gender : ${a.gender}`)

// output = name : Tamil age : 29 gender : male

// -------------------------------------------------------------------------------------------------------------

// 4. write a class to calculate the uber price.

class uberprice{
    constructor(baseprice,kilometre,tax){
        this.baseprice=baseprice;
        this.kilometre=kilometre;
        this.tax=tax;
    }
}

const price = new uberprice(100,10,200); 

// console.log(price);

// output = uberprice {baseprice: 100, kilometre: 10, tax: 200}