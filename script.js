const form = document.getElementById('validation-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = Array.from(form.elements).filter(el => el.tagName === 'INPUT');
    const errors = validateInputs(inputs);
    displayErrors(errors);
});

function validateInputs(inputs) {
    const errors = {};

    inputs.forEach(input => {
        const { name, value } = input;
        errors[name] = [];

        switch (name) {
            case 'username':
                if (!value.trim()) {
                    errors[name].push('Username is required');
                }
                break;
            case 'email':
                if (!value.trim()) {
                    errors[name].push('Email is required');
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    errors[name].push('Invalid email format');
                }
                break;
            case 'password':
                if (!value.trim()) {
                    errors[name].push('Password is required');
                } else if (value.length < 8) {
                    errors[name].push('Password must be at least 8 characters long');
                }
                break;
        }
    });

    return errors;
}

function displayErrors(errors) {
    for (const fieldName in errors) {
        const errorMessages = errors[fieldName];
        const errorDiv = document.getElementById(`${fieldName}-error`);
        errorDiv.innerHTML = '';

        if (errorMessages.length > 0) {
            errorMessages.forEach(message => {
                const p = document.createElement('p');
                p.textContent = message;
                errorDiv.appendChild(p);
            });
        }
    }
}
