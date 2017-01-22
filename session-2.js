// get dom
var eles = document.getElementById('ll-uniq-blk');
var ele1 = document.getElementsByClassName('ll-homework');
var ele2 = document.querySelector('.ll-blk');  // . = class, # = id
var ele3 = document.querySelectorAll('.ll-homework'); // Select all elements with that class

console.log(eles);
console.log(ele1);
console.log(ele2);
console.log(ele3);

console.log(eles.textContent);
console.log(eles.innerHTML);
console.log(ele1[0].textContent);

setTimeout(function() {
	ele2.innerHTML = 'yyyyy';
}, 3000);
