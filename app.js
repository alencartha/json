var header = document.querySelector('header')
var section = document.querySelector('section')


var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var superHeroesText = request.response;
    var superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {

    var heroes = jsonObj['members'];

    for (heroe of heroes) {

        var div = document.createElement('div')
        var nameHeroe = document.createElement('h2')
        var age = document.createElement('h3')
        var powers = document.createElement('p')

        nameHeroe.textContent = heroe.name
        age.textContent =`Idade: ${heroe.age}`
        powers.textContent = `Poderes: ${heroe.powers}`

        div.appendChild(nameHeroe)
        div.appendChild(age)
        div.appendChild(powers)

        section.appendChild(div)
    }
}

