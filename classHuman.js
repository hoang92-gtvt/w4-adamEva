class Human{
    constructor(_name, _male,_weight ){
        this.name = _name;
        this.gender = _male;
        this.weight = _weight;

    }
    getName(){
        return this.name
    }
    getGender(){
        return this.gender
    }
    getWeight(){
        return this.weight
    }
    eatApple(apple_obj,number){
        apple_obj.isEaten(number)
    }
    checkApple(apple_obj){
        return apple_obj.getWeight()
    }
}