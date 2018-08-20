import '../css/style.css';

const imgs = document.querySelectorAll('.ex1__c');
const btn = document.querySelector('.ex1 button');
btn.addEventListener('click', function(){
	showImg(imgs);
});
function showImg(cll){
	if(showImg.count === cll.length) {
		showImg.count = 0;
	}
	if(showImg.count === 0) {
		showImg.arr = Array.prototype.slice.call(cll);
	}
	let currentImg = generateId(showImg.arr).next().value;
	if(showImg.hidden) showImg.hidden.classList.add('ex1__c--hidden');
	currentImg.classList.remove('ex1__c--hidden');
	showImg.count++;
	showImg.hidden = currentImg;
}
showImg.count = 0;
showImg.hidden = 0;
function* generateId(arr) {
	yield arr.splice(getRandomNumber(0, arr.length-1), 1)[0];
}
function getRandomNumber(min, max) {
	if(max === 0) return 0;
	return Math.floor(min + Math.random() * (max + 1 - min));
}