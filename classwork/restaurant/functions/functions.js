let contactForm = document.forms["contactFillOut"]

const validate = () => {

    if(!contactForm.checkValidity()) {
        contactForm.className = "was-validated";
        return false;
    }


    return true;
}

const resetForm = () => {
    contactForm.class="needs-validation";
    $("#name").focus();
}