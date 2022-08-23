let loggedInUser = {};

        (() => {

            let item = localStorage.getItem("loggedInUser");

            if (item) loggedInUser = JSON.parse(item);
            else {
                window.location.href = "./index.html"
                return;
            }


            document.querySelector("#email").innerText = loggedInUser.email;

            document.querySelector("#name").innerText = loggedInUser.fullName;

        })()

        function doLogout() {
            localStorage.removeItem("loggedInUser");

            window.location.href = "./index.html";
        }
