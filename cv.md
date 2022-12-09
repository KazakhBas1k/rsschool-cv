# Balmukhambet Darkhan
[Это ссылка на Github](https://github.com/KazakhBas1k)
>No one will believe it until you believe it yourself.
```javascript 
function solution(str, ending){
  if(ending == ''){
    return true
  }
  let slice = ''
  slice = str.slice(-(ending.length), str.length)
  if(slice == ending){
    return true
  }else if(slice !== ending){
    return false
  }
}
```