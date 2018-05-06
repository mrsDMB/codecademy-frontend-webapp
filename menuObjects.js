let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    set appetizers(appetizerIn){},
    get appetizers(){},
    set mains(mainIn){},
    get mains(){},
    set desserts(dessertIn){},
    get desserts(){},
    get courses(){
        let courseSubset = {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
        return courseSubset;
    },
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        let dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        // let mealPrice = parseFloat(appetizer['price'])+parseFloat(main['price'])+parseFloat(dessert['price']);
        // mealPrice = mealPrice.toFixed(2);
        let mealPrice = appetizer['price']+main['price']+dessert['price'];
        mealPrice = mealPrice.toFixed(2);
        console.log("Your meal: "+appetizer.name+", "+main.name+", "+dessert.name);
        console.log("Total cost: $"+mealPrice);
        return "Your meal: "+appetizer.name+", "+main.name+", "+dessert.name+" and the Total cost: $"+mealPrice ;
    }


};

let appet = "appetizers";
let entree = "mains";
let sweets = "desserts";
menu.addDishToCourse(appet, "Sweet Potato Fries", 4.95);
menu.addDishToCourse(appet, "Skins", 8.95);
menu.addDishToCourse(appet, "Spinach Dip", 9.95);
menu.addDishToCourse(entree, "Spahetti", 8.95);
menu.addDishToCourse(entree, "Steak", 11.95);
menu.addDishToCourse(entree, "Grilled Cheese", 7.95);
menu.addDishToCourse(sweets, "Cream Cheese Pastry", 4.95);
menu.addDishToCourse(sweets, "Ice Cream", 2.95);
menu.addDishToCourse(sweets, "Popcicle", 1.95);
let meal = menu.generateRandomMeal();
console.log(meal);