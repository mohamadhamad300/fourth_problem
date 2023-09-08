
//import  getUniqueValues from  "./remove_duplicate.js";

/*
 
Given a single input array, write a function that outputs an unique array of values**
What time complexity is your solution?
*
Your solution shouldn't using any build in function.

/
  
example usage:
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {
  // TO DO
};
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6] 
*/


const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

let containerData={}

var getUniqueValues=(arrOfNum)=>{

    for(i=0;i<arrOfNum.length;i++){
if(!containerData[arrOfNum[i]]){
    containerData[arrOfNum[i]]=arrOfNum[i];
    console.log( containerData[arrOfNum[i]])

}

    }

    return  Object.keys(containerData);
    return "worked";
}





console.log(getUniqueValues(arrOfNum))