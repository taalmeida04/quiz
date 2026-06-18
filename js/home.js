let user = JSON.parse(
    sessionStorage.getItem('user')
)

if(!user){
    window.location.href = '/html/index.html'
}