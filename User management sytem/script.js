console.log("Attached");
function toggleScreen(id) {
    let btn = document.getElementsByClassName('block');
    Array.from(btn).forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(id).style.display = "inline-block";
}


// Generate List when page reload
generateList();



// ============ Generate Users List ==========
function generateList() {

    toggleScreen('genUsers');

    let users = localStorage.getItem('users');
    if (users === null) {
        usersArr = [];
        document.getElementById('usersList').innerHTML = `Nothing to show, Please Add a user.`
    }
    else {
        usersArr = JSON.parse(users);
        let html = '';
        usersArr.forEach(function (element, index) {
            html += `${index + 1} ) ${element.email} <br>`
        });
        document.getElementById('usersList').innerHTML = html;
    }
}



// Function to add users in the localStorage
function addUser() {
    let user = {
        name: document.getElementById('username').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim()
    };

    // if any field is empty then return false
    if (user.name === '' || user.email === '' || user.password === '') {
        alert("please fill required fields");
        return false
    }

    // else push object into the localStorage and return true
    else {


        let users = localStorage.getItem('users');
        if (users === null) {
            usersArr = [];
        }
        else {
            usersArr = JSON.parse(users);
        }
        usersArr.push(user);
        localStorage.setItem('users', JSON.stringify(usersArr));
        alert('User successfuly added');
        // resetting values
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        generateList();
        return false
    }
}


// Function to delete user from the localStorage
function deleteUser() {
    let delEmail = document.getElementById('delEmail').value.trim();
    if (delEmail === '') {
        alert('Please fill the email field');
        return false
    }
    else {
        let usersArr = JSON.parse(localStorage.getItem('users'));
        let i;
        usersArr.forEach(function (element, index) {
            if (element.email === delEmail) {
                i = index;
            }
        });
        if (i === undefined) {
            alert('There is no such user exit');
            document.getElementById('delEmail').value = '';
            return false
        }
        else {
            usersArr.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(usersArr));
            alert('Successfuly deleted');
            // reset value
            document.getElementById('delEmail').value = '';
            generateList();
            return false
        }
    }
}


// Login Function
function login() {
    let loginEmail = document.getElementById('loginEmail').value.trim();
    let loginPassword = document.getElementById('loginPassword').value.trim();
    let users = localStorage.getItem('users');
    if (users === null) {
        alert('There is no such a user! Add new user ');
    }
    else {
        usersArr = JSON.parse(users);
        let f = -1;
        usersArr.forEach(function (element) {
            if (element.email === loginEmail && element.password === loginPassword) {
                document.getElementById('headerName').innerHTML = element.name;
                f = 0;
            }
        });
        if (f === -1) {
            alert('Incorrect Email or Password try again');
            return false
        }
        else {
            alert('Successfully Logged In');
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
            generateList();
            
            return false
        }
    }
}