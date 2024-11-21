const data = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

let homeworldsRaw = [];
{
  for (let i = 0; i < data.characters.length; i++) {
    homeworldsRaw[i] = data.characters[i].homeworld;
    homeworldsRaw[i] = homeworldsRaw[i] ?? "other";
    /*veya üstteki satır yerine bu if'i kullanabilirsin
     if (homeworldsRaw[i] == (null || undefined)) {
      homeworldsRaw[i] = "other";
    } */
  }
}

console.log(homeworldsRaw);

/* üstteki for döngüsüne alternatif yol
let homeworldsRaw = data.characters.map(function (character) {
  return character.homeworld ?? "other";
}); 
veya
let homeworldsRaw2 = data.characters.map((character) => {
  return character.homeworld ?? "other";
   (bunu bi değişkene atıp onu da return edebilirsin)
});
console.log(homeworldsRaw2);*/

let homeworldsLowercase = homeworldsRaw.map((homeworld) => {
  return homeworld.toLowerCase();
});
/* üstteki map'e alternatif yol
let homeworldsLowercase = [];
for (let i = 0; i < homeworldsRaw.length; i++) {
  homeworldsLowercase[i] = homeworldsRaw[i].toLowerCase();
}  */
const homeworldsUnique = homeworldsLowercase.filter(
  (homeworld, index, ogArray) => {
    return ogArray.indexOf(homeworld) === index;
  }
);
/* filter fonksiyonu 3 parametre alır: sırasıyla element, index, orijinal array */

const homeworlds = homeworldsUnique;
console.log(homeworlds);

let filteredHomeworld = 0;
function handleClick(homeworld) {
  console.log("Old value: " + filteredHomeworld);
  console.log("New value: " + homeworld.value);
  filteredHomeworld = homeworld.value;
  filteredRenderedCharacters(filteredHomeworld);
}
{
  const container = document.getElementById("radio-container");
  container.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.classList.add("row");
  newDiv.classList.add("g-5");
  newDiv.classList.add("justify-content-center");
  for (let i = 0; i < homeworlds.length; i++) {
    const col = document.createElement("div");
    col.classList.add("col-4");
    col.classList.add("text-center");
    let radio = `<div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworlds[i]}" onclick="handleClick(this)" value="${homeworlds[i]}">
  <label class="form-check-label" for="homeworld-${homeworlds[i]}">
    ${homeworlds[i]}
  </label>
</div>`;
    col.innerHTML = radio;
    newDiv.appendChild(col);
  }
  container.appendChild(newDiv);
}
function radioButtonuTemizle() {
  const tumInputlar = document.getElementsByTagName("input");
  for (let i = 0; i < tumInputlar.length; i++) {
    if (tumInputlar[i].type === "radio") {
      tumInputlar[i].checked = false;
    }
  }
}
function renderCharacters() {
  const container = document.getElementById("character-container");
  container.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.classList.add("row");
  newDiv.classList.add("g-5");
  newDiv.classList.add("justify-content-center");

  for (let i = 0; i < data.characters.length; i++) {
    const col = document.createElement("div");
    col.classList.add("col-12");
    col.classList.add("col-md-6");
    col.classList.add("col-lg-4");
    col.classList.add("col-xl-3");
    let card = `
<div class="card h-100" style="width: 18rem;">
  <img src="${data.characters[i].pic}" class="card-img-top img-fluid">
  <div class="card-body">
    <h5 class="card-title">${data.characters[i].name}</h5>
    <p class="card-text">Homeworld: ${homeworldsLowercase[i]}</p>
  </div>
</div>`;
    col.innerHTML = card;

    newDiv.appendChild(col);
  }

  container.appendChild(newDiv);

  radioButtonuTemizle();

  button = document.getElementById("button");
  button.innerHTML = "Karakterleri Gizle";
  button.onclick = removeCharacters;
  button.classList.add("btn-danger");
  button.classList.remove("btn-primary");
}

function removeCharacters() {
  const container = document.getElementById("character-container");
  container.innerHTML = "";
  radioButtonuTemizle();
  button = document.getElementById("button");
  button.innerHTML = "Karakterleri Göster";
  button.onclick = renderCharacters;
  button.classList.add("btn-primary");
  button.classList.remove("btn-danger");
}

// filtered rendered characters

function filteredRenderedCharacters(filteredHomeworld) {
  const container = document.getElementById("character-container");
  container.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.classList.add("row");
  newDiv.classList.add("g-5");
  newDiv.classList.add("justify-content-center");

  for (let i = 0; i < data.characters.length; i++) {
    if (filteredHomeworld === homeworldsLowercase[i]) {
      const col = document.createElement("div");
      col.classList.add("col-12");
      col.classList.add("col-md-6");
      col.classList.add("col-lg-4");
      col.classList.add("col-xl-3");
      let card = `
<div class="card h-100" style="width: 18rem;">
  <img src="${data.characters[i].pic}" class="card-img-top img-fluid">
  <div class="card-body">
    <h5 class="card-title">${data.characters[i].name}</h5>
    <p class="card-text">Homeworld: ${homeworldsLowercase[i]}</p>
  </div>
</div>`;
      col.innerHTML = card;

      newDiv.appendChild(col);
    }

    container.appendChild(newDiv);

    button = document.getElementById("button");
    button.innerHTML = "Karakterleri Gizle";
    button.onclick = removeCharacters;
    button.classList.add("btn-danger");
    button.classList.remove("btn-primary");
  }
}
