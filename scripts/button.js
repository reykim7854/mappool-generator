/* Footer Button Functions */
function submitPool() {
  // Submit the form to generate the map form
  let poolInput = document.getElementsByClassName("poolInput");
  if (isInputEmpty(poolInput)) {
    alert("Please fill all of the input field!");
  } else {
    if (countInput(poolInput)) {
      alert("Sorry, you can't input more than 60 maps for now");
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
/* -------------------------------------------------------------- */
