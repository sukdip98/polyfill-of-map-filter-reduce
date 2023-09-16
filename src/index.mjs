const arr=[2,5,7,9,10];
//polyfill of map
//map takes a call back function which again take three arguments - current element,index and the array itself

Array.prototype.myMap=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    temp.push(cb(this[i],i,this));
  }
  return temp;
}

const ans=arr.myMap((x)=>x*5);
console.log(ans);

//polyfill of filter

Array.prototype.myFilter=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
      temp.push(this[i]);
    }
  }
  return temp;
}

const result = arr.myFilter(x=>x>5);
console.log(result);


//polyfill of reduce


Array.prototype.myReduce=function(cb,initial){
  let acc=initial;
  for(let i=0;i<this.length;i++){
    acc = acc?cb(acc,this[i],i,this):this[i];
  }
  return acc;
}

const sum=arr.myReduce((a,x)=>{
  a=a+x;
  return a;
},0);
console.log(sum);