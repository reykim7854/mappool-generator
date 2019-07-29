/* Result Page Functions */
function selectMap(event) {
  event.preventDefault();
  const select = event.target.closest(".mapContent");
  unselectMap(select);

  const teamSelected = event.button === 0 ? 1 : 0;
  
  select.parentNode.classList.add(
    `${teamColor[teamSelected]}`
  );
}

function banMap(ban) {
  selectMap(ban);
  ban.classList.add("banned");
}

function unselectMap(unselect) {
  unselect.classList.remove("banned");
  unselect.parentNode.removeAttribute("class");
  unselect.parentNode.classList.add("mapContainer");
}
/* -------------------------------------------------------------------------------- */
