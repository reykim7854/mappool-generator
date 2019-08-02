/* 
 * Fallback for saved result 
 * for select/ban event listener
*/
const select = document.getElementsByClassName("selectMap");
const ban = document.getElementsByClassName("banMap");

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", e => selectMap(e));
  select[i].addEventListener("contextmenu", e => selectMap(e));
  ban[i].addEventListener("click", e => banMap(e));
  ban[i].addEventListener("contextmenu", e => banMap(e));
}
/*--------------------------------------------------------------*/

/* Result Page Functions */
function selectMap(event) {
  event.preventDefault();
  const select = event.target.closest(".mapContent");
  unselectMap(select);

  const teamSelected = event.button === 0 ? 1 : 0;

  select.parentNode.classList.add(`${teamColor[teamSelected]}`);
}

function banMap(event) {
  selectMap(event);
  const banned = event.target.closest(".mapContent");
  banned.classList.add("banned");
}

function unselectMap(event) {
  event.classList.remove("banned");
  event.parentNode.removeAttribute("class");
  event.parentNode.classList.add("mapContainer");
}
/* -------------------------------------------------------------------------------- */
