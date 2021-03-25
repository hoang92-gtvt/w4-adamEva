class Apple{
    constructor(){
        this.weight=10;
        this.status=true;// kiem tra qua tao da chin
    }
    isEaten(number_isEaten){
        this.weight -= number_isEaten;
    }
    getWeight(){
        return this.weight;
    }
    getStatus(){
        return this.status
    }
}