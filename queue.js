class Queue {
  constructor() {
    this.array=[];
  }
addelement(element) {

  this.array.push(element);
}
deleteelement(){
  if(this.array.length==0){
    document.write("underflow condition");
  }
  else{
       this.array.shift();
       var text2="";
       for(var m=0;m<this.array.length;m++){
         text2+=this.array[m]+" ";
         document.getElementById("hh").innerHTML= text2;
       }
  }
}
frontelement(){
  if(this.array.length==0){
    document.getElementById("ff").innerHTML= "no elements present in array.";
  }
  else{
    document.getElementById("ff").innerHTML= this.array[0];
  }
}
printqueue(){
  if(this.array.length==0){
    return "queue is empty";
  }
  else{
    var text="",i=0;
    for(i=0;i<this.array.length;i++){
      text+=this.array[i]+" ";
      document.getElementById("aa").innerHTML= text;
    }
  }
}
}
