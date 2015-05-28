/* Matt's Dragon Slayer Game */


/*Variables */

var slaying = true;
var youHit = Math.floor(Math.random()* 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

/*Loops*/

while(slaying) {
      
    if(youHit = true) { 
        
        totalDamage += damageThisRound;
        
        if(totalDamage >= 4) {  console.log("Congrats you are amazing. You killed the dragon.");
        
        slaying = false;
        
        }
        
        else { youHit = Math.floor(Math.random()* 2)};
    
}

    else {
        
        console.log("The dragon beat you to death.");
        slaying = false;
    };
    
    
    
};
