function ReplaceVowel(str){
    let result = ''
    for(let i = 0;i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            result += "i"
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(ReplaceVowel('gio'))



function removeVowel(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (!'aeiouAEIOU'.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  