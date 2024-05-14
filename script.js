const section = document.getElementById("section");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
function showPokemon(arr) {
  arr.map((item) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${item.toLowerCase()}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "Error";
        }
      })
      .then((data) => {
        const html = `
        <div id="container"> 
        <p id="pokemon"></p>
        <div id="form-container">
          <p class="title">Form:</p>
          <p id="form">${data.forms.map((item) => {
            return ` ${item.name.toUpperCase()} `;
          })}</p>
        </div>
        <div id="abilities-container">
          <p class="title">Abilities:</p>
          <p id="ability">${data.abilities.map((item) => {
            return ` ${item.ability.name} `;
          })}</p>
        </div>
        
        <div id="height-container">
          <p class="title">Height:</p>
          <p id="height">${data.height}</p>
        </div>
        <div id="species-container">
          <p class="title">Species:</p>
          <p id="spec">${data.species.name}</p>
        </div>
        <div id="faces-container">
          <p class="title">Front Face:</p>
          <img alt="front" src="${data.sprites.front_default}" id="front" />
          <p class="title">Back Face:</p>
          <img alt="back" src="${data.sprites.back_default}" id="back" />
        </div>
      </div>
     `;

        section.insertAdjacentHTML("beforeend", html);
      });
  });
}

showPokemon([
  "Pikachu",
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Eevee",
  "Jigglypuff",
  "Snorlax",
  "Mewtwo",
  "Gyarados",
  "Magikarp",
  "Dragonite",
  "Lucario",
  "Psyduck",
  "Meowth",
  "Charizard",
]);
