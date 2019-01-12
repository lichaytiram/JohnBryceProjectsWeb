var array1 = new Array(10);
for (var index = 0; index < array1.length; index++)
    array1[index] = Math.floor(Math.random() * 200);
console.log("The array is:");
for (var index = 0; index < array1.length; index++)
    console.log(array1[index]);
var sum = 0;
for (var index = 0; index < array1.length; index++)
    sum += array1[index];
console.log("The sun is: " + sum);
if (array1.length != 0)
    console.log("The avarage is: " + sum / array1.length);
else
    console.log("The array is empty");
var max = 0, indexMax = 0;
var min = array1[0], indexMin = 0;
for (var i = 0; i < array1.length; i++)
    if (array1[i] > max) {
        max = array1[i];
        indexMax = i;
    }
console.log("The max numbers is: " + max + " the index is:" + indexMax);
for (var i = 0; i < array1.length; i++)
    if (array1[i] < min) {
        min = array1[i];
        indexMin = i;
    }
console.log("The min numbers is: " + min + " the index is:" + indexMin);
var even = 0, odd = 0;
for (var index = 0; index < array1.length; index++)
    if (array1[index] % 2 == 0)
        even += array1[index];
    else
        odd += array1[index];
console.log("The sum of even numbers is: " + even + "\nThe sum of odd numbers is: " + odd);
var equalToZero = 0, notEqualToZero = 0;
for (var index = 0; index < array1.length; index++)
    if (array1[index] != 0)
        equalToZero++;
    else
        notEqualToZero++;
console.log("The sum of numbers equalToZero is: " + equalToZero + "\nThe sum of numbers notEqualToZero is: " + notEqualToZero);
