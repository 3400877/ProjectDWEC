const loginForm = document.getElementById("div-login-form");
const inputs = loginForm.getElementsByTagName('input');

const validateMovie = (title, director, date, cast) => title.length > 0 && director.length > 0 && (date ?? undefined) && cast.some(actor => actor.length > 0);

const regexes = {
    user: /^[a-zA-Z0-9\_\-]{4, 16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1, 40}$/,
    password: /^.{4,12}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneNumber: /^\d{7,14}$/
};

const fields = {
    user: false,
    name: false,
    password: false,
    mail: false,
    phoneNumber: false,
};

const validateLogin = (e) => {
    const fieldName = e.target.name;
    validateField(regexes[fieldName], e.target, fieldName);
    switch (e.target.name) {
        case "password", "password2":
            validateField(regexes[user], e.target, 'user');
            break;
        case "nombre":
    }
};