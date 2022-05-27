let count = 0;
plus.addEventListener('click', () => {
    let divcloned = test1.cloneNode(true);
    divcloned.setAttribute('id', 'test1' + ++count);
    secteur.appendChild(divcloned);
});

selectOption = () => {
  document.getElementById('liste_evenement').addEventListener('change', () => {
      let select = document.getElementById("liste_evenement");//sélection de mon select par son id
      let choice = select.selectedIndex;  // Récupération de l'index du <option> choisi
      let texteOption = select.options[choice].text; //récupère le texte à l'intérieur de la balise option
      return texteOption;// retourne la valeur 'texte' de l'option choisie

  })
}


let tabAnt = new Array();//initialise mn tableau d'antécédents
let typeAnt = selectOption(); //stocke la valeur de mon select dans cette variable

//fonction pour afficher le tableau dans le HTML
function displayTab() {
  tabBody.innerHTML = '';
  tabAnt.forEach((element) => {
      let newLine =
          `<tr>
          <th scope="row">${element[0]}</th>
              <td>${element[1]}</td>
              <td>${element[2]}</td>
              <td>${element[3]}</td>
              <td>${element[4]}</td>
          </tr>`

      tabBodyHTML.innerHTML += newLine;
  });
}


//ajouter un antécédent
let addAnt = validate.addEventListener('click', (e) => {
  e.preventDefault();

  let select = document.getElementById("liste_evenement");//sélection de mon select par son id
  let choice = select.selectedIndex;  // Récupération de l'index du <option> choisi

  let texteOption = select.options[choice].text; //récupère le texte à l'intérieur de la balise option
  let newDate = document.getElementById('dateAnt'); //recupere la date
  let newDescription = document.getElementById('descriptionAnt'); //recupere la déscription
  let name = document.getElementById('nom'); // recupere le nom
  let numero_social = document.getElementById('number_sociale');


  if (dateAnt.value && texteOption && descriptionAnt.value && nom.value && number_sociale.value) {
      let item = [newDate.value, texteOption, name.value, newDescription.value, numero_social.value ];
      tabAnt.push(item);
      displayTab();
  }
})
let tabBodyHTML = document.getElementById('tabBody');//réinitialise le tbody 
validate.onclick = addAnt; //réinitialise mon bouton sans les données précédente