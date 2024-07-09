let Auth=localStorage.getItem('user')
if(Auth==null){
    window.location.href="./Auth/SignUp/index.html"
}