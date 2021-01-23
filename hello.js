


function KilomiterTometer (kilometer){
    var meter = 1000*kilometer;
    return meter;
}
var  outputmiter = KilomiterTometer(10);
console.log  (Math.round(outputmiter) ) ;





//laptop calculator count

var budgetCalculator = [50,100,500];
function getArraysum (budgetCalculator){
    var sum = 0;
for ( var   i=0; i<budgetCalculator.length; i++){
    var element = budgetCalculator[i];
    sum = sum + element;
}
return sum;
}
var result = getArraysum(budgetCalculator);
console.log ( "how much budget:",  result);




// mega fraind prblem

function  megaFriend  (fraindsname ){
    var max = fraindsname[0];  
    for (var i=0; i<fraindsname.length;i++){
        var  element = fraindsname[i];
        if (element >max);}
        {
            max = element;
        }
        return  max;
    }
        var fraindlist = megaFriend ( [ "opu", "topu ","tipuu","sehk majib " ] );
    
    console.log ("big fraind name:" , fraindlist);