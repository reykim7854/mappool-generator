/* Result Page Functions */
function selectMap(select) {
  unselectMap(select);
  select.teamColorIdx = select.teamColorIdx || 0;
  select.parentNode.classList.add(
    `${teamColor[select.teamColorIdx++ % teamColor.length]}`
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
