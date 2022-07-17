
let users = []
let loggedin = []
function getAllUsers() {
    let userInStringForm = localStorage.getItem("users");
    let loggedinForm = localStorage.getItem("loggedin");
    users = JSON.parse(userInStringForm) || [];
    loggedin = JSON.parse(loggedinForm) || [];
    console.log(users);
    console.log(loggedin);
}
getAllUsers();

function signup() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let gender = document.getElementById('gender');
    let city = document.getElementById('city');
    let address = document.getElementById('address');

        let newUser = {
            user_name: name.value,
            user_email: email.value,
            user_password: password.value,
            user_gender: gender.value,
            user_city:city.value,
            user_address: address.value

        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
    }

function login() {
    let login_email = document.getElementById('login_email');
    let login_password = document.getElementById('login_password');

    for (let i = 0; i < users.length; i++) {
        if (users[i].user_password == login_password.value && users[i].user_email == login_email.value) {
            localStorage.setItem("logged in", JSON.stringify(users[i]))
            window.location.href = "./dashbord.html";
            break
        }
        else if (users[i].user_password !== login_password.value && users[i].user_email !== login_email.value) {
        }    
    }
}
function logout() {
    localStorage.removeItem("logged in");
    window.location.href = "./login.html";
    
}
