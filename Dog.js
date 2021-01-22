class Dog{
    constructor(){}
          
    updateValue(){
        var dogFood = database.ref('food');
        dogFood.on("value",function (data){
            foodS = data.val();
        });
      }

     writeValue(x){
        if(x <=0 ){
          x=0
        }else{
          x=x-1;
        }
        database.ref('/').update({ 'food' : x });
    }
}