function signup(e){
    event.preventDefault();

    var name = document.getElementById("fname").value
    var mail = document.getElementById("email").value
    var mnm = document.getElementById("mnum").value

    var user ={
        name:name,
        mail:mail,
        mnm:mnm
    };

    var json = JSON.stringify(user)
    localStorage.setItem(user,json)
    console.log("user added")

}