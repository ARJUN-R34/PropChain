function registrarlogin(event){
    event.preventDefault();
       var registrarprivatekey = document.getElementById('registrarprivatekey').value;
      $.post('/registrar', {registrarprivatekey}, 'json');
}

function userlogin(){
    // event.preventDefault();
        console.log('write user function running');
       var userprivatekey = document.getElementById('userprivatekey').value;
       var aadhar = document.getElementById('aadhar').value;
       var name = document.getElementById('name').value;
      $.post('/user',{userprivatekey, aadhar, name},(data, textStatus, jqXHR)=>{
        if(data.ss=1){
          console.log('inside aaaa');
         sessionStorage.clear();
         sessionStorage.setItem("no",data.userprivatekey);
         sessionStorage.setItem("name",data.name);
        window.location.href="/user";
         }
         else{
           window.location.href="/test";
        }
      },'json');
}
