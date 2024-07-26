// Handling the "-> see source code" button in the footer
const source_leave = document.getElementById('source_code')
source_leave.addEventListener("click", () => {
        user_inp = confirm("This link redirects to GitHub, are you sure you want to leave ?")
        if (user_inp) {
            window.location.href = "https://github.com/Drenji"
        }
    }
)