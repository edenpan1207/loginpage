function submitAnswers(){
  
  var a = document.getElementById('account');
  var b = document.getElementById('password');
  var x = document.getElementById('space');
  
  // simple validation
  // input value's length must larger than 5 
  if(a.value.length>5 && b.value.length>5){
    x.style.color = 'green';
   x.innerHTML = '<span>登錄成功</span>';
    a.style.border = '1px solid gray';
    b.style.border = '1px solid gray';
  } else if (a.value.length<=5 || b.value.length>5){
     x.innerHTML = '<span>帳號長度不足</span>';
    x.style.color = 'red';  
    a.style.border = '1px solid red';
    b.style.border = '1px solid gray';
  } else if(a.value.length>5 || b.value.length<=5){
    x.innerHTML = '<span>密碼長度不足</span>';
    x.style.color = 'red';      
    b.style.border = '1px solid red';
    a.style.border = '1px solid gray';
  } 
  
  return false;
}

