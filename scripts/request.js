function requestData(mapId, divId, api, mod, order) {
  // Generate the mappool card
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
