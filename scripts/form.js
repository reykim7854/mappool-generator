/* Functions for Processing Forms */
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

function generateMapForm(id, number) {
  // Generate the form for inputting the map id
  if (number > 0) {
    const mapForm = document.getElementById("mapFormContainer");
    const div = document.createElement("div");
    const header = document.createElement("h2");
    let inputText;
    div.classList.add("itemWrapper");
    div.appendChild(header);
    if (mapForm.hasChildNodes()) {
      mapForm.insertBefore(
        div,
        mapForm.getElementsByClassName("itemWrapper")[0]
      );
    } else {
      mapForm.appendChild(div);
    }
    if (id === "API") {
      const anchor = document.createElement("a");
      inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      anchor.setAttribute("href", "https://osu.ppy.sh/p/api");
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
}

function processMapForm(input, api) {
  // Get the map id from the map form
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
/* ------------------------------------------------------------------------ */
