const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.first_name = validText(data.first_name) ? data.first_name : "";
    data.last_name = validText(data.last_name) ? data.last_name : "";
    data.username = validText(data.username) ? data.username : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = "First Name field is required";
    }

    if (Validator.isEmpty(data.last_name)) {
        errors.last_name = "Last Name field is required";
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    if (!Validator.isLength(data.username, { min:4, max:10 })) {
        errors.username = "Username must be between 4 and 10 chars";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min:6, max:15 })) {
        errors.password = "Password must be between 6 and 15 chars";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}