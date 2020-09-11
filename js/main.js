function validateForm(type) {
    return check(type)
}

function check(type) {

    let messages = []
    if (type == 'fName') {
        var firstName = document.forms["validationForm"]["fName"].value;
        if (firstName == '') {
            document.getElementById("fName").className = 'error';
            messages.push('First Name is required')
            pushError(messages);
            return false;
        } else if (firstName) {
            document.getElementById("fName").className = '';
            return true;
        }

    } else if (type == 'lName') {
        var lastName = document.forms["validationForm"]["lName"].value;
        if (lastName == '') {
            document.getElementById("lName").className = 'error';
            messages.push('Last Name is required')
            pushError(messages);
            return false;
        } else if (lastName) {
            document.getElementById("lName").className = '';
            return true;
        }
    } else if (type = 'emailAdd') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var emailAddress = document.forms["validationForm"]["emailAdd"].value;
        if (emailAddress.match(mailformat)) {
            document.getElementById("emailAdd").className = '';
            return true;

        } else {
            document.getElementById("emailAdd").className = 'error';
            return false;
        }

    } else {
        validationForm.addEventListener('submit', (e) => {
            e.preventDefault()
        });




    }


}

function submit() {
    const successElement = document.getElementById('saveMessage')
    successElement.innerText = 'Saved Sucessfully!'
    document.forms["validationForm"]["fName"].value = '';
    document.forms["validationForm"]["emailAdd"].value = '';
    document.forms["validationForm"]["lName"].value = '';

}

function pushError(messages) {
    if (messages) {
        if (messages.length > 0) {
            const errorElement = document.getElementById('errorMessage')
            errorElement.innerText = messages.join(', ')
        }

    }
}