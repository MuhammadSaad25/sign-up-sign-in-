// let users = [];

// (() => {

//     let item = localStorage.getItem("users");

//     if (item) users = JSON.parse(item);


//     let loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//         window.location.href = "./dashboard.html"
//         return;
//     }

// })()


function login(e) {
    e.preventDefault();

    let email = document.querySelector("#email1").value;
    let password = document.querySelector("#password1").value;


    let isFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            isFound = true;

            if (users[i].password === password) {
                document.querySelector("#result").innerText = "Login Successful";

                localStorage.setItem("loggedInUser", JSON.stringify(users[i]));

                window.location.href = "./dashbord.html"


                break;
            } else {
                document.querySelector("#error1").innerText = "Incorrect password";
                return;
            }
        }
    }
    if (!isFound) {
        document.querySelector("#error1").innerText = "user not found";
        return;
    }

    setTimeout(() => {
        document.querySelector("#result").innerText = "";
        document.querySelector("#error1").innerText = "";
    }, 5000);

    e.target.reset();
}