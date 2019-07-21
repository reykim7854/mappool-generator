function isInputEmpty(input) {
  // Checks wether the input is empty or not
  let bool = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === "") {
      bool = true;
    }
  }
  return bool;
}

function countInput(input) {
  // Checks if input is from 1 to 10
  let bool = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value <= 0 || input[i].value > 10) {
      bool = true;
    }
  }
  return bool;
}

function generateMapForm(id, number) {
  // Generate the form for inputting the map id
  const mapForm = document.getElementById("mapFormContainer");
  const div = document.createElement("div");
  const header = document.createElement("h2");
  let inputText;
  div.classList.add("itemWrapper");
  div.appendChild(header);
  if (mapForm.hasChildNodes()) {
    mapForm.insertBefore(div, mapForm.getElementsByClassName("itemWrapper")[0]);
  } else {
    mapForm.appendChild(div);
  }
  if (id === "API") {
    const anchor = document.createElement("a");
    inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    anchor.setAttribute("href", "https://old.ppy.sh/p/api");
    anchor.setAttribute("target", "_blank");
    anchor.innerHTML = id + " Key";
    header.appendChild(anchor);
    inputText.setAttribute("placeholder", `Insert ${id} Key here`);
    inputText.id = "apiKey";
    div.appendChild(inputText);
  } else {
    header.innerHTML = id + " Pool";
    for (let i = 0; i < number; i += 1) {
      inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      inputText.setAttribute("placeholder", `${id} ${i + 1} Map ID`);
      inputText.classList.add(id + "Map", "mapInput");
      div.appendChild(inputText);
    }
  }
}

function processPoolForm(input) {
  // Process the form to generate the map form
  const apiInput = document.getElementById("apiKey");
  let items;
  if (apiInput === null) {
    items = input.length - 1;
  } else {
    items = input.length - 2;
  }
  for (let i = items; i >= 0; i -= 1) {
    generateMapForm(input[i].id, input[i].value);
  }
  const poolForm = document.getElementById("poolFormContainer");
  const mapForm = document.getElementById("mapFormContainer");
  poolForm.classList.add("hide");
  mapForm.classList.remove("hide");
}

function requestData(mapId, divId, api, mod, order) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://osu.ppy.sh/api/get_beatmaps?k=${api}&b=${mapId}`,
    true
  );
  request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      const mapWrapper = document.getElementById(divId);
      const mapContainer = document.createElement("div");
      const mapContent = document.createElement("div");
      const creator = document.createElement("span");
      const difficulty = document.createElement("span");
      const title = document.createElement("div");
      const mapDetailsContainer = document.createElement("div");
      const mapCreator = document.createElement("div");
      const mapDifficulty = document.createElement("div");
      const mapMetadata = document.createElement("div");
      const modImgContainer = document.createElement("div");
      const modImgWrapper = document.createElement("div");
      const modImg = document.createElement("img");
      const blankDiv = document.createElement("div");
      data.forEach(map => {
        mapContainer.style.backgroundImage = `url(https://assets.ppy.sh/beatmaps/${
          map.beatmapset_id
        }/covers/cover.jpg)`;
        mapContainer.classList.add("mapContainer");
        mapContainer.style.order = order;
        title.innerHTML = `${map.artist} - ${map.title}`;
        title.classList.add("bold");
        mapDetailsContainer.classList.add("mapDetailsContainer");
        mapCreator.innerHTML = "mapper ";
        mapCreator.classList.add("mapDetails");
        creator.innerHTML = map.creator;
        creator.classList.add("bold");
        mapDifficulty.innerHTML = "difficulty ";
        mapDifficulty.classList.add("mapDetails");
        difficulty.innerHTML = map.version;
        difficulty.classList.add("bold");
        mapContent.classList.add("mapContent");
        mapMetadata.classList.add("mapMetadata");
        mapMetadata.setAttribute("onclick", "unselectMap(this.parentNode)");
        modImgContainer.classList.add("modImgContainer", "selectMap");
        modImgContainer.setAttribute("onclick", "selectMap(this.parentNode)");
        modImgWrapper.classList.add("modImgWrapper");
        modImg.setAttribute("src", `src/${mod}.png`);
        blankDiv.classList.add("banMap");
        blankDiv.setAttribute("onclick", "banMap(this.parentNode)");
      });
      mapDifficulty.appendChild(difficulty);
      mapCreator.appendChild(creator);
      mapDetailsContainer.appendChild(mapCreator);
      mapDetailsContainer.appendChild(mapDifficulty);
      mapMetadata.appendChild(title);
      mapMetadata.appendChild(mapDetailsContainer);
      modImgWrapper.appendChild(modImg);
      modImgContainer.appendChild(modImgWrapper);
      mapContent.appendChild(blankDiv);
      mapContent.appendChild(mapMetadata);
      mapContent.appendChild(modImgContainer);
      mapContainer.appendChild(mapContent);
      mapWrapper.appendChild(mapContainer);
    } else {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = `Gah, it's not working!`;
      resultWrapper.appendChild(errorMessage);
    }
  };
  request.send();
}

function processMapForm(input, api) {
  let map = input.getElementsByClassName("mapInput");
  const resultWrapper = document.getElementById("resultWrapper");
  const mapWrapper = document.createElement("div");
  mapWrapper.id = `${map[0].classList[0]}Result`;
  mapWrapper.classList.add("resultContainer");
  resultWrapper.appendChild(mapWrapper);

  for (let i = 0; i < map.length; i++) {
    requestData(map[i].value, mapWrapper.id, api, map[0].classList[0], i + 1);
  }
}

function submitPool() {
  // Submit the form to generate the map form
  let poolInput = document.getElementsByClassName("poolInput");
  if (isInputEmpty(poolInput)) {
    alert("Please fill all of the input field!");
  } else {
    if (countInput(poolInput)) {
      alert("Sorry, you can only input from 1 to 10 per pool for now");
    } else {
      processPoolForm(poolInput);
      document.getElementById("previous").removeAttribute("class");
      document
        .getElementById("previous")
        .setAttribute(
          "onclick",
          "goBack('poolFormContainer', 'mapFormContainer')"
        );
      document.getElementById("submit").setAttribute("onclick", "submitMap()");
    }
  }
}

function submitMap() {
  let mapInput = document.getElementsByClassName("mapInput");
  if (isInputEmpty(mapInput)) {
    alert("Please fill all of the input field!");
  } else {
    const mapForm = document.getElementById("mapFormContainer");
    let mapFormInput = mapForm.getElementsByClassName("itemWrapper");
    const body = document.getElementsByTagName("body")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const resultWrapper = document.createElement("section");
    resultWrapper.id = "resultWrapper";
    resultWrapper.classList.add("itemContainer");
    body.insertBefore(resultWrapper, footer);
    const api = document.getElementById("apiKey").value;
    for (let i = 0; i < mapFormInput.length - 1; i += 1) {
      processMapForm(mapFormInput[i], api);
    }
    mapForm.classList.add("hide");
    document
      .getElementById("previous")
      .setAttribute("onclick", "goBack('mapFormContainer', 'resultWrapper')");
    document.getElementById("submit").classList.add("hide");
  }
}

function goBack(showSection, hideSection) {
  // Go to previous form
  const previous = document.getElementById("previous");
  const submit = document.getElementById("submit");
  const showElement = document.getElementById(showSection);
  const hideElement = document.getElementById(hideSection);
  showElement.classList.remove("hide");
  if (showSection === "poolFormContainer") {
    let childElement = hideElement.getElementsByClassName("itemWrapper");
    for (let i = childElement.length - 2; i >= 0; i -= 1) {
      childElement[i].remove();
    }
    previous.classList.add("hide");
    submit.setAttribute("onclick", "submitPool()");
    hideElement.classList.add("hide");
  } else {
    hideElement.remove();
    previous.setAttribute(
      "onclick",
      "goBack('poolFormContainer', 'mapFormContainer')"
    );
    submit.classList.remove("hide");
    submit.style.border;
  }
}

function selectMap(select) {
  let team = ["redBorder", "blueBorder"];
  if (select.classList.contains("banned")) {
    select.classList.remove("banned");
  }
  select.teamIdx = select.teamIdx || 0;
  select.parentNode.removeAttribute("class");
  select.parentNode.classList.add("mapContainer");
  select.parentNode.classList.add(`${team[select.teamIdx++ % team.length]}`);
}

function banMap(ban) {
  let team = ["redBorder", "blueBorder"];
  ban.classList.add("banned");
  ban.teamIdx = ban.teamIdx || 0;
  ban.parentNode.removeAttribute("class");
  ban.parentNode.classList.add("mapContainer");
  ban.parentNode.classList.add(`${team[ban.teamIdx++ % team.length]}`);
}

function unselectMap(unselect) {
  unselect.classList.remove("banned");
  unselect.parentNode.removeAttribute("class");
  unselect.parentNode.classList.add("mapContainer");
}
