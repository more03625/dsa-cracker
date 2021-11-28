const countDuplicateInString = str => {
    
    let i, newStr = '';

    for(i = 0; i < str.length; i++){
        if(!newStr.includes(str[i])){
            console.log(str[i])
            // newStr.concat(str[i])
        }
        
    }
    return newStr;
   

        

    
}
console.log("countDuplicateInString ===> ", countDuplicateInString("bcabc"));