let hasSwapped = true;

{
 let numbers = [2, 5, 3, 8, 6, 1, 4, 9, 10, 7];
 while (hasSwapped) {
   hasSwapped = false;
   for (let i = 0; i <= numbers.length; i++) {
     if (numbers[i] > (numbers[i + 1])) {
       let temp = numbers[i];
       numbers[i] = numbers[i + 1];
       numbers[i + 1] = temp;
       hasSwapped = true;
     }
   };
 }
 console.log(numbers);
}