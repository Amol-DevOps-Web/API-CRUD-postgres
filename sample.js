function arrSort(arr){
    let len = arr.length;
    let arrEven=[];
    let arrOdd=[];
    let arrFinal =[];
    let j=0,t=0;
    let half = Math.floor(len/2);
    for(let i=0;i<len;i++){
      if(Math.floor(arr[i]%2)==0){
          
          arrEven[j] = arr[i];
          j++
      }else{
         
           arrOdd[t] = arr[i]; 
      
           t++
      }
      
    }
    
    arrEven.sort()
    
      let p=0
    //   for(let i=0;i<arrEven.length;i++){
    //     console.log("Even",arrEven[i])
    // }
      for(let i=0;i<arrEven.length;i++){
        
        arrFinal[i]=arrEven[i];
      
        p++;
      }
      //arrOdd.sort()  
    // let min = arrOdd[0]
     arrOdd.sort(function(a,b){return a-b})

      for(let i=0;i<arrOdd.length;i++){
                 arrFinal[p+i]=arrOdd[i];    
      
                 
                          
      }
     return arrFinal;
   }
   
   let arr =[1,24,5,78,3,56,34,45]
   let finall= arrSort(arr)
   console.log("final")
   for(let i=0;i<finall.length;i++){
         console.log(finall[i]);
       }