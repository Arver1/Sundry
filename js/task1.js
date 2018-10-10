const data = require('./data.js');

const arr = new Array(24).fill([]);

const nightArr = [];
const dayArr = [];
const otherArr = [];

for(let it of data.devices) {
  switch(it.mode) {
    case 'night': nightArr.push(it); break;
    case 'day': dayArr.push(it); break;
    default: otherArr.push(it);
  }
}

nightArr.sort((a,b)=> a.duration < b.duration);
dayArr.sort((a,b)=> a.duration < b.duration);
otherArr.sort((a,b)=> a.duration < b.duration);


nightArr.reduce((prev,current,index)=>{
  const start = prev - current.duration;
  if(start < 14) throw new Error(`Задано слишком много`+current.duration);
  for(let i = arr.length-1; i >=start; i--){
    arr[i].push(current);
  }
}, arr.length-1);

console.log(arr);