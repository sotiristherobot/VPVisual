/**
 * Created by sotiris on 8/21/16.
 */
var sum = 0;

for (var i = 0; i < 1000; i++){

  if (i%3 == 0 || i%5 == 0){
    sum += i;
  }

}

console.log(sum);
