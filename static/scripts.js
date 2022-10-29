function saveUser(x){
    document.cookie = "username="+x+"; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None; path=/";
    setTimeout(function(){
        location.href = "../";
    }, 850);
}
$('button').click(function(){


swal({
  title: 'Enter username',
  input: 'text'
}).then(function (email) {
  swal({
    type: 'success',
    html: 'Your username: ' + email
    
  })
document.getElementsByClassName("swal2-confirm")[0].onclick(saveUser(email));
})
  
});

