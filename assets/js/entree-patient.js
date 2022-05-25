
// Cacher les questions de la mutuelle
mutHidden.hidden = true;
nameMutHidden.hidden = true;
numMutHidden.hidden = true;

// Montrer et cacher les questions de la mutuelle si on clique sur non
noCMU.addEventListener('click', () => {
    mutHidden.hidden = false;
});

yesCMU.addEventListener('click', () => {
    mutHidden.hidden = true;
});

// Montrer et cacher les questions de la mutuelle si on clique sur oui
yesMut.addEventListener('click', () => {
    nameMutHidden.hidden = false;
    numMutHidden.hidden = false;
});

noMut.addEventListener('click', () => {
    nameMutHidden.hidden = true;
    numMutHidden.hidden = true;
});

// -------------------------------------------REGEX
let nameRegex = /^[A-Z][A-Za-z\é\è\ê\-]+$/;
let mailRegex = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/;
let secuRegex = /^[12][0-9]{2}[0-1][0-9](2[AB]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}$/;
let phoneRegex = /^(0|\\+33|0033)[1-9][0-9]{8}$/;

new Cleave('.telNumber', {
    phone: true,
    phoneRegionCode: 'FR'
});

lastName.addEventListener('change', () => {
    if (!lastName.value.match(nameRegex)) {
        lastNameP.innerText = 'Entrez un nom valide';
    }
});

firstName.addEventListener('change', () => {
    if (!firstName.value.match(nameRegex)) {
        firstNameP.innerText = 'Entrez un nom valide';
    }
});

secuNumber.addEventListener('change', () => {
    if (!secuNumber.value.match(secuRegex)) {
        secuP.innerText = 'Entrez un numéro valide';
    }
});

email.addEventListener('change', () => {
    if (!email.value.match(mailRegex)) {
        emailP.innerText = 'Entrez un email valide';
    }
});

telNumber.addEventListener('change', () => {
    if (!telNumber.value.match(phoneRegex)) {
        phoneP.innerText = 'Entrez un numéro valide';
    }
});

