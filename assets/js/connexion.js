validate.addEventListener('click', (e) => {
    e.preventDefault();
    let username = 'jean.dupont92';
    let password = 'Test@452';

    if (identifiant.value == username && Password1.value == password)
    {
        window.location.assign('accueil.html');
    }
    else 
    {
        alert ("Le mot de passe ou utilisateur est incorrect");
    }
    
})

