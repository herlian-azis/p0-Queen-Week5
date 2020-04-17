function changeVocals (str) {
  //code di sini
  let hasil =""
  let vocab = "AIUEOaiueo"
  let ganti = "BJVFPbjvfp"
  for (let i = 0; i < str.length; i++) {
    flag = true
      for (let j = 0; j < ganti.length; j++) {
            if (str[i] == vocab[j]) {
                hasil +=  ganti[j]
                flag =false     
            }            
        }
                if(flag ==true){
                    hasil += str[i]
                }
        }
        return hasil
}

function reverseWord (str) {
  //code di sini
    let result = ""
  for (let i = str.length-1; i > -1 ; i--) {
      result += str[i]
      
  }
  return result
}

function setLowerUpperCase (str) {
  //code di sini
    let result =""
  for (let i = 0; i < str.length; i++) {
      if (str[i] != str[i].toLowerCase()) {
          result += str[i].toLowerCase()
        }else if(str[i] == str[i].toLowerCase()){
            result += str[i].toUpperCase()
      }    
  }
  return result
}

function removeSpaces (str) {
  //code di sini
    let result =""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            result += str[i]
        }
        
    }
    return result
}

function passwordGenerator (name) {
  //code di sini
    let vocals = changeVocals (name)
     let reverse = reverseWord (vocals)
    let set = setLowerUpperCase (reverse)
    let remove =removeSpaces (set)


    if(name.length <5 ){
        return "'Minimal karakter yang diinputkan adalah 5 karakter'"
    }
    return remove


}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'