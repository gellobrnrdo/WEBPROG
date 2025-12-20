// Load theme & form values
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        document.body.classList.add(savedTheme);
    }

    const form = document.getElementById('registrationForm');
    if(form){
        [...form.elements].forEach(el => {
            const saved = localStorage.getItem(el.name);
            if(saved){
                if(el.type === 'radio' || el.type === 'checkbox'){
                    if(el.value === saved) el.checked = true;
                } else {
                    el.value = saved;
                }
            }

            el.addEventListener('input', () => {
                if(el.type === 'radio' || el.type === 'checkbox'){
                    if(el.checked) localStorage.setItem(el.name, el.value);
                } else {
                    localStorage.setItem(el.name, el.value);
                }
            });
        });
    }
});

// Theme toggle only on registration page
const themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch){
    themeSwitch.checked = localStorage.getItem('theme') === 'dark';
    themeSwitch.addEventListener('change', () => {
        if(themeSwitch.checked){
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Registration form validation & success
const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');

if(form){
    form.addEventListener('submit', function(event){
        errorMsg.textContent = '';

        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const dob = new Date(form.dob.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();
        if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;

        if(password !== confirmPassword){
            event.preventDefault();
            errorMsg.textContent = "Passwords do not match!";
            return;
        }

        if(age < 18){
            event.preventDefault();
            alert("You must be at least 18 years old!");
            return;
        }

        if(!form.terms.checked){
            event.preventDefault();
            alert("You must agree to the Terms & Conditions!");
            return;
        }

        // All validation passed
        event.preventDefault();
        alert("Registration Successful!");
        form.reset();
        [...form.elements].forEach(el => localStorage.removeItem(el.name));
    });
}
