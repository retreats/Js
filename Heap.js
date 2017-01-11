const assert = require('assert');

function swap(ele,i,j){
  var t=ele[j];ele[j]=ele[i];ele[i]=t;
  return ele[j] === ele[i];
} 

function get(ele,i){
  if(i<ele.length){
     return ele[i];	
  }
  return undefined;
}
function Min(ele, i, j, k){
 if(j<ele.length && k<ele.length){  
   var min=ele[j]<ele[k] ? j : k;
   return ele[min]<ele[i] ? min:i;
 }else if(j<ele.length && ele[j]<ele[i]){
  return j;
 }else{
   return i;
 }
}

function Heap(){
 var elements = [];
 
 return {
  add: function(x){
    elements.push(x);
    var last = elements.length-1;
    while(last>0){
     var parent = last%2==0 ? (last-2)/2 : (last-1)/2; 
     if(elements[parent]>x){
       swap(elements,parent,last);
       last = parent;
     }else{
       break;	
     }
    }
  },
  deleteMin: function(){
   var top = elements[0];
   var last = elements.pop();		
   elements[0] =  last;
   var index = 0;
   var newIndex = 0;
   while(elements.length>2*index){
     newIndex = Min(elements, index, 2*index+1, 2*index+2);	
     if(newIndex === index) break;
     swap(elements,newIndex,index);
     index = newIndex;
   }
   return top;
  },
  min: function(){
    return elements[0];
  }
 }
}

var heap = new Heap();
var arr = [4,6,2,1,7,8,5,3];

arr.forEach(function(x){heap.add(x)});

console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());
console.log(heap.deleteMin());

//assert(5 === heap.remove(), "Element not found");
//assert(7 === heap.remove(), "Element not found");
