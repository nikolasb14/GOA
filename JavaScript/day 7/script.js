function saveUserData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("userAge").value;

    const userObject = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    console.log("User data saved:", userObject);

}

